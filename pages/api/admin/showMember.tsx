import client from '@libs/client/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  console.log('showMember 들어옴');
  console.log(req.body);

  return res.json({ ok: true });
};

export default withHandler({
  methods: ['GET', 'POST'],
  handler: handler,
});
