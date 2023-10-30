import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import styles from '../../styles/Home.module.css';

/**
 * SSG: Static Site Generation. 빌드 시 데이터를 가져와서 정적인 사이트를 그려둔다.
 *
 * dev 환경에서는 SSR처럼 동작. 확인하려면 build, start. (getStaticPath도 함께 사용.)
 */
export async function getStaticProps() {
  console.log('SSG는 Client, Server 둘 다 로그가 남지 않습니다.');

  return { props: { time: new Date().toISOString() } };
}

export default function SSG({ time }) {
  /**
   * SSG에서는 새로고침을 해도 데이터 변동 없음. 블로그 포스트 등에 사용.
   *
   * build 시 페이지를 생성. 아래 time은 build time으로 고정.
   */
  return <h1 className={styles.title}>{time}</h1>;
}

SSG.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
