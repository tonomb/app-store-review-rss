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
    let reviews = await fetchRssReviewsAndSave(appId, rssReviewsUrl);

    // Returns Reviews
    if (reviews) {
      res.status(200).json(reviews);
    } else {
      res.status(500).json({
        error:
          'There are no reviews available for that ID, Please check the id and try again',
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetcing the reviews rss feed' });
  }
}
