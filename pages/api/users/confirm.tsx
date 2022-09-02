import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/client/client';
import withHandler, { ResponseType } from '../../../libs/server/withHandler';
import { withIronSessionApiRoute } from 'iron-session/next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    // include: { member: true },
  });
  if (!exists) res.status(404).end();
  req.session.member = {
    id: exists?.userId,
  };
  await req.session.save();
  res.status(200).end();
};

export default withIronSessionApiRoute(withHandler('POST', handler), {
  cookieName: 'session',
  password: 'zujYsTCL727AApTDvBYwLAEJEN6GB5Bg',
});
