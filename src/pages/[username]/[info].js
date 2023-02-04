import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

/**
 * Nested Dynamic Routes: 중첩된 동적 라우팅.
 */
export default function UsernameInfo() {
  const router = useRouter();

  const { username, info } = router.query;

  /**
   * http://localhost:3000/jimmy/height
   *
   * Expected result: jimmy's height
   */
  return <h1 className={styles.title}>{`${username}'s ${info}`}</h1>;
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
