import { BrowserRouter } from 'react-router-dom'

const Router = ({ children }) => {
  if (typeof window == 'undefined') {
    return null
  }
  return <BrowserRouter>{children}</BrowserRouter>
}

export default Router
