import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';
import styles from '../styles/Home.module.css';

/**
 * ISR: Incremental Static Regeneration. 특정 주기로 데이터를 가져와서 정적인 사이트를 다시 그려둔다.
 *
 * 확인하려면 build, start. 새로고침 할 때마다 변경되지 않고, revalidate 주기로 변경됨. SSG, SSR의 장점을 둘 다 사용할 수 있음.
 */
export async function getStaticProps() {
  console.log('ISR 로그는 Server에 revalidate 주기로 표시됩니다.');

  return { props: { time: new Date().toISOString() }, revalidate: 1 };
}

export default function ISR({ time }) {
  /**
   * 새로고침 할 때마다 변경되지 않고, revalidate 주기로 변경됨.
   */
  return <h1 className={styles.title}>{time}</h1>;
}

ISR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
