export async function fetchRssReviews(feedUrl: string) {
  try {
    const feed = await fetch(feedUrl);

    if (feed.status === 200) {
      return feed.json();
    } else {
      console.log(feed.statusText);
    }
  } catch (error) {
    console.log(error);
  }
}
