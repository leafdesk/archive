import Layout from 'components/Layout';
import SubLayout from 'components/SubLayout';
import { useRouter } from 'next/router';
import styles from '../../../../styles/Home.module.css';
import { useState } from 'react';

export async function getServerSideProps() {
  console.log('이 로그는 Server에 표시됩니다.');

  return { props: {} };
}

export default function MyInfo() {
  const router = useRouter();
  const [clicked, setClicked] = useState(false);
  const { status = 'initial' } = router.query;

  return (
    <>
      <h1 className={styles.title}>My Info</h1>
      <h1 className={styles.title}>Clicked: {String(clicked)}</h1>
      <h1 className={styles.title}>Status: {status}</h1>

      {/**
       * status는 edit으로 변경 유지, clicked는 다시 false로 초기화.
       *
       * getServerSideProps 함수 호출. Data Fetching.
       */}
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          location.replace('/settings/my/info?status=edit');
        }}
      >
        edit: replace
      </button>

      {/**
       * status와 clicked 모두 변경 유지.
       *
       * getServerSideProps 함수 호출. Data Fetching.
       */}
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/my/info?status=edit');
        }}
      >
        edit: push
      </button>

      {/**
       * status와 clicked 모두 변경 유지.
       *
       * getServerSideProps 함수 호출되지 않음. Data Fetching 진행되지 않음.
       */}
      <button
        onClick={() => {
          alert('edit');
          setClicked(true);
          router.push('/settings/my/info?status=edit', undefined, {
            shallow: true,
          });
        }}
      >
        edit: shallow
      </button>
    </>
  );
}

MyInfo.getLayout = function getLayout(page) {
  return (
    <Layout>
      <SubLayout>{page}</SubLayout>
    </Layout>
  );
};
