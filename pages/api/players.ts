import type {NextApiRequest, NextApiResponse} from 'next';
import fs from 'fs';

export default async function handleGetPlayers(
  req: NextApiRequest,
  res: NextApiResponse
) {
  fs.readFile('db/players.json', async (err, data) => {
    const result = await JSON.parse(String(data));
    res.json(result);
  });
}
