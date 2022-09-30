import { Modal, Box, Typography, Button } from '@mui/material';

const MemberAdditionModal = ({ modalOpened, setModalOpened, modalType }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={modalOpened}
      // onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box sx={style}>
        {modalType == 'Default' && (
          <>
            <Typography variant='h6' component='h2'>
              양식이 성공적으로 제출되었습니다.
            </Typography>
            {/* <Typography sx={{ mt: 2 }}>닫기 버튼을 누르면 닫힘.</Typography> */}
          </>
        )}

        {modalType == 'Already Exists' && (
          <Typography variant='h6' component='h2'>
            이미 존재하는 전화번호(이메일)입니다.
          </Typography>
        )}

        <Button onClick={setModalOpened(() => false)}>닫기</Button>
      </Box>
    </Modal>
  );
};

export default MemberAdditionModal;
