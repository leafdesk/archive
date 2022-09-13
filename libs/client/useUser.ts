import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useUser = () => {
  const [user, setUser] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch('/api/users/me')
      .then((response) => response.json())
      .then((data) => {
        // 로그인 하지 않았다면 로그인 페이지로 Redirect
        if (!data.ok) return router.push('/Login');

        // 로그인 상태라면
        setUser(data.profile);
      });
  }, [router]);

  return user;
};

export default useUser;
