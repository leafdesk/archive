import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/client/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  /**
   * 클라이언트로부터 token을 받고, 존재하는지 확인.
   */
  const { token } = req.body;
  console.log('사용자가 입력한 인증번호는 ', +token, '입니다.');

  const foundToken = await client.token.findUnique({
    where: {
      payload: token,
    },
    // include: { member: true },
  });

  // 존재하지 않으면 404.
  if (!foundToken) return res.status(404).end();

  console.log('[인증성공] 접속한 멤버의 ID는', foundToken.memberId, '입니다.');

  req.session.member = {
    id: foundToken.memberId,
  };

  await req.session.save();

  // 사용한 token 삭제.
  await client.token.deleteMany({
    where: {
      memberId: foundToken.memberId,
    },
  });

  // res 정보는 LoginWithPhone의 tokenData 변수에 들어감.
  res.json({ ok: true });
};

export default withApiSession(withHandler('POST', handler));
