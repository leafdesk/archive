import {
  Box,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Checkbox,
  Link,
  Alert,
} from '@mui/material';

import { red } from '@mui/material/colors';

import { useForm } from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

interface EnterForm {
  email?: string;
  phone?: string;
}

interface TokenForm {
  token: string;
}

interface MutationResult {
  ok: boolean;
  authority: boolean;
}

const LoginWithPhone = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [enter, { loading, data, error }] =
    useMutation<MutationResult>('/api/users/enter');

  const [confirmToken, { loading: tokenLoading, data: tokenData }] =
    useMutation<MutationResult>('/api/users/confirm');

  const { register: tokenRegister, handleSubmit: tokenHandleSubmit } =
    useForm<TokenForm>();

  const onValid = (validForm: EnterForm) => {
    console.log('submit:', validForm);
    enter(validForm);
  };

  const onInvalid = () => {
    console.log('onInvalid:', errors);
  };

  const onTokenValid = (validForm: TokenForm) => {
    if (tokenLoading) return;
    confirmToken(validForm);
  };

  const router = useRouter();
  useEffect(() => {
    if (tokenData?.ok) {
      router.push('/');
    }
  }, [tokenData, router]);

  return (
    <Box
      component='form'
      onSubmit={
        data?.ok
          ? tokenHandleSubmit(onTokenValid)
          : handleSubmit(onValid, onInvalid)
      }
      noValidate
      sx={{ mt: 1, minWidth: '396px' }}
    >
      <TextField
        margin='normal'
        required
        fullWidth
        id='Phone Number'
        label='휴대폰 번호'
        name='Phone Number'
        autoFocus
        error={errors.phoneNumber != null}
        {...register('phoneNumber', {
          required: '전화번호를 입력하세요.',
        })}
        disabled={data?.ok ? true : false}
      />
      {data?.ok ? (
        <TextField
          margin='normal'
          required
          fullWidth
          name='Validation Number'
          label='인증 번호'
          type='number'
          id='Validation Number'
          error={errors.verificationNumber != null}
          {...tokenRegister('token', {
            required: '인증번호를 입력하세요.',
          })}
        />
      ) : null}

      {/* 접근 권한이 undefined 또는 true이면 경고 메시지 출력하지 않음. */}
      {data?.authority === false ? (
        <Alert
          severity='error'
          sx={{
            fontWeight: 700,
            color: red[600],
          }}
        >
          없는 번호이거나, 접근 권한이 없습니다.
        </Alert>
      ) : null}

      <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label='Remember me'
      />

      {data?.ok ? (
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          {tokenLoading ? '로딩 중...' : '인증하기'}
        </Button>
      ) : (
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? '로딩 중...' : '메시지로 인증번호 받기'}
        </Button>
      )}

      <Grid container>
        <Grid item xs>
          <Link href='archive/sungrak-membership/src/components/SignIn/LoginWithPhone#' variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href='archive/sungrak-membership/src/components/SignIn/LoginWithPhone#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginWithPhone;
