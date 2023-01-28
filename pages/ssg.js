import Head from 'next/head';
import styles from '../styles/Home.module.css';

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
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      {/**
       * SSG에서는 새로고침을 해도 데이터 변동 없음. 블로그 포스트 등에 사용.
       *
       * build 시 페이지를 생성. 아래 time은 build time으로 고정.
       */}
      <main>
        <h1 className={styles.title}>{time}</h1>
      </main>

      <footer>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel' className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
