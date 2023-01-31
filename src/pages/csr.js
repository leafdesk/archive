import Layout from '../components/Layout';
import SubLayout from '../components/SubLayout';
import styles from '../../styles/Home.module.css';
import { useEffect, useState } from 'react';

/**
 * CSR: Client Side Rendering. 클라이언트가 데이터를 가져와서 그린다.
 *
 * 함수는 따로 존재하지 않음. React와 동일.
 */
export default function CSR() {
  const [time, setTime] = useState();

  useEffect(() => {
    console.log('이 로그는 Client에 표시됩니다.');
    setTime(new Date().toISOString());
  }, []);

  return <h1 className={styles.title}>{time}</h1>;
}

CSR.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
