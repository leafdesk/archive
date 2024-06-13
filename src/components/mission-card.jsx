'use client'

/**
 * 미션 카드.
 */
const MissionCard = ({
  number,
  title,
  rate,
  colorIndex,
  isPendingApproval,
}) => {
  const colors = [
    { background: 'bg-[#E0E6F6]', text: 'text-[#446CC1]' },
    { background: 'bg-[#ECF8F4]', text: 'text-[#107054]' },
  ]
  // const colorIndex = 0
  const backgroundColor = colors[colorIndex]?.background
  const textColor = colors[colorIndex]?.text

  // 승인 대기 상태. (true: 승인 대기 중, false: 인증하기)
  // const isPendingApproval = true

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
        <div className="w-full h-[6px] bg-[#6679FF] block my-2" />

        <div className="flex items-start justify-between mb-4">
          {/* 격려 텍스트 */}
          <span className="font-medium text-xs text-[#777DF0]">
            조금 더 힘내세요!
          </span>

          {/* 참여율 퍼센트 텍스트 */}
          <span className="font-normal text-xs text-[#666]">참여율 84%</span>
        </div>

        {/* 하단 버튼 */}
        <div className="mt-auto flex items-center justify-end">
          <button className="font-normal text-sm text-[#888]">상세보기</button>
          {isPendingApproval ? (
            <button className="block w-[110px] rounded-md border border-[#AAA] h-[34px] font-medium text-base text-[#AAA] ml-5">
              승인 대기 중
            </button>
          ) : (
            <button className="block w-[110px] rounded-md h-[34px] font-medium text-base ml-5 bg-[#19CD72] text-white">
              인증하기
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default MissionCard
