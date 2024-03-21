import { readData, writeData } from '../database/utils';

export async function fetchRssReviewsAndSave(appid: string) {
  let allReviews = [] as any;

  let page = 1;
  for (let i = 0; i < 10; i++) {
    const feedUrl = `https://itunes.apple.com/us/rss/customerreviews/id=${appid}/sortBy=mostRecent/page=${page}/json`;
    try {
      const response = await fetch(feedUrl);
      const feed = await response.json();

      //write the data to a file
      const rssReviews = await cleanRssReviews(feed);

      allReviews = [...allReviews, ...rssReviews];

      await writeData(appid, allReviews);

      page += 1;
    } catch (error) {
      console.log(error);
    }
  }

  return await getLatestReviews(appid);
}

export async function getLatestReviews(appId: string) {
  try {
    const reviews = await readData(appId);
    const latestReviews = await filterLast48Hours(reviews);
    return latestReviews;
  } catch (err) {
    console.log('No Database for that id');
  }
}

async function cleanRssReviews(rssFeed: any) {
  const rssReviews = rssFeed.feed.entry;
  return rssReviews;
}

async function filterLast48Hours(reviews: any) {
  const lastDate = new Date();
  lastDate.setHours(lastDate.getHours() - 48);

  let latestReviews = reviews.filter((review: any) => {
    const reviewDate = new Date(review.updated.label);
    return reviewDate > lastDate;
  });

  return latestReviews;
}
