import {
  Box,
  TextField,
  FormControlLabel,
  Button,
  Grid,
  Checkbox,
  Link,
} from '@mui/material';

import { useForm } from 'react-hook-form';
import useMutation from '@libs/client/useMutation';
import { useEffect } from 'react';
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
}

const LoginWithPhone = () => {
  const {
    register,
    watch,
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
    enter(validForm);
  };

  const onInvalid = () => {
    console.log(errors);
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
      sx={{ mt: 1 }}
    >
      <TextField
        margin='normal'
        required
        fullWidth
        id='Phone Number'
        label='Phone Number'
        name='Phone Number'
        autoFocus
        error={errors.phoneNumber != null}
        {...register('phoneNumber', {
          required: '전화번호를 입력하세요.',
        })}
      />

      {data?.ok ? (
        <TextField
          margin='normal'
          required
          fullWidth
          name='Validation Number'
          label='Validation Number'
          type='number'
          id='Validation Number'
          error={errors.verificationNumber != null}
          {...tokenRegister('token', {
            required: '인증번호를 입력하세요.',
          })}
        />
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
          {tokenLoading ? 'Loading...' : 'Verification'}
        </Button>
      ) : (
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          {loading ? 'Loading...' : 'Send Message'}
        </Button>
      )}

      <Grid container>
        <Grid item xs>
          <Link href='#' variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href='#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginWithPhone;
