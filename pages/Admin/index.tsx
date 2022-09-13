import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const AdminIndexPage = () => {
  const router = useRouter();

  return (
    <>
      <Button
        onClick={() => {
          router.push('/Admin/MemberAdditionForm');
        }}
      >
        새로운 멤버 추가
      </Button>
    </>
  );
};

export default AdminIndexPage;
