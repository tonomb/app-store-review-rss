import { readData, writeData } from '../database';

export async function fetchRssReviewsAndSave(appid: string, feedUrl: string) {
  try {
    const response = await fetch(feedUrl);
    const feed = await response.json();

    if (response.status === 200) {
      //save data
      const rssReviews = await cleanRssReviews(feed);
      await writeData(appid, rssReviews);
      return cleanRssReviews(feed);
    } else {
      console.log(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getLatestReviews(appId: string) {
  const reviews = await readData(appId);

  // TODO: Check 48 hour time windo, its not big enough
  // const latestReviews = filterLast48Hours(reviews);
  // return latestReviews;
  return reviews;
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
