import { AppBar, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

const Header = () => {
  const router = useRouter();

  const menuOfAdmin = [
    {
      title: '회원 등록',
      url: '/admin/member-addition',
    },
    {
      title: '회원 조회',
      url: '/admin',
    },
  ];

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

        {router.pathname == '/admin' && (
          <>
            <Typography>/ </Typography>
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
        {/* <Button>메뉴 1</Button>
        <Button>메뉴 2</Button> */}

        {router.pathname == '/admin' &&
          menuOfAdmin.map((item) => (
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
