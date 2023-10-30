import useMutation from '@libs/client/useMutation';
import { useForm } from 'react-hook-form';
import { Button, Container, TextField, Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import useSWR from 'swr';

const MemberInquiry = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data } = useSWR('/api/admin/members');
  console.log(data);

  const columns = [
    /**
     * id, createdAt, updatedAt, name, gender, department, address,
     * school, major, phoneNumber, email, tokens, authority
     */
    { field: 'id', headerName: 'ID' },
    { field: 'createdAt', headerName: 'createdAt' },
    { field: 'updatedAt', headerName: 'updatedAt' },
    { field: 'name', headerName: 'name' },
    { field: 'gender', headerName: 'gender' },
    { field: 'department', headerName: 'department' },
    { field: 'address', headerName: 'address' },
    { field: 'school', headerName: 'school' },
    { field: 'major', headerName: 'major' },
    { field: 'phoneNumber', headerName: 'phoneNumber' },
    { field: 'email', headerName: 'email' },
    { field: 'tokens', headerName: 'tokens' },
    { field: 'authority', headerName: 'authority' },
  ];

  /**
   * await 안해서 undefined 일때.. Array.length 를 찾을 수 없다고 나옴
   */
  const rows = data?.members;
  // console.log('rows:', rows);
  // console.log(rows?.length);

  const onValid = (searchData) => {};

  const onInvalid = () => {};

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onValid, onInvalid)}>
          <TextField label='이름' type='text' />

          <Button type='submit'>조회(검색)</Button>
        </form>

        <Box>
          <div style={{ display: 'flex', height: '100%' }}>
            <div style={{ flexGrow: 1 }}>
              <DataGrid columns={columns} rows={rows} />
            </div>
          </div>
        </Box>
      </Container>
    </>
  );
};

export default MemberInquiry;
