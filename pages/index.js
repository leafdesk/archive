import Link from 'next/link';
import styles from '../styles/Home.module.css';

/**
 * SSR: Server Side Rendering. 서버가 데이터를 가져와서 그린다. 서버 부하 발생.
 *
 * 여기서 리턴된 값은 페이지에 전달됨. 페이지를 새로고침 할 때마다 Data Fetching.
 */
export async function getServerSideProps() {
  console.log('이 로그는 Server에 표시됩니다.');

  return { props: { time: new Date().toISOString() } };
}

export default function Home({ time }) {
  return (
    <>
      <h1 className={styles.title}>{time}</h1>

      <h1>
        <Link href='csr'>CSR</Link> <Link href='ssg'>SSG</Link>{' '}
        <Link href='isr'>ISR</Link>
      </h1>
    </>
  );
}
