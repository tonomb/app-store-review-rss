import { Request, Response } from 'express';
import { fetchRssReviews } from '../services/rssService';

export async function fetchRssFeed(req: Request, res: Response) {
  try {
    let feed = await fetchRssReviews(
      'https://itunes.apple.com/us/rss/customerreviews/id=1446075923/sortBy=mostRecent/page=1/json',
    );

    if (feed) {
      res.status(200).json(feed);
    } else {
      res.status(500).json({ error: 'something went wrong' });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while fetcing the rss feed' });
  }
}
