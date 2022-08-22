import { useForm } from 'react-hook-form';
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormHelperText,
  Select,
  MenuItem,
  InputLabel,
  Container,
} from '@mui/material';

const MemberAdditionForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 사용자가 양식에 입력한 값을 콘솔에 출력
  console.log('[WATCH]', watch());

  // errors 발생 시 (errors 객체가 비어있지 않으면), errors 출력
  if (Object.keys(errors).length != 0) {
    console.log('[ERROR]', errors);
  }

  const onValid = (data) => {
    console.log('양식을 성공적으로 제출했습니다.');
  };

  const onInvalid = () => {
    console.log('양식 제출에 실패했습니다.');
  };

  return (
    <Container
      maxWidth='sm'
      sx={{
        border: '1px solid rgba(0, 0, 0, 0.12)',
        borderRadius: '4px',
        mt: 4,
        p: 8,
        position: 'relative',
      }}
    >
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        {/* 회원 이름 */}
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

        {/* 회원 성별 */}
        <FormControl error={errors.sex != null}>
          <RadioGroup row sx={{ minHeight: 56 }}>
            <FormControlLabel
              {...register('sex', {
                required: '성별을 선택하세요.',
              })}
              value='남성'
              control={<Radio />}
              label='남성'
            />

            <FormControlLabel
              {...register('sex', {
                required: '성별을 선택하세요.',
              })}
              value='여성'
              control={<Radio />}
              label='여성'
            />
          </RadioGroup>

          <FormHelperText>
            {/* 성별 에러 발생 시, 성별 에러 메시지 표시 */}
            {/* {errors.sex != null ? errors.sex?.message : null} */}
          </FormHelperText>
        </FormControl>

        <br />
        <br />
        <br />

        {/* 회원 부서 */}
        <FormControl>
          <InputLabel>소속 부서</InputLabel>

          <Select
            label='소속 부서'
            defaultValue=''
            {...register('department')}
            sx={{ minWidth: 160 }}
          >
            <MenuItem value=''>
              <em>없음</em>
            </MenuItem>
            <MenuItem value='대학부'>대학부</MenuItem>
            <MenuItem value='청년부'>청년부</MenuItem>
          </Select>

          {/* <FormHelperText>With label + helper text</FormHelperText> */}
        </FormControl>

        {/* 추가 정보 */}
        <TextField label='주소' type='text' {...register('address')} />

        <br />
        <br />
        <br />

        <TextField label='학교' type='text' {...register('school')} />
        <TextField label='전공' type='text' {...register('major')} />

        <br />
        <br />
        <br />

        <TextField label='휴대전화' type='text' {...register('phoneNumber')} />
        <TextField label='이메일' type='text' {...register('email')} />

        <br />

        <Button
          type='submit'
          variant='contained'
          sx={{
            position: 'absolute',
            right: '24px',
          }}
        >
          제출
        </Button>
      </form>
    </Container>
  );
};

export default MemberAdditionForm;
