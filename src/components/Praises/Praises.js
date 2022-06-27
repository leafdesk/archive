import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';

const Praises = () => {
  const [praiseDataPrc, setPraiseDataPrc] = useState([]);
  const [praiseDataPro, setPraiseDataPro] = useState([]);

  return (
    <div className='section'>
      <div className='title'>은혜로운 찬양</div>
      <Link href='/praisemain'>
        <a className='more'>전체보기</a>
      </Link>
      <Swiper
        className='slide_wrap'
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
            <SwiperSlide className='movie_wrap' key={doc.id}>
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
                <div className='info'>
                  <div className='tit'>
                    <a href='#'>{ListTitle}</a>
                  </div>
                  <div className='date'>{lDate}</div>
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
            <SwiperSlide className='movie_wrap' key={doc.id}>
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
                <div className='info'>
                  <div className='tit'>
                    <a href='#'>{ListTitle}</a>
                  </div>
                  <div className='date'>{lDate}</div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Praises;
