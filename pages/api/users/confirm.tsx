import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/client/client';
import withHandler, { ResponseType } from '../../../libs/server/withHandler';
import { withIronSessionApiRoute } from 'iron-session/next';

// req.session에 member가 있다는 것을 알려주기 위함.
declare module 'iron-session' {
  interface IronSessionData {
    member?: {
      id: number;
    };
  }
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  /**
   * 클라이언트로부터 token을 받고, 존재하는지 확인
   */
  const { token } = req.body;
  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    // include: { member: true },
  });

  // 존재하지 않으면 404.
  if (!exists) return res.status(404).end();

  req.session.member = {
    id: exists.memberId,
  };

  await req.session.save();
  res.status(200).end();
};

export default withIronSessionApiRoute(withHandler('POST', handler), {
  cookieName: 'session',
  password: 'zujYsTCL727AApTDvBYwLAEJEN6GB5Bg', // 암호화에 사용.
});
