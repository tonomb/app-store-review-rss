import { Request, Response } from 'express';
import { fetchRssReviews } from '../services/rssService';

export async function fetchRssFeed(req: Request, res: Response) {
  const rssReviewsUrl = `https://itunes.apple.com/us/rss/customerreviews/id=${req.params.appId}/sortBy=mostRecent/page=1/json`;
  try {
    let reviews = await fetchRssReviews(rssReviewsUrl);

    if (reviews) {
      res.status(200).json(reviews);
    } else {
      res.status(500).json({ error: 'Please check the app id and try again' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetcing the reviews rss feed' });
  }
}
