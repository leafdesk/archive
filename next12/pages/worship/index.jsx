import Navbar from '@/components/Navbar'
import { useRouter } from 'next/router'

const WorshipPage = () => {
  const router = useRouter()

  return (
    <>
      <button onClick={() => router.push('/worship/next')}>
        STACK NAV: GOTO NEXT PAGE
      </button>

      <Navbar />
    </>
  )
}

export default WorshipPage
