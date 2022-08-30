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
import useMutation from '../../../../libs/client/useMutation';

const LoginWithPhone = ({ data }) => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [enter] = useMutation('/api/users/enter');

  const onValid = (validForm) => {
    enter(validForm);
  };
  console.log('[[DATA.OK]] ', data?.ok);

  const onInvalid = () => {
    console.log(errors);
  };

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
          name='Verification Number'
          label='Verification Number'
          type='number'
          id='Verification Number'
        />
      ) : null}

      <FormControlLabel
        control={<Checkbox value='remember' color='primary' />}
        label='Remember me'
      />
      <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
        Verification
      </Button>
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
