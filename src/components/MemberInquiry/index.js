import useMutation from '@libs/client/useMutation';
import { useForm } from 'react-hook-form';
import { Button, Container, TextField } from '@mui/material';

const MemberInquiry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [showMember, { loading, data, error }] = useMutation(
    '../api/admin/showMember'
  );

  const onValid = (searchData) => {
    showMember(searchData);
  };

  const onInvalid = () => {};

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <TextField
            label='이름'
            type='text'
            error={errors.name != null}
            // helperText={errors.name?.message}
            required
            {...register('name', {
              required: '이름을 입력하세요.',
            })}
          />

          <Button type='submit'>조회(검색)</Button>
        </form>
      </Container>
    </>
  );
};

export default MemberInquiry;
