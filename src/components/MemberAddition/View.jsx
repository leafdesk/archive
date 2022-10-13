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
  ThemeProvider,
} from '@mui/material';

import { defaultFont } from '../../themes/defaultFont';
import PopupModal from './PopupModal';

const View = ({
  register,
  handleSubmit,
  onValid,
  onInvalid,
  setModalClosed,
  modalOpened,
  errors,
  data,
  loading,
}) => {
  return (
    <ThemeProvider theme={defaultFont}>
      <Container>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          {/* 이름 */}
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

          {/* 성별 */}
          <FormControl error={errors.gender != null}>
            <RadioGroup row>
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
          <FormControl>
            <InputLabel>소속 부서</InputLabel>

            <Select
              label='소속 부서'
              defaultValue=''
              {...register('department')}
            >
              <MenuItem value=''>
                <em>없음</em>
              </MenuItem>
              <MenuItem value='대학부'>대학부</MenuItem>
              <MenuItem value='청년부'>청년부</MenuItem>
            </Select>

            {/* <FormHelperText>With label + helper text</FormHelperText> */}
          </FormControl>

          <TextField label='주소' type='text' {...register('address')} />
          <TextField label='학교' type='text' {...register('school')} />
          <TextField label='전공' type='text' {...register('major')} />

          <TextField
            label='휴대폰 번호'
            type='text'
            {...register('phoneNumber')}
          />

          <TextField label='이메일' type='text' {...register('email')} />

          <Button type='submit'>제출</Button>
        </form>
      </Container>

      {/**
       * 양식 제출 => 서버 응답 => loading: false
       * => 응답에 따라 모달이 열리도록 처리
       * (만약 !loading이 없으면 모달이 먼저 열리고 내부 텍스트가 바뀌는 현상이 발생)
       */}
      {!loading && modalOpened ? (
        <PopupModal
          modalOpened={modalOpened}
          setModalClosed={setModalClosed}
          data={data}
        />
      ) : null}
    </ThemeProvider>
  );
};

export default View;
