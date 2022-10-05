import {NextApiRequest, NextApiResponse} from 'next';
import {players} from 'db/players';

export default async function handleGetNews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json(players);
}
