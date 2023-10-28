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
        <section className='section pt0'>
          <div className={cn('Movie')}>
            {/* 유튜브 영상 */}
            <YouTube
              videoId={liveDatas.videoId}
              opts={opts}
              containerClassName='iframe_wrap'
            />

            {/* 영상 정보(Info) */}
            <div className={cn('info')}>
              <div className={cn('FlexBox')}>
                {/* 영상 제목 */}
                <div
                  className={cn('title', 'pr25')}
                  onClick={() => {
                    router.push(
                      `/sermondetail?vid=${liveDatas.videoId}&vtit=${liveDatas.title}&vdate=${liveDatas.publishedAt}`,
                      '/sermondetail'
                    );
                  }}
                >
                  <a href='#'>{liveDatas.title}</a>
                </div>

                {/* 공유 버튼 */}
                <Share
                  className={cn('ShareButton')}
                  title={liveDatas.title}
                  thum='/images/kakao_def_new.jpg'
                  vid={liveDatas.videoId}
                />
              </div>
              {/* end of FlexBox */}

              {/* 영상 날짜 및 설교자 */}
              <div className={cn('date')}>{liveDatas.publishedAt}</div>
              <div className={cn('preacher')}>설교: 김성현 목사</div>
            </div>
            {/* end of info */}
          </div>
          {/* end of Movie */}
        </section>
      ) : (
        <div className={cn('Loading')}>
          <Loading />
        </div>
      )}
    </>
  );
};

export default SermonThisWeek;
