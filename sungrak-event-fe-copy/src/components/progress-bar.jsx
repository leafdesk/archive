/**
 * 참여율 상태 바.
 *
 */
const ProgressBar = ({ rate }) => {
  return (
    // background
    <div className="w-full h-[6px] bg-[#F3F1F4] rounded-full my-2 relative overflow-hidden">
      {/* linear-gradient */}
      <div
        className="rounded-full w-full h-full block absolute top-0 left-0" // bg-[#6679FF]
        style={{
          background: 'linear-gradient(to right, #6679FF, #EBABDC)',
          width: `${rate}%`,
        }}
      >
        {/* 오른쪽 끝 점 */}
        <div className="rounded-full w-1 h-1 bg-[#D48BFF] absolute top-[1px] right-[2px]" />
      </div>
    </div>
  )
}

export default ProgressBar
