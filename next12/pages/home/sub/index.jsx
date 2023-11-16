import useClient from '@/hooks/useClient'
import { useNavigate } from 'react-router-dom'

export const HomeSubPage = () => {
  const navigate = useNavigate()
  const isMounted = useClient()

  return (
    <>
      {isMounted && (
        <>
          <strong>HomeSubPage</strong>
          <br />
          <button onClick={() => navigate('/home')}>&lt;</button>
        </>
      )}
    </>
  )
}

export default function HomeSubRedirect() {}

export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/home',
      permanent: false,
    },
  }
}
