import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs/promises';

export default async function getNews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawData = await fs.readFile('db/news.json', 'utf8');
  const news = await JSON.parse(rawData);

  res.json(news);
}
