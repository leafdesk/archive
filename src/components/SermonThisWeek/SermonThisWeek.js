import { useRouter } from 'next/router';
import YouTube from 'react-youtube';
import Loading from '../Loading';
import Share from '../Share';

import styles from './SermonThisWeek.module.scss';
import classNames from 'classnames/bind';

const cn = classNames.bind(styles);

const SermonThisWeek = ({ isLoading, liveDatas }) => {
  const router = useRouter();

  const opts = {
    width: '320px',
    height: '200px',
    playerVars: { autoplay: 1, rel: 0, modestbranding: 1 },
  };

  return (
    <>
      {isLoading === false ? (
        <div className='section pt0'>
          <div className={cn('movie_wrap')}>
            <YouTube
              videoId={liveDatas.videoId}
              opts={opts}
              containerClassName='iframe_wrap'
            />

            <div className={cn('info')}>
              <Share
                className={cn('btn_share')}
                title={liveDatas.title}
                thum='/images/kakao_def_new.jpg'
                vid={liveDatas.videoId}
              />

              <div
                className='tit pr25'
                onClick={() => {
                  router.push(
                    `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}`,
                    '/sermondetail'
                  );
                }}
              >
                <a href='#'>{liveDatas.title}</a>
              </div>

              <div className={cn('date')}>{liveDatas.publishedAt}</div>
              <div className={cn('preacher')}>설교: 김성현 목사</div>
            </div>
            {/* end of info */}
          </div>
          {/* end of movie_wrap */}
        </div>
      ) : (
        <div className={cn('loading_box')}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default SermonThisWeek;
