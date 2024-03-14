import { Request, Response } from 'express';
import {
  fetchRssReviewsAndSave,
  getLatestReviews,
} from '../services/reviewsService';

export async function fetchRssFeed(req: Request, res: Response) {
  const appId = req.params.appId;
  const rssReviewsUrl = `https://itunes.apple.com/us/rss/customerreviews/id=${appId}/sortBy=mostRecent/page=1/json`;
  try {
    // Get Reviews from RSS Feed and save them in database
    await fetchRssReviewsAndSave(appId, rssReviewsUrl);

    // Get last 48 hours of reviews from database
    let reviews = await getLatestReviews(appId);

    // Returns Reviews
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
