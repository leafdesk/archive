import Link from 'next/link';
import Image from 'next/image';

import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
// SwiperCore.use([Autoplay, Pagination, Navigation]);

import bwmLogo from '../../../public/images/bwm_logo.png';

import styles from './Department.module.css';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const Department = () => {
  return (
    <>
      <div className='section pt0'>
        <div className='title'>성락교회 미래세대</div>
        <Swiper
          className={cn('Department')}
          spaceBetween={7}
          slidesPerView={'auto'}
          resistanceRatio={0}
          pagination={false}
        >
          <SwiperSlide className={cn('SwiperSlide')}>
            <Link href='youtube://channel/UCkrWb-HCk3fA7szpbmLHTmw'>
              <a>
                <div className='img'>
                  <Image src={bwmLogo} placeholder='blur' quality={100} />
                </div>
                <div className='txt'>청년부</div>
              </a>
            </Link>
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <Link href='youtube://channel/UCW6bF9L0ZK__Tlwl19B0FYQ'>
              <a>
                <div className='img'>
                  <img src='../icons/thumb_cba.svg' alt='대학부' />
                </div>
                <div className='txt'>대학부</div>
              </a>
            </Link>
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <Link href='youtube://channel/UCcD3GeLh6aBwBN_A5yr4pEg'>
              <a>
                <div className='img'>
                  <img src='../icons/thumb_high.svg' alt='고등부' />
                </div>
                <div className='txt'>고등부</div>
              </a>
            </Link>
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <Link href='youtube://channel/UCDzjhPXk9IypRuCopoFDvlg'>
              <a>
                <div className='img'>
                  <img src='../icons/thumb_secondary.svg' alt='중등부' />
                </div>
                <div className='txt'>중등부</div>
              </a>
            </Link>
          </SwiperSlide>

          <SwiperSlide className={cn('SwiperSlide')}>
            <Link href='youtube://channel/UCVZgyTaNK1q-CKM481MO35A'>
              <a>
                <div className='img'>
                  <img src='../icons/thumb_elementary.svg' alt='유치부' />
                </div>
                <div className='txt'>어린이부</div>
              </a>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Department;
