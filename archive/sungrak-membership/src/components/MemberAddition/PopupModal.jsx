import { Modal, Box, Typography, Button } from '@mui/material';

const PopupModal = ({ modalOpened, setModalClosed, data }) => {
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
        <Typography variant='h6' component='h2'>
          {data?.error?.code == 'P2002'
            ? '존재하는 전화번호(이메일)입니다.'
            : '양식이 성공적으로 제출되었습니다.'}
        </Typography>

        <Button
          onClick={() => {
            setModalClosed(false);
          }}
        >
          닫기
        </Button>
      </Box>
    </Modal>
  );
};

export default PopupModal;
