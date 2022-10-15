import '../styles/reset.css';
import '../styles/globals.css';
import Header from '../src/components/Header/Header';
import useUser from '@libs/client/useUser';
import { SWRConfig } from 'swr';

const MyApp = ({ Component, pageProps }) => {
  const user = useUser();
  console.log(user);

  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((response) => response.json()),
      }}
    >
      <Header />
      <Component {...pageProps} />
    </SWRConfig>
  );
};

export default MyApp;
