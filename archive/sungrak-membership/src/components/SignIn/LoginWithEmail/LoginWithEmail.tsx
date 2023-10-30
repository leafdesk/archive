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

interface EnterForm {
  email?: string;
  phone?: string;
}

interface EnterMutationResult {
  ok: boolean;
}

export default function LoginWithEmail() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [enter, { loading, data, error }] =
    useMutation<EnterMutationResult>('/api/users/enter');

  const onValid = (validForm: EnterForm) => {
    if (loading) return;
    enter(validForm);
  };

  const onInvalid = () => {
    console.log(errors);
  };

  console.log('email: ', data);

  return (
    <Box
      component='form'
      onSubmit={handleSubmit(onValid, onInvalid)}
      noValidate
      sx={{ mt: 1 }}
    >
      <TextField
        margin='normal'
        required
        fullWidth
        id='email'
        label='Email Address'
        name='email'
        autoComplete='email'
        autoFocus
        error={errors.email != null}
        {...register('email', {
          required: '이메일을 입력하세요.',
        })}
      />
      <TextField
        margin='normal'
        required
        fullWidth
        name='password'
        label='Password'
        type='password'
        id='password'
        autoComplete='current-password'
        error={errors.password != null}
        {...register('password', {
          required: '비밀번호를 입력하세요.',
        })}
      />
      <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label='Remember me'
      />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Grid container>
        <Grid item xs>
          <Link href='archive/sungrak-membership/src/components/SignIn/LoginWithEmail#' variant='body2'>
            Forgot password?
          </Link>
        </Grid>
        <Grid item>
          <Link href='archive/sungrak-membership/src/components/SignIn/LoginWithEmail#' variant='body2'>
            {"Don't have an account? Sign Up"}
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
}
