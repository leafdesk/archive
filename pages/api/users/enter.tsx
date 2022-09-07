import twilio from 'twilio';
import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/client/client';
import withHandler, { ResponseType } from '../../../libs/server/withHandler';

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

  const payload = Math.floor(100000 + Math.random() * 900000) + '';
  // const member = await client.member.upsert({
  //   where: {
  //     ...member,
  //   },
  //   create: {
  //     name: 'Anonymous',
  //     sex: 'unknown',
  //     department: 'unclassified',
  //     ...member,
  //   },
  //   update: {},
  // });

  // console.log(member);

  const token = await client.token.create({
    data: {
      payload,
      member: {
        connectOrCreate: {
          where: {
            ...member,
          },
          create: {
            name: '(알 수 없음)',
            sex: '(알 수 없음)',
            department: '(알 수 없음)',
            ...member,
          },
        },
      },
    },
  });

  console.log(token);

  if (phoneNumber) {
    const message = await twilioClient.messages.create({
      messagingServiceSid: process.env.TWILIO_MSID,
      to: process.env.MY_PHONE!,
      body: `[인증번호: ${payload}] 사용자 본인 인증번호를 입력해주세요. (성락회원관리시스템)`,
    });
    console.log(message);
  }

  // if (email) {
  //   member = await client.member.findUnique({
  //     where: {
  //       email,
  //     },
  //   });

  //   if (member) {
  //     console.log('존재하는 멤버입니다.');
  //   }

  //   if (!member) {
  //     console.log('멤버 정보가 없습니다. 신규 멤버를 생성합니다.');

  //     member = await client.member.create({
  //       data: {
  //         name: 'Anonymous',
  //         sex: 'unknown',
  //         department: 'unclassified',
  //         email: email,
  //       },
  //     });
  //   }

  //   console.log(member);
  // }

  // if (phoneNumber) {
  //   member = await client.member.findUnique({
  //     where: {
  //       phoneNumber: +phoneNumber,
  //     },
  //   });

  //   if (member) {
  //     console.log('존재하는 멤버');
  //   }

  //   if (!member) {
  //     console.log('멤버 정보 없음, 신규 생성');

  //     member = await client.member.create({
  //       data: {
  //         name: 'Anonymous',
  //         sex: 'unknown',
  //         department: 'unclassified',
  //         phoneNumber: +phoneNumber,
  //       },
  //     });
  //   }

  //   console.log(member);
  // }

  return res.json({
    ok: true,
  });
};

export default withHandler('POST', handler);
