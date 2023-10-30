import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import styles from '../../../styles/Home.module.css';
import { useEffect, useState } from 'react';

/**
 * Nested Dynamic Routes: 중첩된 동적 라우팅.
 */
export default function UsernameInfo() {
  const router = useRouter();

  const { username, info, uid } = router.query;

  const [name, setName] = useState('?');

  //   useEffect(() => {
  //     fetch('/api/user')
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setName(data.name);
  //       });
  //   }, []);

  /**
   * uid가 아직 undefined인 경우 fetching 진행하지 않음. uid가 유의미한 값이 되면 fetch.
   *
   * 해당 uid로 user-info 요청. 응답 데이터의 내용을 setName으로 name에 저장.
   */
  useEffect(() => {
    if (uid) {
      fetch(`/api/user-info/${uid}`)
        .then((res) => res.json())
        .then((data) => {
          setName(data.name);
        });
    }
  }, [uid]);

  /**
   * http://localhost:3000/jimmy/height
   *
   * Expected result: jimmy's height
   */
  return (
    <>
      <h1 className={styles.title}>{`${username}'s ${info}`}</h1>
      <h1 className={styles.title}>{`Name: ${name}`}</h1>
    </>
  );
}

UsernameInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
