import { useRouter } from 'next/router';
import { Button, Typography } from '@mui/material';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Typography>HOME</Typography>

      <Button
        onClick={() => {
          router.push('/Admin');
        }}
      >
        관리자
      </Button>
    </>
  );
};

export default Home;
