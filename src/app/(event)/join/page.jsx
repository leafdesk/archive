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
  const [team, setTeam] = useState(-1)
  const [teams, setTeams] = useState([])
  const [selectedChurch, setSelectedChurch] = useState(-1)
  const [nickname, setNickname] = useState('')
  const [isNicknameValid, setIsNicknameValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await API.fetchTeamList()
        const fetchedTeams = response.data.map(team => ({
          id: team.id,
          name: team.name,
          iconUrl: team.icon_url,
          ministries: team.ministries,
          target: team.target,
        }))
        setTeams(fetchedTeams)
      } catch (error) {
        console.error('Failed to fetch teams', error)
      }
    }
    fetchTeams()
  }, [])

  const handleTeamSelection = (selectedTeam) => {
    setTeam(selectedTeam)
    setSelectedChurch(-1)
  }

  const handleNicknameChange = (e) => {
    const value = e.target.value
    setNickname(value)
    setIsNicknameValid(value.length >= 2 && value.length <= 20)
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
        setErrorMessage('닉네임이 유효하지 않습니다. 다른 닉네임을 입력해주세요.')
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
    if (team === -1 || !nickname || !isNicknameValid) return

    setIsSubmitting(true)

    try {
      const response = await API.join({
        nickname,
        teamId: teams[team].id,
        ministry: teams[team].ministries[selectedChurch],
        agent: navigator.userAgent,
      })
      setLocalStorageData(localStorageKey.EVENT_TOKEN, response.data.token)
      router.push('/home')
    } catch (error) {
      console.error('why', error)
    } finally {
      setIsSubmitting(false)
    }
  }


  return (
    <div className="flex flex-col max-w-md mx-auto h-screen w-[360px]">
      <div className="w-full flex justify-end mb-4 mt-4">
        <div
          className="w-10 h-10 bg-[url('/icons/close.svg')] bg-no-repeat cursor-pointer"
          onClick={() => router.push('/')}
        />
      </div>
      {step === 1 && (
        <div className="w-full">
          <div className="mb-4">
            <div className="font-bold text-[30px] leading-[30px] tracking-[-0.03em] text-center mb-6">팀선택</div>
            <div
              className="w-[180px] h-[37px] mx-auto mt-4"
              style={{
                backgroundImage: 'url(\'/images/teamSelect.jpg\')',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="mt-12">
            <div className="font-noto-sans-kr font-bold text-[20px] leading-[20px] tracking-[-0.03em]">
              팀을 선택해 주세요!
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8 mt-4">
              {teams.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleTeamSelection(index)}
                  className="p-[24px] rounded-[16px] text-center bg-[#F3F1F4]"
                  style={{
                    width: '170px',
                    height: '160px',
                    gap: '14px',
                    border: team === index ? '2px solid #5B67F2' : '2px solid #F3F1F4',
                  }}
                >
                  <div
                    className="w-[82px] h-[82px] mx-auto"
                    style={{
                      backgroundImage: `url('${item.iconUrl}')`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <span
                    className="block font-bold text-[20px] leading-[20px] tracking-[-0.03em] mt-3">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => setStep(2)}
            className={`w-[358px] h-[60px] rounded-[16px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium mt-16 ${
              team !== -1 ? 'bg-[#5B67F2] text-[#FFFFFF]' : 'bg-[#EAE6E3] text-[#222222] cursor-not-allowed'
            }`}
            disabled={team === -1}
          >
            다음
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="w-full">
          <div className="mb-4">
            <div className="font-bold text-[30px] leading-[30px] tracking-[-0.03em] text-center mb-6">
              팀 확인
            </div>
            <div
              className="w-[180px] h-[37px] mx-auto mt-4"
              style={{
                backgroundImage: 'url(\'/images/teamSelect2.jpg\')',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="mt-12">
            <div className="font-noto-sans-kr font-bold text-[20px] leading-[24px] tracking-[-0.03em] text-left">
              <span className="text-[#5B67F2]">{teams[team].name}</span>을 선택하셨습니다!
            </div>
            <div className="font-noto-sans-kr font-medium text-[16px] leading-[16px] tracking-[-0.03em] text-left mt-2">
              성도님이 속하신 예배당(기관)을 선택해주세요!
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-8 mt-4">
            {teams[team].ministries.map((church, index) => (
              <button
                key={index}
                onClick={() => setSelectedChurch(index)}
                className="p-[24px] rounded-[16px] text-center bg-[#F3F1F4]"
                style={{
                  width: '170px',
                  height: '160px',
                  gap: '14px',
                  border: selectedChurch === index ? '2px solid #5B67F2' : '2px solid #F3F1F4',
                }}
              >
                <div className="w-[82px] h-[82px] mx-auto"></div>
                <span className="block font-bold text-[20px] leading-[20px] tracking-[-0.03em] mt-3">{church}</span>
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-16 gap-4">
            <button
              onClick={() => setStep(1)}
              className="w-[120px] h-[60px] rounded-[16px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium bg-[#EAE6E3] text-[#222222]"
            >
              이전
            </button>
            <button
              onClick={() => setStep(3)}
              className={`w-[228px] h-[60px] rounded-[16px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium ${
                selectedChurch !== -1 ? 'bg-[#5B67F2] text-[#FFFFFF]' : 'bg-[#EAE6E3] text-[#222222] cursor-not-allowed'
              }`}
              disabled={selectedChurch === -1}
            >
              다음
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="mb-4">
          <div className="font-bold text-[30px] leading-[30px] tracking-[-0.03em] text-center mb-6">
            닉네임 설정
          </div>
          <div
            className="w-[180px] h-[37px] mx-auto mt-4"
            style={{
              backgroundImage: 'url(\'/images/teamSelect3.jpg\')',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          ></div>
          <div className="mt-12">
            <div
              className="font-pretendard font-semibold text-[18px] leading-[18px] tracking-[-0.03em] text-[#222222] mb-2">
              닉네임
            </div>
            <div className="flex items-center gap-4 mb-2">
              <input
                type="text"
                value={nickname}
                onChange={(e) => {
                  handleNicknameChange(e)
                  setIsNicknameValid(false) // 닉네임 변경 시 유효성 상태 초기화
                }}
                className="border p-4 w-[246px] h-[46px] rounded-lg placeholder-[#999999] placeholder-pretendard placeholder-font-normal placeholder-text-[18px] placeholder-leading-[18px] placeholder-tracking-[-0.03em]"
                placeholder="닉네임을 입력해주세요"
              />
              <button
                onClick={handleNicknameValidation}
                className="w-[100px] h-[46px] rounded-[4px] bg-[#222222] text-[#FFFFFF] text-pretendard font-normal text-[18px] leading-[18px] tracking-[-0.03em]">
                중복확인
              </button>
            </div>
            {(!errorMessage && !successMessage) && <p
              className="font-nanum-gothic font-normal text-[14px] leading-[14px] tracking-[-0.03em] text-[#999999] mb-4">
              최대 20자를 입력해주세요.
            </p>}
            {errorMessage && <p
              className="font-nanum-gothic font-normal text-[14px] leading-[14px] tracking-[-0.03em] text-red-500 mb-4">{errorMessage}</p>}
            {successMessage && <p
              className="font-nanum-gothic font-normal text-[14px] leading-[14px] tracking-[-0.03em] text-[#5B67F2] mb-4">{successMessage}</p>}
            <div className="flex justify-between mt-32">
              <button onClick={() => setStep(2)}
                      className="w-[120px] h-[60px] rounded-[16px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium bg-[#EAE6E3] text-[#222222]">
                이전
              </button>
              <button
                onClick={handleSubmit}
                className={`w-[228px] h-[60px] rounded-[16px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium ${!isNicknameValid || isSubmitting ? 'bg-[#EAE6E3] text-[#222222] cursor-not-allowed' : 'bg-[#5B67F2] text-[#FFFFFF]'}`}
                disabled={!isNicknameValid || isSubmitting}>
                {isSubmitting ? '가입 중...' : '완료'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventJoin