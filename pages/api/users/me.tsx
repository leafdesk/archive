import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/client/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { withApiSession } from '@libs/server/withSession';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  console.log('req.session.member 는 ', req.session.member, '입니다.');
  const profile = await client.member.findUnique({
    where: {
      id: req.session.member?.id,
    },
  });

  // me.tsx는 개발자 확인용.
  res.json({
    ok: true,
    profile,
  });
};

export default withApiSession(withHandler('GET', handler));
