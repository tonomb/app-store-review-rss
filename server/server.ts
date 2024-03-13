import express from 'express';
import cors from 'cors';

import { rssRouter } from './routes/rssRoutes';

const app = express();
app.use(cors());

const port = 4000;

app.use('/api/rss', rssRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
