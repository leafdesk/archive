import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import useLocalStorage from './useLocalStorage'
import localStorageKey from '@/constants/localStorageKey'
import { API } from '@/api/api'

/**
 * 이벤트 데이터 사용.
 */
const useEventData = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const router = useRouter()
  const { getLocalStorageData } = useLocalStorage()

  /**
   * 이벤트 데이터 가져오기.
   */
  const fetchEventData = async () => {
    try {
      const response = await API.joinTest()
      if (response.status === 200) {
        setData(response.data)
      } else {
        setError('Failed to fetch event data.')
      }
    } catch (error) {
      console.error('Error fetching event data:', error)
      setError('Failed to fetch event data.')
    } finally {
      setLoading(false)
    }
  }

  /**
   * 유저 토큰 검사.
   */
  useEffect(() => {
    if (!getLocalStorageData(localStorageKey.EVENT_TOKEN)) {
      router.push('/join')
      return
    }
    fetchEventData()
  }, [router, getLocalStorageData])

  return { data, setData, loading, setLoading, error, setError }
}

export default useEventData
