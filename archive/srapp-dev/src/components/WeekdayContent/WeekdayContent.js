import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Popup from 'reactjs-popup';
import shortsMain from '../../../public/images/shorts_main.jpg';
import axios from 'axios';
import Share from '../Share';
import YouTube from 'react-youtube';
import Image from 'next/image';

import styles from './WeekdayContent.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const WeekdayContent = ({ liveDatas }) => {
  const router = useRouter();
  const [weeks, setWeeks] = useState('');
  const [weekDataOnm, setWeekDataOnm] = useState([]);
  const [weekDataOnb, setWeekDataOnb] = useState([]);
  const [weekDataOns, setWeekDataOns] = useState([]);

  const date = new Date();
  const week = ['일', '월', '화', '수', '목', '금', '토'];
  let onDay = date.getDay() == 0 || date.getDay() == 6 ? 1 : date.getDay();
  const opts = {
    width: '320px',
    height: '200px',
    playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
  };

  const API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  // 온특새
  const API_URL_ONM = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=5&playlistId=PLCNxYye_JJpY-KpZNb-R3VMkoIEkMZSfG`;
  // 온성경
  const API_URL_ONB = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=5&playlistId=PLCNxYye_JJpZKRGb7hy_FJ1OIv4fxTF7S`;
  // 온3분
  const API_URL_ONS = `https://www.googleapis.com/youtube/v3/playlistItems/?key=${API_KEY}&part=snippet,contentDetails&maxResults=5&playlistId=PLCNxYye_JJpZmSoNBoZdnZ0CnpEGh3pQA`;

  const [weekSelectDataOnm, setWeekSelectDataOnm] = useState({
    title: '',
    date: '',
    videoId: '',
    thumbnails: '',
  });
  const [weekSelectDataOnb, setWeekSelectDataOnb] = useState({
    title: '',
    date: '',
    videoId: '',
    thumbnails: '',
  });
  const [weekSelectDataOns, setWeekSelectDataOns] = useState({
    title: '',
    date: '',
    videoId: '',
    thumbnails: '',
  });

  const getOnData = async () => {
    const dataOnm = await axios.get(API_URL_ONM);
    setWeekDataOnm(dataOnm.data.items);

    const dataOnb = await axios.get(API_URL_ONB);
    setWeekDataOnb(dataOnb.data.items);

    const dataOns = await axios.get(API_URL_ONS);
    setWeekDataOns(dataOns.data.items);
  };

  const getWeekData = (day) => {
    onInit();

    weekDataOnm.forEach((doc) => {
      if (doc.snippet.title !== 'Private video') {
        let splitDateOnm = doc.snippet.publishedAt.split('T');
        if (getDate(splitDateOnm[0]) === day) {
          let splitTitleOnm1 = doc.snippet.title.split('-');
          let splitTitleOnm2 = splitTitleOnm1[1].split('|');
          setWeekSelectDataOnm({
            title: splitTitleOnm2[0],
            date: splitTitleOnm2[1],
            videoId: doc.snippet.resourceId.videoId,
            thumbnails: doc.snippet.thumbnails,
          });
        }
        return false;
      }
    });

    weekDataOnb.forEach((doc) => {
      if (doc.snippet.title !== 'Private video') {
        let splitDateOnb = doc.snippet.publishedAt.split('T');
        let splitTitleOnb1 = [];
        if (getDate(splitDateOnb[0]) === day) {
          splitTitleOnb1 = doc.snippet.title.split('|');
          setWeekSelectDataOnb({
            title: splitTitleOnb1[0],
            date: splitTitleOnb1[1],
            videoId: doc.snippet.resourceId.videoId,
            thumbnails: doc.snippet.thumbnails,
          });
        }
        return false;
      }
    });

    if (day === '금') {
      console.log(weekDataOns);
      weekDataOns.forEach((doc) => {
        if (doc.snippet.title !== 'Private video') {
          let splitDateOns = doc.snippet.publishedAt.split('T');
          if (getDate(splitDateOns[0]) === day) {
            let splitTitleOns1 = doc.snippet.title.split('-');
            let splitTitleOns2 = splitTitleOns1[1].split('|');
            setWeekSelectDataOns({
              title: splitTitleOns2[0],
              date: splitTitleOns2[1],
              videoId: doc.snippet.resourceId.videoId,
              thumbnails: doc.snippet.thumbnails,
            });
          }
          return false;
        }
      });
    } else {
      setWeekSelectDataOns({});
    }
  };

  // 날짜를 요일로 전환함수
  const getDate = (day) => {
    let dayOfWeek = week[new Date(day).getDay() + 1];
    return dayOfWeek;
  };

  // On 콘텐츠 초기화
  const onInit = () => {
    setWeekSelectDataOnm({});
    setWeekSelectDataOnb({});
    setWeekSelectDataOns({});
  };

  useEffect(() => {
    getOnData();
    setWeeks(week[onDay]);
  }, []);

  useEffect(() => {
    getWeekData(week[onDay]);
  }, [weekDataOnm, weekDataOnb, weekDataOns]);

  return (
    <div className={liveDatas.videoId ? 'section pt0' : 'section pt25'}>
      <div className='title'>주중 콘텐츠</div>
      <div className={cn('days_wrap')}>
        {/* day_list */}
        <ul className={cn('day_list')}>
          <li
            onClick={() => {
              getWeekData('월');
              setWeeks('월');
            }}
            className={weeks == '월' ? cn('on') : ''}
          >
            월요일
          </li>
          <li
            onClick={() => {
              getWeekData('화');
              setWeeks('화');
            }}
            className={weeks == '화' ? cn('on') : ''}
          >
            화요일
          </li>
          <li
            onClick={() => {
              getWeekData('수');
              setWeeks('수');
            }}
            className={weeks == '수' ? cn('on') : ''}
          >
            수요일
          </li>
          <li
            onClick={() => {
              getWeekData('목');
              setWeeks('목');
            }}
            className={weeks == '목' ? cn('on') : ''}
          >
            목요일
          </li>
          <li
            onClick={() => {
              getWeekData('금');
              setWeeks('금');
            }}
            className={weeks == '금' ? cn('on') : ''}
          >
            금요일
          </li>
        </ul>
        {/* end of day_list */}

        {/* con_list */}
        <ul className={cn('con_list')}>
          {weekSelectDataOnm.title && (
            <li
              onClick={() => {
                router.push(
                  `/onprayerdetail?vid=${weekSelectDataOnm.videoId}&vtit=${weekSelectDataOnm.title}&vdate=${weekSelectDataOnm.date}&kind=onm`,
                  '/onprayerdetail'
                );
              }}
            >
              <div className={cn('movie')}>
                {weekSelectDataOnm.thumbnails ? (
                  <img src={weekSelectDataOnm.thumbnails.medium.url} />
                ) : null}
              </div>
              <div className={cn('info')}>
                <div className={cn('tit')}>
                  {weekSelectDataOnm.title}
                  {/* <span className="tag_up">UP</span> */}
                </div>
                <div className={cn('date')}>
                  {weekSelectDataOnm.date.substring(0, 10)}
                </div>
              </div>
            </li>
          )}
          {weeks != '수' && weekSelectDataOnb.title && (
            <li
              onClick={() => {
                router.push(
                  `/onbibledetail?vid=${weekSelectDataOnb.videoId}&vtit=${weekSelectDataOnb.title}&vdate=${weekSelectDataOnb.date}&kind=onb`,
                  '/onbibledetail'
                );
              }}
            >
              <div className={cn('movie')}>
                {weekSelectDataOnb.thumbnails ? (
                  <img src={weekSelectDataOnb.thumbnails.medium.url} />
                ) : null}
              </div>
              <div className={cn('info')}>
                <div className={cn('tit')}>{weekSelectDataOnb.title}</div>
                <div className={cn('date')}>
                  {weekSelectDataOnb.date.substring(0, 10)}
                </div>
              </div>
            </li>
          )}

          {weekSelectDataOns.title && (
            <li
              onClick={() => {
                router.push(
                  `/onthreedetail?vid=${weekSelectDataOns.videoId}&vtit=${weekSelectDataOns.title}&vdate=${weekSelectDataOns.date}&kind=ont`,
                  '/onthreedetail'
                );
              }}
            >
              <div className={cn('movie')}>
                {weekSelectDataOns.thumbnails ? (
                  <img src={weekSelectDataOns.thumbnails.medium.url} />
                ) : null}
              </div>
              <div className={cn('info')}>
                <div className={cn('tit')}>{weekSelectDataOns.title}</div>
                <div className={cn('date')}>
                  {weekSelectDataOns.date.substring(0, 10)}
                </div>
              </div>
            </li>
          )}
          {weeks == '월' && (
            <Popup
              trigger={
                <li>
                  <div className={cn('movie')}>
                    <Image src={shortsMain} placeholder='blur' quality={50} />
                  </div>
                  <div className={cn('info')}>
                    <div className={cn('tit')}>
                      {/* {data?.contents[0].name} */}
                    </div>
                    <div className={cn('date')}></div>
                  </div>
                </li>
              }
              modal
              nested
            >
              {(close) => (
                <div className='modal'>
                  <div className='header'>
                    <button className='close' onClick={close}>
                      <img src='/icons/btn_close_w.svg' alt='닫기' />
                    </button>
                    <Share
                      // title={data?.contents[0].name}
                      thum={`/images/kakao_shorts.jpg`}
                      // vid={data?.contents[0].videoId}
                      type='white'
                    />
                  </div>
                  <div className='content'>
                    <YouTube
                      // videoId={data?.contents[0].videoId}
                      opts={opts}
                      containerClassName='iframe_wrap'
                    />
                  </div>
                </div>
              )}
            </Popup>
          )}
        </ul>
      </div>
    </div>
  );
};

export default WeekdayContent;
