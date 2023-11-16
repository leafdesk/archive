import { Route, Routes, useNavigate } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import { HomeSubPage } from '@/pages/home/sub'
import Router from '@/components/Router'
import useClient from '@/hooks/useClient'

export const HomePage = () => {
  const navigate = useNavigate()
  const isMounted = useClient()

  return (
    <>
      {isMounted && (
        <>
          <strong>HomePage</strong>
          <br />
          <button onClick={() => navigate('/home/sub')}>
            Link to HomeSubPage
          </button>
          <Navbar />
        </>
      )}
    </>
  )
}

const HomeNavigator = () => {
  return (
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/sub" element={<HomeSubPage />} />
    </Routes>
  )
}

const HomeRouter = () => {
  return (
    <Router>
      <HomeNavigator />
    </Router>
  )
}

export default HomeRouter
