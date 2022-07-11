import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

import styles from './Praise.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Praise = () => {
  const router = useRouter();

  const [praiseDataPrc, setPraiseDataPrc] = useState([]);
  const [praiseDataPro, setPraiseDataPro] = useState([]);

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  // 성가대
  const API_URL_PRC = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=6&playlistId=PLCNxYye_JJpZu77kdDQL8br9UXmYybrw7`;
  // 헌금송
  const API_URL_PRO = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=6&playlistId=PLCNxYye_JJpZ0jAa8IiITarzB-YF6aYdl`;

  const getOnData = async () => {
    const dataPrc = await axios.get(API_URL_PRC);
    setPraiseDataPrc(dataPrc.data.items);

    const dataPro = await axios.get(API_URL_PRO);
    setPraiseDataPro(dataPro.data.items);
  };

  useEffect(() => {
    getOnData();
  }, []);

  return (
    <div className='section'>
      <div className={cn('title')}>은혜로운 찬양</div>
      <Link href='/praisemain'>
        <a className={cn('more')}>전체보기</a>
      </Link>
      <Swiper
        className={cn('slide_wrap')}
        spaceBetween={10}
        slidesPerView={'auto'}
        resistanceRatio={0}
        pagination={false}
      >
        {praiseDataPrc.map((doc, i) => {
          let splitListTitle = doc.snippet.title.split('|');
          let ListTitle = splitListTitle[0];
          let splitListDate = doc.snippet.publishedAt.split('T');
          let ListDate = splitListDate[0].split('-');
          let lDate = ListDate[0] + '. ' + ListDate[1] + '. ' + ListDate[2];

          return (
            <SwiperSlide className={cn('movie_wrap')} key={doc.id}>
              <div
                onClick={() => {
                  router.push(
                    `/praisedetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${ListDate}&kind=prc`,
                    '/praisedetail'
                  );
                }}
              >
                <div className='movie_thumb'>
                  <img
                    style={{ width: '100%' }}
                    src={doc.snippet.thumbnails.medium.url}
                  />
                </div>
                <div className={cn('info')}>
                  <div className={cn('tit')}>
                    <a href='#'>{ListTitle}</a>
                  </div>
                  <div className={cn('date')}>{lDate}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}

        {praiseDataPro.map((doc, i) => {
          let splitListTitle = doc.snippet.title.split('|');
          let ListTitle = splitListTitle[0];
          let splitListDate = doc.snippet.publishedAt.split('T');
          let ListDate = splitListDate[0].split('-');
          let lDate = ListDate[0] + '. ' + ListDate[1] + '. ' + ListDate[2];

          return (
            <SwiperSlide className={cn('movie_wrap')} key={doc.id}>
              <div
                onClick={() => {
                  router.push(
                    `/praisedetail?vid=${doc.snippet.resourceId.videoId}&vtit=${ListTitle}&vdate=${ListDate}&kind=prc`,
                    '/praisedetail'
                  );
                }}
              >
                <img
                  style={{ width: '100%' }}
                  src={doc.snippet.thumbnails.medium.url}
                />
                <div className={cn('info')}>
                  <div className={cn('tit')}>
                    <a href='#'>{ListTitle}</a>
                  </div>
                  <div className={cn('date')}>{lDate}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Praise;
