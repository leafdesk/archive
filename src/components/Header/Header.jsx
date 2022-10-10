import { AppBar, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const ADMIN_MENU = [
  {
    title: '회원 등록',
    url: '/admin/member-addition',
  },
  {
    title: '회원 조회',
    url: '/admin',
  },
];

const Header = () => {
  const router = useRouter();

  return (
    <AppBar
      position='static'
      sx={{
        color: 'black',
        background: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid lightgray',
      }}
    >
      <Container sx={{ display: 'flex', alignItems: 'center' }}>
        <Button onClick={() => router.push('/')}>홈</Button>

        {router.pathname.indexOf('/admin') > -1 && (
          <>
            <Typography>/</Typography>
            <Button
              onClick={() => {
                router.push('/admin');
              }}
            >
              관리자
            </Button>
          </>
        )}
      </Container>

      <Container>
        {/**
         * /admin, ADMIN_MENU 부분도 일반화 시킬 수 있음 !!!!
         * 시간 날 때 수정하기 !!!!
         */}
        {router.pathname.indexOf('/admin') > -1 &&
          ADMIN_MENU.map((item) => (
            <Button
              key={item.title}
              onClick={() => {
                router.push(item.url);
              }}
            >
              {item.title}
            </Button>
          ))}
      </Container>
    </AppBar>
  );
};

export default Header;
