import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';

/**
 * Dynamic Routes: 동적 라우팅.
 */
export default function CategorySlug() {
  const router = useRouter();

  /**
   * /category/A?B=C 경로일 때, { slug: 'A', B: 'C' } Object를 반환.
   *
   * 이때 slug는 파일명 [slug].js에서 가져온 것. 변경 가능.
   *
   * 물음표 뒤에 파일명과 동일한 쿼리가 오면 무시. 이외의 중복 쿼리는 Array로 받음.
   */
  const { slug, from } = router.query;

  /**
   * http://localhost:3000/category/sports?from=A&from=B
   *
   * { from: ['A', 'B'], slug: 'sports' }
   */
  console.log(JSON.stringify(router.query));

  return <h1 className={styles.title}>{`Category ${slug} from ${from}`}</h1>;
}

CategorySlug.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
