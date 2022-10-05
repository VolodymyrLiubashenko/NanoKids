import {NextApiRequest, NextApiResponse} from 'next';
import {matches} from 'db/matches';

export default async function handleGetMatches(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.json(matches);
}
