import client from '@libs/client/client';

const main = async () => {
  const member = await client.member.create({
    data: {
      name: '이상건',
    },
  });
};

main()
  .then(async () => {
    await client.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await client.$disconnect();
    process.exit(1);
  });
