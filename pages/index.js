import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import HomeBar from '../src/components/HomeBar';
import Image from 'next/image';
import mdBanner from '../public/icons/md_banner2.png';

// 사용자 정의 컴포넌트
import AppHeader from '../src/components/AppHeader/AppHeader';
import SermonThisWeek from '../src/components/SermonThisWeek/SermonThisWeek';
import WeekdayContent from '../src/components/WeekdayContent/WeekdayContent';
import QuickMenu from '../src/components/QuickMenu/QuickMenu';
import Praise from '../src/components/Praise/Praise';
import Department from '../src/components/Department/Department';

SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function Home() {
  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  // 주일설교
  const API_URL_DEF = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=1&playlistId=PLCNxYye_JJpZXsl4cQEjzBWRUFSCb2MCE`;
  // 주일예배 1부 〔06:30 AM〕 · 3부 〔10:30 AM〕
  const API_URL_SUN = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=2&playlistId=PLCNxYye_JJpYLa-0kkDLhDAw-Rzq3keT6`;

  const [isLoading, setIsLoading] = useState(true);
  const [json, setJson] = useState({});
  const [liveDatas, setLiveDatas] = useState({
    videoId: '',
    title: '',
    thumbnails: '',
    publishedAt: '',
  });

  const date = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];

  const getPlaylistItems = async () => {
    if (week[date.getDay()] === '일') {
      // 오늘이 일요일이라면, date.getDay() === 0
      const json = await axios.get(API_URL_SUN);
      setJson(() => json);

      let hours = new Date().getHours();
      if (hours > 7 && hours < 13) {
        // AppHeader 컴포넌트에 반영되는 setIsLive 함수
        setIsLive(true);
      }
    } else {
      // 오늘이 일요일이 아니라면,
      json = await axios.get(API_URL_DEF);
      setJson(() => json);
    }
  };

  useEffect(() => {
    // API를 이용해 JSON 파일을 가져옴
    getPlaylistItems();

    setLiveDatas({
      videoId: json.data.items[0].snippet.resourceId.videoId,
      title: json.data.items[0].snippet.title.split('-')[1].split('|')[0],
      thumbnails: json.data.items[0].snippet.thumbnails.medium.url,
      publishedAt: json.data.items[0].snippet.publishedAt
        .split('T')[0]
        .replaceAll('-', '. '),
    });

    setIsLoading(false);
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
