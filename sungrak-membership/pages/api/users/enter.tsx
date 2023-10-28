import twilio from 'twilio';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '@libs/client/client';
import withHandler, { ResponseType } from '@libs/server/withHandler';

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
) => {
  const { phoneNumber, email } = req.body;
  console.log('클라이언트에서 다음을 요청함: ', req.body);

  const member = phoneNumber
    ? { phoneNumber: phoneNumber }
    : email
    ? { email }
    : null;
  if (!member) return res.status(400).json({ ok: false });

  const permission = await client.member.findMany({
    where: {
      phoneNumber: phoneNumber,
      authority: 'ADMIN',
    },
  });
  if (permission.length == 0) {
    return res.status(400).json({ ok: false, authority: false });
  }

  const payload = Math.floor(100000 + Math.random() * 900000) + '';

  const token = await client.token.create({
    data: {
      payload,
      member: {
        connect: {
          ...member,
        },
      },
    },
  });

  console.log(token);

  if (phoneNumber) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: '+82' + +phoneNumber,
      body: `[인증번호: ${payload}] 사용자 본인 인증번호를 입력해주세요. (성락회원관리시스템)`,
    });
    console.log(message);
  }

  return res.json({
    ok: true,
    authority: true,
  });
};

export default withHandler({
  methods: ['POST'],
  handler: handler,
  isPrivate: false,
});
