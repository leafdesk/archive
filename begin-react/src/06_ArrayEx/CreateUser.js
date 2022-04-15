import React from 'react';

// input 2개와 button 1개로 구성된 (유저 만드는) 컴포넌트
const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        name='username'
        placeholder='계정명'
        onChange={onChange}
        value={username}
      />
      <input
        name='email'
        placeholder='이메일'
        onChange={onChange}
        value={email}
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
};

export default CreateUser;
