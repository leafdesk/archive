'use client'

import ProgressBar from './progress-bar'

/**
 * 미션 카드.
 */
const MissionCard = ({
  number,
  title,
  rate,
  colors,
  buttonStatus, // 0: 인증하기, 1: 승인 대기 중, 2: 재인증, 3: 인증완료
}) => {
  const backgroundColor = colors?.background
  const textColor = colors?.text

  return (
    <div className="flex items-center justify-between w-full rounded-lg overflow-hidden border border-[#EAEAEA]">
      {/* 카드의 왼쪽: 미션 번호 */}
      <div
        className={`${backgroundColor} w-[55px] min-w-[55px] h-full flex items-center justify-center`}
      >
        <span className={`${textColor} font-medium text-base`}>
          미션 {number}
        </span>
      </div>

      {/* 카드의 오른쪽 */}
      <div className="pt-4 px-4 w-full h-full pb-2.5 bg-white flex flex-col">
        {/* 미션 제목 */}
        <strong className="block font-medium text-base text-[#222]">
          {title}
        </strong>

        {/* 참여율 상태 바 - Linear Gradient #6679FF 100% ~ #EBABDC 100% */}
        <ProgressBar rate={rate} />

        <div className="flex items-start justify-between mb-4">
          {/* 격려 텍스트 */}
          <span className="font-medium text-xs text-[#777DF0]">
            조금 더 힘내세요!
          </span>

          {/* 참여율 퍼센트 텍스트 */}
          <span className="font-normal text-xs text-[#666]">
            참여율 {rate}%
          </span>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-auto flex items-center justify-end">
          <button className="font-normal text-sm text-[#888]">상세보기</button>
          {buttonStatus == 0 && (
            <button className="block w-[110px] rounded-md h-[34px] font-medium text-base ml-5 bg-[#19CD72] text-white">
              인증하기
            </button>
          )}
          {buttonStatus == 1 && (
            <button className="block w-[110px] rounded-md border border-[#AAA] h-[34px] font-medium text-base text-[#AAA] ml-5">
              승인 대기 중
            </button>
          )}
          {buttonStatus == 2 && (
            <button className="block w-[110px] rounded-md border border-[#19CD72] h-[34px] font-medium text-base text-[#19CD72] ml-5">
              재인증
            </button>
          )}
          {buttonStatus == 3 && (
            <button className="block w-[110px] rounded-md h-[34px] font-medium text-base ml-5 bg-[#888] text-white">
              인증완료
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MissionCard
