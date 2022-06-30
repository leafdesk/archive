import { useRouter } from 'next/router';
import YouTube from 'react-youtube';
import Loading from '../Loading';
import Share from '../Share';

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
          <div className='movie_wrap'>
            <YouTube
              videoId={liveDatas.videoId}
              opts={opts}
              containerClassName='iframe_wrap'
            />

            <div className='info'>
              <Share
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

              <div className='date'>{liveDatas.publishedAt}</div>
              <div className='preacher'>설교: 김성현 목사</div>
            </div>
            {/* end of info */}
          </div>
          {/* end of movie_wrap */}
        </div>
      ) : (
        <div className='loading_box'>
          <Loading />
        </div>
      )}
    </>
  );
};

export default SermonThisWeek;
