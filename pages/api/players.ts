import type {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs/promises';

export default async function handleGetPlayers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawData = await fs.readFile('db/players.json', 'utf8');
  const result = await JSON.parse(rawData);
  res.json(result);
}
