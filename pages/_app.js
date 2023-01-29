import Layout from '../components/Layout';

/**
 * 여기서 Component는 페이지를 의미.
 */
export default function App({ Component, pageProps }) {
  /**
   * 페이지에 getLayout 함수가 있으면 사용하고, 아니면 Layout으로만 감싸서 리턴.
   */
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
