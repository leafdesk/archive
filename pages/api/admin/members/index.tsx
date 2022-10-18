import client from '@libs/client/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  /**
   * If request method is GET...
   */
  if (req.method === 'GET') {
    const members = await client.member.findMany({});
    res.json({
      ok: true,
      members,
    });
  }

  /**
   * If request method is POST...
   */
  if (req.method === 'POST') {
    // 신규 회원 생성
    const newMember = await client.member.create({
      data: {
        ...req.body,
      },
    });

    console.log('신규 회원 생성 완료');
    console.log(newMember);

    return res.json({ ok: true });
  }
};

export default withHandler({
  methods: ['GET', 'POST'],
  handler: handler,
});
