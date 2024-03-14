import express from 'express';
import cors from 'cors';

import { reviewsRouter } from './routes/reviewsRoutes';

const app = express();
app.use(cors());

const port = 4000;

app.use('/api/rss', reviewsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
