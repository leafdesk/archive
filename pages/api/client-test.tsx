import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../libs/client';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  client.member.create({
    data: {
      name: '이상건A',
      sex: '남성',
      email: 'test@test.com',
    },
  });

  res.json({
    ok: true,
    data: 'data',
  });
};

export default handler;
