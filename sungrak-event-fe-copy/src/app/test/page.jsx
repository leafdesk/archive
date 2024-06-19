'use client'

import { API } from '@/api/api'

const TestPage = () => {
  const joinData = {
    nickname: 'nick3', // DB에 이미 사용 중인 닉네임은 사용 불가.
    team_id: 1, // team 과 ministry 가 매칭되어야 함. [예: 1-신도림]
    agent: 'agent3',
    ministry: '신도림', // 유효한 ministry 입력. Enum 중 하나. [구리, 강남, 금천, 강서, 신도림, 강북, 군산, 센터, 동작]
  }

  return (
    <div className="p-5">
      <h3 className="block mb-4">Event API 테스트</h3>

      {/* Join */}
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={() =>
          API.join(joinData).then((response) =>
            console.log('🚀 ~ TestPage ~ response:', response),
          )
        }
      >
        POST Join API
      </button>
      <br />
    </div>
  )
}

export default TestPage
