import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import HomeBar from '../src/components/HomeBar';
import useSWR from 'swr';
import Image from 'next/image';
import mdBanner from '../public/icons/md_banner2.png';

// 사용자 정의 컴포넌트 import
import AppHeader from '../src/components/AppHeader/AppHeader';
import WeekdayContent from '../src/components/WeekdayContent/WeekdayContent';
import QuickMenu from '../src/components/QuickMenu/QuickMenu';
import Praise from '../src/components/Praise/Praise';
import Department from '../src/components/Department/Department';
import SermonThisWeek from '../src/components/SermonThisWeek/SermonThisWeek';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const router = useRouter();
  const { data } = useSWR('/api/contents');

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  // 주일설교
  const API_URL_DEF = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE`;
  // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM
  const API_URL_SUN = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=2&playlistId=PLCNxYye_JJpYLa-0kkDLhDAw-Rzq3keT6`;

  const date = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const [isLoading, setIsLoading] = useState(true);

  const [liveDatas, setLiveDatas] = useState({
    videoId: '',
    title: '',
    thumbnails: '',
    publishedAt: '',
  });

  const getLiveData = async () => {
    const api_data = {};
    const splitTitle = '';
    const splitDate = '';
    const videoTitle = '';
    const videoDate = '';

    if (week[date.getDay()] === '일') {
      api_data = await axios.get(API_URL_SUN);
      splitTitle = api_data.data.items[0].snippet.title.split('-');
      splitDate = api_data.data.items[0].snippet.publishedAt.split('T');
      videoTitle = splitTitle[1].split('|');
      videoDate = splitDate[0].split('-');

      let hours = new Date().getHours();
      if (hours > 7 && hours < 13) {
        // AppHeader 컴포넌트에 반영되는 setIsLive 함수
        setIsLive(true);
      }
    } else {
      api_data = await axios.get(API_URL_DEF);
      splitTitle = api_data.data.items[0].snippet.title.split('-');
      splitDate = api_data.data.items[0].snippet.publishedAt.split('T');
      videoTitle = splitTitle[1].split('|');
      videoDate = splitDate[0].split('-');
    }
    setLiveDatas({
      videoId: api_data.data.items[0].snippet.resourceId.videoId,
      title: videoTitle[0],
      thumbnails: api_data.data.items[0].snippet.thumbnails.medium.url,
      publishedAt: videoDate[0] + '. ' + videoDate[1] + '. ' + videoDate[2],
    });

    setIsLoading(false);
  };

  useEffect(() => {
    getLiveData();
  }, []);

  return (
    <>
      {/* 좌측 상단 성락교회 로고 (헤더) */}
      <AppHeader />

      <div className='container'>
        {/* 이번 주 설교 */}
        <SermonThisWeek isLoading={isLoading} liveDatas={liveDatas} />

        {/* 주중 콘텐츠 */}
        <WeekdayContent liveDatas={liveDatas} />

        {/* 퀵 메뉴 7개 */}
        <QuickMenu />

        {/* 교회 표어 */}
        <div className='mdbanner'>
          <Image src={mdBanner} placeholder='blur' quality={100} />
        </div>

        {/* 은혜로운 찬양 */}
        <Praise />

        {/* 성락교회 미래세대 */}
        <Department />
      </div>
      {/* end of container */}

      {/* 하단 메뉴 바 */}
      <HomeBar />
    </>
  );
}
