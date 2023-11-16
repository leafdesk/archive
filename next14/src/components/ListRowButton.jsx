import { motion } from 'framer-motion'

/**
 * 리스트 열 버튼.
 */
const ListRowButton = ({ children }) => {
  return (
    <motion.div
      // whileHover={{ scale: 0.95 }} // PC: 마우스 hover 시, MOBILE: Tap과 동일.
      whileTap={{ scale: 0.97 }} // Click(Touch) 후 holding 시.
    >
      <div className="w-full h-16 bg-gray-50 border-2 flex items-center rounded-3xl">
        {children}
      </div>
    </motion.div>
  )
}

export default ListRowButton
