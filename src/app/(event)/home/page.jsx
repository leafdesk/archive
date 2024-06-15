'use client'

import MissionCard from '@/components/mission-card'
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
        <div className="bg-[#F7F7F7]">
          {/* 홈 상단 */}
          <div className="h-[54px] px-4 mb-9 flex items-center justify-end">
            <button className="font-normal text-[#666] text-base w-fit bg-white rounded-full h-[38px] flex items-center justify-center px-[14px]">
              미션방법
            </button>
            <button className="font-normal text-[#666] text-base w-fit bg-white rounded-full h-[38px] flex items-center justify-center px-[14px] ml-2">
              전체 미션보드
            </button>
          </div>

          {/* 팀, 닉네임, 소속 기관 */}
          <div className="px-4 pb-6">
            <div className="flex items-end mb-1">
              <h2 className="font-medium text-2xl text-[#222] mr-1">1팀</h2>
              <h3 className="font-medium text-base text-[#222]">
                {eventData}님
              </h3>
            </div>
            <span className="text-sm font-normal text-[#888]">
              가평, 김포, 부천, 이천, 강남, 중등부, 대학부(온,로뎀)
            </span>
          </div>

          {/* 팀 미션보드 */}
          <div className="px-4 pb-6">
            {/* 이미지 div */}
            {/* 🚨 TODO: 실제로는 고정 height가 아니라 w-fit에 맞는 height 비율로 생각해야 함. */}
            <div className="h-[268px] bg-blue-600" />
          </div>

          {/* 미션 카드 리스트 */}
          <div className="px-4 pb-6 grid gap-4">
            <MissionCard
              number={1}
              title="감독님을 향한 사랑의 편지 작성하기"
              colorIndex={0}
              isPendingApproval={true}
            />
            <MissionCard
              number={2}
              title="SUM WORSHIP 좋아요, 댓글 남기기, 구독, 알림설정 하기"
              colorIndex={1}
              isPendingApproval={false}
            />
          </div>
        </div>
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
