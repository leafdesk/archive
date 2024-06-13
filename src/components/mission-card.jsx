'use client'

/**
 * 미션 카드.
 */
const MissionCard = ({ number, title, rate }) => {
  return (
    <div>
      {/* 왼쪽: 미션 번호 */}
      <span>미션 1</span>

      {/* 오른쪽 */}
      <div>
        {/* 미션 제목 */}
        <strong>감독님을 향한 사랑의 편지 작성하기</strong>

        {/* 참여율 상태 바 */}

        {/* 격려 텍스트 */}
        <span>조금 더 힘내세요!</span>

        {/* 참여율 퍼센트 텍스트 */}
        <span>참여율 84%</span>

        {/* 하단 버튼 */}
        <div>
          <button>상세보기</button>
          <button>승인 대기 중 </button>
        </div>
      </div>
    </div>
  )
}

export default MissionCard
