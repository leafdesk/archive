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
        /**
         * 이벤트 데이터 존재 시 UI. [정상]
         */
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
              number={5}
              title="감독님을 향한 사랑의 편지 작성하기"
              colors={{ background: 'bg-[#FFEFEC]', text: 'text-[#EF4424]' }}
              buttonStatus={3}
              rate={25}
            />
            <MissionCard
              number={6}
              title="SUM WORSHIP 좋아요, 댓글 남기기, 구독, 알림설정 하기"
              colors={{ background: 'bg-[#EFF6E0]', text: 'text-[#547708]' }}
              buttonStatus={2}
              rate={33}
            />
          </div>

          {/* 다음 미션 공개일 */}
          <div className="text-center pb-9 block">
            <span className="font-normal text-[#666] text-sm mr-2">
              다음 미션 공개일
            </span>
            <strong className="font-medium text-[#222] text-sm">
              7월 10일 수요일
            </strong>
          </div>

          {/* 지난 미션을 확인해보세요! */}
          <h3 className="block pt-9 px-4 pb-6 font-medium text-lg text-[#222]">
            지난 미션을 확인해보세요!
          </h3>

          {/* 미완료된 미션 */}
          <span className="font-normal text-base text-[#888] px-4 pb-[18px] flex items-center gap-[6px]">
            미완료된 미션
            <span className="block w-[18px] h-[18px] bg-[#D9D9D9]" />
          </span>

          {/* 미완료된 미션 카드 리스트 */}
          <div className="px-4 pb-6 grid gap-4">
            <MissionCard
              number={4}
              title="SUM WORSHIP 좋아요, 댓글 남기기, 구독, 알림설정 하기"
              colors={{ background: 'bg-[#FFF9E2]', text: 'text-[#997A00]' }}
              buttonStatus={3}
              rate={50}
            />
            <MissionCard
              number={3}
              title="감독님을 향한 사랑의 편지 작성하기"
              colors={{ background: 'bg-[#F0FCFC]', text: 'text-[#11758D]' }}
              buttonStatus={2}
              rate={75}
            />
            <MissionCard
              number={2}
              title="SUM WORSHIP 좋아요, 댓글 남기기, 구독, 알림설정 하기"
              colors={{ background: 'bg-[#ECF8F4]', text: 'text-[#107054]' }}
              buttonStatus={2}
              rate={84}
            />
          </div>

          {/* 완료된 미션 */}
          <span className="font-normal text-base text-[#888] px-4 pb-[18px] flex items-center gap-[6px]">
            완료된 미션
            <span className="block w-[18px] h-[18px] bg-[#D9D9D9]" />
          </span>

          {/* 완료된 미션 카드 리스트 */}
          <div className="px-4 pb-6 grid gap-4">
            <MissionCard
              number={1}
              title="사랑 및 긍휼 2행시 지어보기"
              colors={{ background: 'bg-[#E0E6F6]', text: 'text-[#446CC1]' }}
              buttonStatus={3}
              rate={100}
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
