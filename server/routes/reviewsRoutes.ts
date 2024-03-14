import express from 'express';
import { fetchRssFeed } from '../controllers/reviewsController';

const router = express.Router();

router.get('/:appId', fetchRssFeed);

export const reviewsRouter = router;
