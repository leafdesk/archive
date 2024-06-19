'use client'

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
  const [isFocused, setIsFocused] = useState(false);
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
        setSuccessMessage('사용이 가능한 닉네임입니다.')
        setErrorMessage('')
      } else {
        setIsNicknameValid(false)
        setErrorMessage('사용이 불가능한 닉네임입니다.')
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
    <div className="flex flex-col items-center max-w-md mx-auto h-full min-h-screen w-[430px] relative">
      <div className="w-full flex justify-end absolute top-[5vh]">
        <div
          className="w-10 h-10 mr-2 bg-[url('/icons/close.svg')] bg-no-repeat cursor-pointer"
          onClick={() => router.push('/')}
        />
      </div>
      {step === 1 && (
        <div className="w-full flex flex-col items-center mt-[10vh]">
          <div className="mb-4">
            <div className="font-bold text-[30px] leading-[30px] tracking-[-0.03em] text-center mb-6">팀선택</div>
            <div
              className="w-[180px] h-[4.5vh] mx-auto mt-[36px]"
              style={{
                backgroundImage: 'url(\'/images/teamSelect.jpg\')',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="mt-[60px]">
            <div
              className="font-noto-sans-kr font-normal text-[18px] leading-[24px] tracking-[-0.03em] text-[#222222] text-center">
              팀을 선택해 주세요!
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6 justify-center">
              {teams.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleTeamSelection(index)}
                  className={`rounded-[16px] text-center border ${
                    team === index ? 'bg-[#F6FEF8] border-[#46AE78]' : 'bg-white border-[#DDDDDD]'
                  }`}
                  style={{
                    width: '194px',
                    height: '140px',
                    padding: '24px 46px',
                    gap: '14px',
                  }}
                >
                  <div
                    className="w-[60px] h-[60px] mx-auto"
                    style={{
                      backgroundImage: `url('${item.iconUrl}')`,
                      backgroundSize: 'contain',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center',
                    }}
                  ></div>
                  <span
                    className="block font-noto-sans-kr font-normal text-[18px] leading-[18px] tracking-[-0.03em] text-[#222222] mt-3">
                {item.name}
              </span>
                </button>
              ))}
            </div>
          </div>
          <div className="absolute bottom-[5vh] w-full flex justify-between px-4">
            <button
              onClick={() => router.push('/')}
              className="w-[111px] h-[60px] rounded-[8px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium bg-[#F5F5F5] text-[#666666]"
            >
              이전
            </button>
            <button
              onClick={() => setStep(2)}
              className={`w-[277px] h-[60px] rounded-[8px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium ${
                team !== -1 ? 'bg-[#31C678] text-[#FFFFFF]' : 'bg-[#F5F5F5] text-[#666666] cursor-not-allowed'
              }`}
              disabled={team === -1}
            >
              다음
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="w-full flex flex-col items-center mt-[10vh]">
          <div className="mb-4">
            <div className="font-bold text-[30px] leading-[30px] tracking-[-0.03em] text-center mb-6">기관 선택</div>
            <div
              className="w-[180px] h-[4.5vh] mx-auto mt-[36px]"
              style={{
                backgroundImage: 'url(\'/images/teamSelect2.jpg\')',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="mt-[60px]">
            <div
              className="font-noto-sans-kr font-normal text-[18px] leading-[24px] tracking-[-0.03em] text-[#222222] text-center">
              소속된 예배당(기관)을 선택해 주세요!
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-[9px] gap-y-[15px] mt-[35px] justify-center">
            {teams[team].ministries.map((church, index) => (
              <button
                key={index}
                onClick={() => setSelectedChurch(index)}
                className={`rounded-[8px] text-center border ${
                  selectedChurch === index ? 'bg-[#F6FEF8] border-[#46AE78]' : 'bg-white border-[#DDDDDD]'
                }`}
                style={{
                  width: '179px',
                  height: '54px',
                }}
              >
                <span
                  className="block font-noto-sans-kr font-normal text-[18px] leading-[18px] tracking-[-0.03em] text-[#222222]">
        {church}
      </span>
              </button>
            ))}
          </div>
          <div className="absolute bottom-[5vh] w-full flex justify-between px-4">
            <button
              onClick={() => setStep(1)}
              className="w-[111px] h-[60px] rounded-[8px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium bg-[#F5F5F5] text-[#666666]"
            >
              이전
            </button>
            <button
              onClick={() => setStep(3)}
              className={`w-[277px] h-[60px] rounded-[8px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium ${
                selectedChurch !== -1 ? 'bg-[#31C678] text-[#FFFFFF]' : 'bg-[#F5F5F5] text-[#666666] cursor-not-allowed'
              }`}
              disabled={selectedChurch === -1}
            >
              다음
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="w-full flex flex-col items-center mt-[10vh]">
          <div className="mb-4">
            <div className="font-bold text-[30px] leading-[30px] tracking-[-0.03em] text-center mb-6">닉네임</div>
            <div
              className="w-[180px] h-[4.5vh] mx-auto mt-[36px]"
              style={{
                backgroundImage: 'url(\'/images/teamSelect3.jpg\')',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
              }}
            ></div>
          </div>
          <div className="mt-[60px] w-full px-4">
            <div
              className="font-noto-sans-kr font-normal text-[18px] leading-[24px] tracking-[-0.03em] text-[#222222] text-center">
              닉네임을 설정해 주세요!
            </div>
            <div className="flex justify-center gap-2 mb-2 mt-6">
              <input
                type="text"
                value={nickname}
                onChange={(e) => {
                  handleNicknameChange(e)
                  setIsNicknameValid(false)
                }}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="border p-4 w-full max-w-[279px] h-[54px] rounded-lg placeholder-[#999999] placeholder-pretendard placeholder-font-normal placeholder-text-[18px] placeholder-leading-[18px] placeholder-tracking-[-0.03em]"
                style={{
                  borderColor: nickname || isFocused ? '#0DC1C1' : '#DDDDDD',
                  borderWidth: '1px',
                }}
                placeholder="닉네임을 입력해주세요"
              />
              <button
                onClick={nickname ? handleNicknameValidation : null}
                className={`w-[111px] h-[54px] rounded-[8px] font-normal text-[18px] leading-[18px] tracking-[-0.03em] ${
                  nickname ? 'bg-[#333333] text-[#FFFFFF]' : 'bg-[#AAAAAA] text-[#FFFFFF] cursor-not-allowed'
                }`}
                disabled={!nickname}
              >
                중복확인
              </button>
            </div>
            {(!errorMessage && !successMessage && nickname) && (
              <p
                className="font-nanum-gothic font-normal text-[14px] leading-[14px] tracking-[-0.03em] text-[#999999] mt-[14px]">
                중복확인을 해주세요.
              </p>
            )}
            {(!errorMessage && !successMessage && !nickname) && (
              <p
                className="font-nanum-gothic font-normal text-[14px] leading-[14px] tracking-[-0.03em] text-[#999999] mt-[14px]">
                최대 00자를 입력해주세요.
              </p>
            )}
            {errorMessage && (
              <p
                className="font-nanum-gothic font-normal text-[14px] leading-[14px] tracking-[-0.03em] text-[#F32F15] mt-[14px]">
                {errorMessage}
              </p>
            )}
            {successMessage && (
              <p
                className="font-nanum-gothic font-normal text-[14px] leading-[14px] tracking-[-0.03em] text-[#007AD3] mt-[14px]">
                {successMessage}
              </p>
            )}
          </div>
          <div className="absolute bottom-[5vh] w-full flex justify-between px-4">
            <button
              onClick={() => setStep(2)}
              className="w-[111px] h-[60px] rounded-[8px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium bg-[#F5F5F5] text-[#666666]"
            >
              이전
            </button>
            <button
              onClick={handleSubmit}
              className={`w-[277px] h-[60px] rounded-[8px] text-[20px] leading-[20px] tracking-[-0.03em] font-noto-sans-kr font-medium ${
                !isNicknameValid || isSubmitting ? 'bg-[#F5F5F5] text-[#666666] cursor-not-allowed' : 'bg-[#31C678] text-[#FFFFFF]'
              }`}
              disabled={!isNicknameValid || isSubmitting}
            >
              완료
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default EventJoin