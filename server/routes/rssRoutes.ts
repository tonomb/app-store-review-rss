import express from 'express';
import { fetchRssFeed } from '../controllers/rssController';

const router = express.Router();

router.get('/:appId', fetchRssFeed);

export const rssRouter = router;
