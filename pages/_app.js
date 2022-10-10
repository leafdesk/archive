import '../styles/reset.css';
import '../styles/globals.css';
import Header from '../src/components/Header/Header';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
