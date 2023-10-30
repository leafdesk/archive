import { useRouter } from 'next/router';
import { Typography, Alert, Button } from '@mui/material';

const Home = () => {
  const router = useRouter();

  return (
    <>
      <Alert severity='error'>
        <Typography
          sx={{
            fontWeight: 600,
          }}
        >
          디자인은 나중에 하고, 필요한 기능 먼저 추가하세요.
        </Typography>
      </Alert>

      <Button onClick={() => router.push('/admin')}>관리자</Button>
    </>
  );
};

export default Home;
