import client from '@libs/client/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  // 신규 회원 생성
  const newMember = await client.member.create({
    data: {
      ...req.body,
    },
  });

  console.log('신규 회원 생성 완료');
  console.log(newMember);

  return res.json({ ok: true });
};

export default withHandler({
  method: 'POST',
  handler: handler,
});
