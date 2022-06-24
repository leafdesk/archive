// 데이터 Fetch를 위한 React Hook, Stale-While-Revalidate
import { SWRConfig } from 'swr';

// 글로벌 스타일
import '../styles/globals.css';
import '../styles/tailwind.css';

// 필요한 컴포넌트들
import Head from 'next/head';
import BookProvider from '../src/components/bibleProvider';
import Layout from '../src/components/Layout';

export default function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: (url) => fetch(url).then((response) => response.json()),
      }}
    >
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta
          name='viewport'
          content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
        />
        <meta name='description' content='Description' />
        <meta name='keywords' content='Keywords' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <title>SRAPP</title>
        <link rel='manifest' href='/manifest.json' />

        <link
          href='/favicon-16x16.png'
          rel='icon'
          type='image/png'
          sizes='16x16'
        />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/icons/icon_512x512.png' />

        {/* 성락교회 로고 152, 180, 167 */}

        <link
          rel='apple-touch-icon'
          sizes='152x152'
          href='/icons/icon_152x152.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/icons/icon_180x180.png'
        />
        <link
          rel='apple-touch-icon'
          sizes='167x167'
          href='/icons/icon_167x167.png'
        />

        {/**
         * 스플래시(splash):
         * 앱 처음 실행 시 1초간 보이는 화면
         */}

        <link
          rel='apple-touch-startup-image'
          href='/images/splash-640x1136.png'
          media='(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
        />
        <link
          rel='apple-touch-startup-image'
          href='/images/splash-750x1334.png'
          media='(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)'
        />
        <link
          rel='apple-touch-startup-image'
          href='/images/splash-1242x2208.png'
          media='(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
        />
        <link
          rel='apple-touch-startup-image'
          href='/images/splash-1125x2436.png'
          media='(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)'
        />
        <link
          rel='apple-touch-startup-image'
          href='/images/splash-1536x2048.png'
          media='(min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
        />
        <link
          rel='apple-touch-startup-image'
          href='/images/splash-1668x2224.png'
          media='(min-device-width: 834px) and (max-device-width: 834px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
        />
        <link
          rel='apple-touch-startup-image'
          href='/images/splash-2048x2732.png'
          media='(min-device-width: 1024px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)'
        />

        {/* SCRIPT */}
        <script src='https://developers.kakao.com/sdk/js/kakao.min.js'></script>
      </Head>

      <BookProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </BookProvider>
    </SWRConfig>
  );
}
