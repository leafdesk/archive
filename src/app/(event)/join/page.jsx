'use client' // Next.js v14 에서 사용자 상호 작용을 위해 최상단 고정 필수.

import { useEffect, useState } from 'react'
import useLocalStorage from '@/hooks/useLocalStorage'
import localStorageKey from '@/constants/localStorageKey'
import { useRouter } from 'next/navigation'
import { API } from '@/api/api' // Next.js v14 에서는 next/router 대신 next/navigation 에서 useRouter 가져옴.

const EventJoin = () => {
  const router = useRouter()
  const { getLocalStorageData, setLocalStorageData } = useLocalStorage()
  const [step, setStep] = useState(1)
  const [team, setTeam] = useState('')
  const [nickname, setNickname] = useState('')
  const [isNicknameValid, setIsNicknameValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [deviceId, setDeviceId] = useState('')

  useEffect(() => {
    // deviceId가 없으면 생성하여 저장
    let storedDeviceId = getLocalStorageData(localStorageKey.DEVICE_ID)
    if (!storedDeviceId) {
      storedDeviceId = 'device-' + Date.now()
      setLocalStorageData(localStorageKey.DEVICE_ID, storedDeviceId)
    }
    setDeviceId(storedDeviceId)
  }, [])

  const handleTeamSelection = (selectedTeam) => {
    setTeam(selectedTeam)
  }

  const handleNicknameChange = (e) => {
    setNickname(e.target.value)
    setIsNicknameValid(false) // 닉네임이 변경되면 다시 검증 필요
    setSuccessMessage('')
    setErrorMessage('')
  }

  const handleNicknameValidation = async () => {
    try {
      const response = await API.validateNickName(nickname)
      if (response.status === 200) {
        setIsNicknameValid(true)
        setSuccessMessage('닉네임이 유효합니다.')
        setErrorMessage('')
      } else {
        setIsNicknameValid(false)
        setErrorMessage(
          '닉네임이 유효하지 않습니다. 다른 닉네임을 입력해주세요.',
        )
        setSuccessMessage('')
      }
    } catch (error) {
      console.error('Failed to validate nickname', error)
      setIsNicknameValid(false)
      setErrorMessage('닉네임 검증에 실패했습니다. 다시 시도해주세요.')
      setSuccessMessage('')
    }
  }

  const handleSubmit = async () => {
    if (!team || !nickname || !isNicknameValid) return

    setIsSubmitting(true)

    try {
      const response = await API.join({
        nickname,
        teamId: parseInt(team.replace('팀', '')),
        agent: navigator.userAgent,
        deviceId,
      })
      setLocalStorageData(localStorageKey.EVENT_TOKEN, response.data.token)
      router.push('/home')
    } catch (error) {
      console.error('Failed to join event', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      {step === 1 && (
        <div>
          <h2 className="text-xl font-bold mb-4">팀선택</h2>
          <div className="flex flex-wrap justify-center mb-4">
            <button
              onClick={() => handleTeamSelection('1팀')}
              className={`p-4 m-2 border rounded ${
                team === '1팀'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black border-gray-300'
              }`}
            >
              1팀
            </button>
            <button
              onClick={() => handleTeamSelection('2팀')}
              className={`p-4 m-2 border rounded ${
                team === '2팀'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black border-gray-300'
              }`}
            >
              2팀
            </button>
            <button
              onClick={() => handleTeamSelection('3팀')}
              className={`p-4 m-2 border rounded ${
                team === '3팀'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black border-gray-300'
              }`}
            >
              3팀
            </button>
            <button
              onClick={() => handleTeamSelection('4팀')}
              className={`p-4 m-2 border rounded ${
                team === '4팀'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-black border-gray-300'
              }`}
            >
              4팀
            </button>
          </div>
          <button
            onClick={() => setStep(2)}
            className={`px-4 py-2 rounded ${
              team
                ? 'bg-blue-500 text-white'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!team}
          >
            다음
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="text-xl font-bold mb-4">닉네임 설정</h2>
          <input
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            className="border p-2 mb-2 w-full"
            placeholder="닉네임을 입력해주세요"
          />
          <button
            onClick={handleNicknameValidation}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2"
          >
            인증하기
          </button>
          {errorMessage && <p className="text-red-500 mb-2">{errorMessage}</p>}
          {successMessage && (
            <p className="text-green-500 mb-2">{successMessage}</p>
          )}
          <div className="flex justify-between">
            <button
              onClick={() => setStep(1)}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              이전
            </button>
            <button
              onClick={handleSubmit}
              className="bg-blue-500 text-white px-4 py-2 rounded"
              disabled={!isNicknameValid || isSubmitting}
            >
              {isSubmitting ? '가입 중...' : '완료'}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventJoin
