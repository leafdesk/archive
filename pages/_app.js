import '../styles/reset.css';
import '../styles/globals.css';
import Header from '../src/components/Header/Header';
import useUser from '@libs/client/useUser';

const MyApp = ({ Component, pageProps }) => {
  const user = useUser();

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
