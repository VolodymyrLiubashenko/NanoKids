import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';

export default async function getNews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawData = fs.readFileSync('db/news.json', 'utf8');
  const news = JSON.parse(rawData);

  res.json(news);
}
