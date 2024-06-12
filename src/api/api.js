import AX from '@/api/apiConfig'

export const API = {
  join: (data) => AX.post(`/event-api/event/join`, data).then((res) => res),
  validateNickName: (nickname) => AX.get(`/event-api/event/validate-nickname`, { params: nickname }).then((res) => res),
}

