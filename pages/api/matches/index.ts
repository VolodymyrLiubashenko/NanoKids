import type {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';

export default async function handleGetMatches(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const rawData = fs.readFileSync('db/matches.json', 'utf8');
  const matches = JSON.parse(rawData);
  res.status(200).json(matches);
}
