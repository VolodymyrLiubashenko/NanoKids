import {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs/promises';

export default async function handleGetMatches(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawData = await fs.readFile('db/matches.json', 'utf8');
  const matches = await JSON.parse(rawData);

  res.json(matches);
}
