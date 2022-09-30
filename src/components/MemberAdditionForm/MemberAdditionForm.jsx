import { useState } from 'react';
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
import { ThemeProvider } from '@mui/material/styles';
import { defaultFont } from '../../themes/defaultFont';
import useMutation from '@libs/client/useMutation';
import MemberAdditionModal from './MemberAdditionModal';

const MemberAdditionForm = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const [modalType, setModalType] = useState('');

  const {
    register,
    // watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 사용자가 양식에 입력한 값을 콘솔에 출력
  // console.log('[WATCH]', watch());

  // errors 발생 시 (errors 객체가 비어있지 않으면), errors 출력
  if (Object.keys(errors).length != 0) {
    console.log('[ERROR]', errors);
  }

  const [addMember, { loading, data, error }] = useMutation(
    '../api/admin/addMember'
  );

  const onValid = (newMemberData) => {
    console.log('신규 회원 정보: ', newMemberData);
    addMember(newMemberData);
    if (data?.error.code == 'P2002') {
      () => setModalType('Already Exists');
    } else {
      () => setModalType('Default');
    }
    setModalOpened(() => true);
  };

  const onInvalid = () => {
    console.log('양식 제출에 실패했습니다.');
  };

  return (
    <ThemeProvider theme={defaultFont}>
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
          {/* 이름 */}
          <TextField
            label='이름'
            type='text'
            fullWidth
            variant='standard'
            error={errors.name != null}
            // helperText={errors.name?.message}
            required
            {...register('name', {
              required: '이름을 입력하세요.',
            })}
            sx={{
              mb: 2,
            }}
          />

          {/* 성별 */}
          <FormControl
            error={errors.gender != null}
            sx={{
              display: 'block',
            }}
          >
            <RadioGroup row sx={{ minHeight: 56 }}>
              <FormControlLabel
                {...register('gender', {
                  required: '성별을 선택하세요.',
                })}
                value='남성'
                control={<Radio />}
                label='남성'
              />
              <FormControlLabel
                {...register('gender', {
                  required: '성별을 선택하세요.',
                })}
                value='여성'
                control={<Radio />}
                label='여성'
              />
            </RadioGroup>
            <FormHelperText>
              {/* 성별 에러 발생 시, 성별 에러 메시지 표시 */}
              {/* {errors.gender != null ? errors.gender?.message : null} */}
            </FormHelperText>
          </FormControl>

          {/* 소속 부서 */}
          <FormControl
            fullWidth
            sx={{
              my: 2,
            }}
          >
            <InputLabel>소속 부서</InputLabel>

            <Select
              label='소속 부서'
              variant='outlined'
              defaultValue=''
              {...register('department')}
              sx={{ minWidth: 200 }}
            >
              <MenuItem value=''>
                <em>없음</em>
              </MenuItem>
              <MenuItem value='대학부'>대학부</MenuItem>
              <MenuItem value='청년부'>청년부</MenuItem>
            </Select>

            {/* <FormHelperText>With label + helper text</FormHelperText> */}
          </FormControl>

          {/* 주소 */}
          <TextField
            label='주소'
            type='text'
            fullWidth
            variant='standard'
            {...register('address')}
            sx={{
              mb: 2,
            }}
          />

          {/* 학교 */}
          <TextField
            label='학교'
            type='text'
            fullWidth
            variant='standard'
            {...register('school')}
            sx={{
              mb: 2,
            }}
          />

          {/* 전공 */}
          <TextField
            label='전공'
            type='text'
            fullWidth
            variant='standard'
            {...register('major')}
            sx={{
              mb: 2,
            }}
          />

          {/* 휴대폰 번호 */}
          <TextField
            label='휴대폰 번호'
            type='text'
            fullWidth
            variant='standard'
            {...register('phoneNumber')}
            sx={{
              mb: 2,
            }}
          />

          {/* 이메일 */}
          <TextField
            label='이메일'
            type='text'
            fullWidth
            variant='standard'
            {...register('email')}
            sx={{
              mb: 2,
            }}
          />

          {/* 제출 버튼 */}
          <Button
            type='submit'
            variant='contained'
            sx={{
              position: 'absolute',
              right: '24px',
              bottom: '24px',
            }}
          >
            제출
          </Button>
        </form>
      </Container>

      {/* 제출 시 표시되는 팝업 모달창 */}
      <MemberAdditionModal
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        modalType={modalType}
      />
    </ThemeProvider>
  );
};

export default MemberAdditionForm;
