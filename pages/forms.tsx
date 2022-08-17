import { FieldErrors, useForm } from 'react-hook-form';

interface LoginForm {
  username: string;
  email: string;
  password: string;
}

const Forms = () => {
  const { register, watch, handleSubmit } = useForm<LoginForm>();
  // console.log(watch());

  const onValid = (data: LoginForm) => {
    console.log('success');
  };

  const onInvalid = (errors: FieldErrors) => {
    console.log('[ERROR]', errors);
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <input
        {...register('username', {
          required: 'Username is required',
          minLength: {
            message: 'The username should be longer than 5 chars.',
            value: 5,
          },
        })}
        type='text'
        placeholder='username'
      />

      <input
        {...register('email', {
          required: 'Email is required',
          validate: {
            notGmail: (value) =>
              !value.includes('@gmail.com') || 'Gmail is not allowed',
          },
        })}
        type='email'
        placeholder='Email'
      />

      <input
        {...register('password', {
          required: 'Password is required',
        })}
        type='password'
        placeholder='Password'
      />

      <input type='submit' value='Create Account' />
    </form>
  );
};

export default Forms;
