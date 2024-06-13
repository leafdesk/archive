'use client'

import useEventData from '@/hooks/useEventData'

/**
 * 팀 페이지. (이벤트 홈)
 */
const EventHomePage = () => {
  const { data: eventData, loading, error } = useEventData()
  // console.log(eventData, loading, error)

  /**
   * 이벤트 데이터 로딩 중 UI.
   */
  if (loading) {
    return <div>Loading...</div>
  }

  /**
   * 이벤트 데이터 에러 발생 시 UI.
   */
  if (error) {
    return <div>{error}</div>
  }

  /**
   * 이벤트 데이터 로딩 완료 시 UI.
   */
  return (
    <>
      {eventData ? (
        <>
          {/* 홈 상단 */}
          <div>
            <button>
              미션방법
              <svg />
            </button>
            <button>
              전체 미션보드
              <svg />
            </button>
          </div>

          {/* 팀, 닉네임, 소속 기관 */}
          <div>
            <div>
              <h2>1팀</h2>
              <h3>{eventData}님</h3>
            </div>
            <span>가평, 김포, 부천, 이천, 강남, 중등부, 대학부(온,로뎀)</span>
          </div>

          {/* 팀 미션보드 */}
          <div>
            {/* 이미지 div */}
            <div />
          </div>
        </>
      ) : (
        /**
         * 이벤트 데이터가 없을 시 UI.
         */
        <div>No event data available.</div>
      )}
    </>
  )
}

export default EventHomePage
