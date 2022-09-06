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
  console.log(req.session.member);
  const profile = await client.member.findUnique({
    where: {
      id: req.session.member?.id,
    },
  });
  res.json({
    ok: true,
    profile,
  });
};

export default withIronSessionApiRoute(withHandler('GET', handler), {
  cookieName: 'session',
  password: 'zujYsTCL727AApTDvBYwLAEJEN6GB5Bg', // 암호화에 사용.
});
