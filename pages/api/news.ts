import {NextApiRequest, NextApiResponse} from 'next';
import {news} from 'db/news';

export default async function handleGetNews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json(news);
}
