import * as React from 'react';
import {
  Avatar,
  CssBaseline,
  Link,
  Box,
  Typography,
  Container,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import LoginWithPhone from './LoginWithPhone/LoginWithPhone';
import LoginWithEmail from './LoginWithEmail/LoginWithEmail';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [loginMethod, setLoginMethod] = useState(true);

  const onAvatarClick = () => {
    setLoginMethod(() => !loginMethod);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />

        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{
              m: 1,
              bgcolor: loginMethod ? 'secondary.main' : 'primary.main',
            }}
            onClick={onAvatarClick}
          >
            <LockOutlinedIcon />
          </Avatar>
          <Typography
            component='h1'
            variant='h5'
            sx={{
              fontWeight: 600,
            }}
          >
            {loginMethod ? '전화번호로 로그인' : '이메일로 로그인'}
          </Typography>

          {/* 로그인 방법 ? 전화번호로 로그인 : 이메일로 로그인 */}
          {loginMethod ? <LoginWithPhone /> : <LoginWithEmail />}
        </Box>

        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
