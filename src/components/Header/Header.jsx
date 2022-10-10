import { AppBar, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

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
      className={cn('AppBar')}
      sx={{
        color: 'black',
        background: 'white',
        boxShadow: 'none',
        borderBottom: '1px solid lightgray',
      }}
    >
      <Container sx={{ display: 'flex' }}>
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
