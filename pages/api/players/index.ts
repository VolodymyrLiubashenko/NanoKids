import type {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';

export default async function handleGetPlayers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let rawdata = fs.readFileSync('db/players.json', 'utf8');
  const result = JSON.parse(rawdata);
  res.send(result);
}
