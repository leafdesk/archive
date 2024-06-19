'use client'

const ImageBadge = ({ text, color, bgColor }) => (
  <div
    className="w-[50px] h-[22px] flex justify-center items-center rounded-[8px] overflow-hidden"
    style={{ backgroundColor: bgColor }}
  >
    <div className="text-white font-medium text-sm" style={{ color: color }}>
      {text}
    </div>
  </div>
)

export default ImageBadge
