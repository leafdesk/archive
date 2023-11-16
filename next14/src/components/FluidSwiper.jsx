'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'

/**
 * 좌우 스와이퍼
 */
const FluidSwiper = ({ children, size, itemWidth, gap, padding }) => {
  const containerWidth =
    size * itemWidth + (size - 1) * gap * 4 + padding * 2 * 4 // gap도 props로 받아와서 반영해야 함.

  console.log(window?.innerWidth)

  // useMemo를 사용하면 리렌더링 시 함수 재호출이 없음. 의존성 배열 변동 시에만 재호출.
  const constraints = useMemo(() => {
    return {
      left: -(containerWidth - window?.innerWidth),
      right: 0,
    }
  }, [containerWidth])

  return (
    <motion.div
      drag="x"
      dragConstraints={constraints}
      className={`flex gap-2 h-full min-w-[${containerWidth}px]`}
    >
      {children}
    </motion.div>
  )
}

export default FluidSwiper
