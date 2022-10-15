import { useState } from 'react';
import { useForm } from 'react-hook-form';

import useMutation from '@libs/client/useMutation';
import View from './View';

const MemberAddition = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const setModalClosed = () => setModalOpened(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  if (Object.keys(errors).length != 0) console.log('[에러]', errors);
  const [addMember, { loading, data, error }] = useMutation(
    '../api/admin/addMember'
  );

  const onValid = (newMemberData) => {
    addMember(newMemberData);
    setModalOpened(() => true);
  };

  const onInvalid = () => {
    console.log('유효하지 않은 양식입니다.');
  };

  return (
    <View
      register={register}
      handleSubmit={handleSubmit}
      reset={reset}
      onValid={onValid}
      onInvalid={onInvalid}
      setModalClosed={setModalClosed}
      modalOpened={modalOpened}
      errors={errors}
      data={data}
      loading={loading}
    />
  );
};

export default MemberAddition;
