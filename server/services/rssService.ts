export async function fetchRssReviews(feedUrl: string) {
  try {
    const response = await fetch(feedUrl);
    const feed = await response.json();

    if (response.status === 200) {
      return cleanRssReviews(feed);
    } else {
      console.log(response.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}

function cleanRssReviews(rssFeed: any) {
  const rssReviews = rssFeed.feed.entry;
  return rssReviews;
}
