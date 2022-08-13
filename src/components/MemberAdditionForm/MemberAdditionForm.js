import {
  TextField,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Button,
} from '@mui/material';

import { useState } from 'react';
// import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
// import AdapterDateFns from '@mui/lab/AdapterDateFns';

const MemberAdditionForm = () => {
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  // const [birthdate, setBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [team, setTeam] = useState('');

  const handleNameChange = (event) => {
    setName(() => event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(() => event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(() => event.target.value);
  };

  const handleSchoolChange = (event) => {
    setSchool(() => event.target.value);
  };

  const handleMajorChange = (event) => {
    setMajor(() => event.target.value);
  };

  const handleTeamChange = (event) => {
    setTeam(() => event.target.value);
  };

  const handleSubmit = () => {
    setName(() => '');
    setSex(() => '');
    setAddress(() => '');
    setSchool(() => '');
    setMajor(() => '');
    setTeam(() => '');

    const member = {
      name: name,
      sex: sex,
      address: address,
      school: school,
      major: major,
      team: team,
    };

    console.log(member);
  };

  return (
    <>
      <FormControl>
        {/* 회원 이름 */}
        <TextField
          label='이름'
          variant='outlined'
          margin='dense'
          value={name}
          onChange={handleNameChange}
          required
        />

        {/* 회원 성별 */}
        <FormLabel id='demo-controlled-radio-buttons-group'>성별</FormLabel>
        <RadioGroup
          aria-labelledby='demo-controlled-radio-buttons-group'
          name='controlled-radio-buttons-group'
          value={sex}
          onChange={handleSexChange}
          row
        >
          <FormControlLabel value='남성' control={<Radio />} label='남성' />
          <FormControlLabel value='여성' control={<Radio />} label='여성' />
        </RadioGroup>

        {/* 회원 생년월일 */}
        {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label='생년월일'
            value={birthdate}
            onChange={(newValue) => {
              setBirthdate(() => newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider> */}

        <br />

        <TextField
          label='주소지'
          variant='outlined'
          margin='dense'
          value={address}
          onChange={handleAddressChange}
        />
        <br />

        <TextField
          label='학교'
          variant='outlined'
          margin='dense'
          value={school}
          onChange={handleSchoolChange}
        />
        <br />

        <TextField
          label='전공'
          variant='outlined'
          margin='dense'
          value={major}
          onChange={handleMajorChange}
        />
        <br />

        <TextField
          label='팀'
          variant='outlined'
          margin='dense'
          value={team}
          onChange={handleTeamChange}
        />

        <Button variant='contained' onClick={handleSubmit} size='large'>
          양식 제출
        </Button>
      </FormControl>
    </>
  );
};

export default MemberAdditionForm;
