import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/client';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method != 'POST') res.status(401).end();
  res.status(200).end();
  console.log(req.body);
};

export default handler;
