import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

/**
 * Catch all routes. [...slug].js 뒤에 오는 경로는 Array로 사용 가능. 뒤에 없으면 404 페이지.
 *
 * Optional catch all routes. 뒤에 경로가 없이 /cart 사용을 원하면 [[...slug]].js 파일명 사용.
 */
export default function CartDateSlug() {
  const router = useRouter();

  const { date } = router.query;

  /**
   * http://localhost:3000/cart/2023/01/23
   *
   * { date: ['2023', '01', '23'] }
   */
  console.log(JSON.stringify(router.query));

  return <h1 className={styles.title}>CartDateSlug {JSON.stringify(date)}</h1>;
}

CartDateSlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
