import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs/promises';

export default async function handleGetNews(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawData = await fs.readFile('./db/players.json', 'utf8');
  const players = await JSON.parse(rawData);

  res.json(players);
}
