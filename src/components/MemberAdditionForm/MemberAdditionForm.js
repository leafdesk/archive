import { Controller, useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

const MemberAdditionForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // input value 확인
  console.log('[WATCH]', watch());

  // errors 객체가 비어있지 않으면, errors 출력
  if (Object.keys(errors).length != 0) {
    console.log('[ERROR]', errors);
  }

  const onValid = () => {
    console.log('양식을 성공적으로 제출했습니다.');
  };

  const onInvalid = () => {
    console.log('양식 제출에 실패했습니다.');
  };

  return (
    <form onSubmit={handleSubmit(onValid, onInvalid)}>
      <br />

      {/* 회원 이름 */}
      <TextField
        label='이름'
        type='text'
        error={errors.name != null}
        helperText={errors.name?.message}
        {...register('name', {
          required: '이름을 입력하세요.',
        })}
      />

      {/* 회원 성별 */}
      <Controller />

      {/* department, address, school, major, phoneNumber, email */}

      <Button type='submit'>제출</Button>
    </form>
  );
};

export default MemberAdditionForm;
