import axios from 'axios'
import localStorageKey from '@/constants/localStorageKey'
import useLocalStorage from '@/hooks/useLocalStorage'

const AX = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 60000,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },

  validateStatus: function(status) {
    return status >= 200 && status < 500
  },
})

AX.interceptors.request.use(
  (config) => {
    const token = useLocalStorage().getLocalStorageData(localStorageKey.EVENT_TOKEN)
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  function(error) {
    return Promise.reject(error)
  },
)

AX.interceptors.response.use(
  (response) => {
    return response
  },
  function(error) {
    return Promise.reject(handleError(error))
  },
)

function handleError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.error(`response data: ${JSON.stringify(error.response.data)}`)
    console.error(
      `response status: ${error.response.statusText} (${error.response.status})`,
    )
    console.error(
      `response headers: ${JSON.stringify(error.response.headers)}`,
    )
  } else if (error.request) {
    console.error(`request: ${JSON.stringify(error.request)}`)
  } else {
    console.error(error.message)
  }
  console.error(JSON.stringify(error.config))
  return error
}

export default AX
