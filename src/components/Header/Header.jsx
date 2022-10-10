import { AppBar, Avatar, Button, Container } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import { useRouter } from 'next/router';

import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cn = classNames.bind(styles);

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
      <Container>
        <Button onClick={() => router.push('/')}>홈</Button>
        <Button onClick={() => router.push('/admin')}>관리자</Button>
      </Container>
    </AppBar>
  );
};

export default Header;
