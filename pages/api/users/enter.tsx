import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../libs/client/client';
import withHandler from '../../../libs/server/withHandler';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { phoneNumber, email } = req.body;
  console.log('클라이언트에서 다음을 요청함: ', req.body);

  const payload = email ? { email } : { phoneNumber: +phoneNumber };
  // const member = await client.member.upsert({
  //   where: {
  //     ...payload,
  //   },
  //   create: {
  //     name: 'Anonymous',
  //     sex: 'unknown',
  //     department: 'unclassified',
  //     ...payload,
  //   },
  //   update: {},
  // });

  // console.log(member);

  const token = await client.token.create({
    data: {
      payload: '1234',
      member: {
        connectOrCreate: {
          where: {
            ...payload,
          },
          create: {
            name: 'Anonymous',
            sex: 'unknown',
            department: 'unclassified',
            ...payload,
          },
        },
      },
    },
  });

  console.log(token);

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

  return res.status(200).end();
};

export default withHandler('POST', handler);
