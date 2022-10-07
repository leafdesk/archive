import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const Page = () => {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          router.push('/admin/member-addition');
        }}
      >
        새로운 멤버 추가
      </Button>
    </>
  );
};

export default Page;
