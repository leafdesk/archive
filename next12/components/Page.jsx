import { motion, useAnimation } from 'framer-motion'
import { useRouter } from 'next/router'

const Page = ({ children }) => {
  const router = useRouter()
  const controls = useAnimation()

  const handleDrag = (event, info) => {
    const EDGE_WIDTH = 50

    console.log(event?.point)

    // if (event.point.x > EDGE_WIDTH) {
    //   controls.start({ x: 0, transition: { duration: 0.2 } })
    // }
  }

  const handleDragEnd = (event, info) => {
    const DRAG_THRESHOLD = window.innerWidth / 4
    const VELOCITY_THRESHOLD = 500

    if (
      info.offset.x > DRAG_THRESHOLD ||
      info.velocity.x > VELOCITY_THRESHOLD
    ) {
      controls
        .start({ x: '100%', transition: { duration: 0.2 } })
        .then(() => router.back())
    } else {
      controls.start({ x: 0, transition: { duration: 0.2 } })
    }
  }

  return (
    <motion.div
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}
      animate={controls}
      className="bg-[#fafafa]"
    >
      {children}
    </motion.div>
  )
}

export default Page
