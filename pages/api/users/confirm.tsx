import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/client/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';

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
  console.log('사용자가 입력한 토큰: ', token);

  const exists = await client.token.findUnique({
    where: {
      payload: token,
    },
    // include: { member: true },
  });

  // 존재하지 않으면 404.
  if (!exists) return res.status(404).end();
  console.log('토큰이 존재하며, 해당 멤버 ID는 ', exists.memberId, '입니다.');

  req.session.member = {
    id: exists.memberId,
  };

  await req.session.save();
  res.status(200).end();
};

export default withApiSession(withHandler('POST', handler));
