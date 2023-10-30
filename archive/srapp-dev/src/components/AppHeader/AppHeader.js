import { useRouter } from 'next/router';
import { useState } from 'react';

const AppHeader = () => {
  const router = useRouter();
  const [isLive, setIsLive] = useState(false);

  return (
    <header>
      <div className='inner'>
        <h1
          className='logo'
          onClick={() => {
            router.push('/');
          }}
        >
          <img src='../images/logo.svg' alt='성락교회' />
        </h1>
        {isLive && (
          <div className='live'>
            라이브 <img src='/icons/ico_live.svg' alt='라이브' />
          </div>
        )}
      </div>
    </header>
  );
};

export default AppHeader;
