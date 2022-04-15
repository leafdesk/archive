import React from 'react';

// velopert (public.velopert@gmail.com) 등. 한 명의 유저 컴포넌트
// UserList Component 에서 user 속성을 붙인 <User /> 컴포넌트를 만든다.
const User = ({ user }) => {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
};

const UserList = ({ users }) => {
  return (
    <div>
      {/**
       * users 배열에 있는 각각의 user 항목을 가져옴
       * 각각 <User /> 컴포넌트로 만듦, 키값은 id를 사용
       */}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
