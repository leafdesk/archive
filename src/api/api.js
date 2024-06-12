import AX from '@/api/apiConfig'

export const API = {
  join: (data) => AX.post(`/event-api/event/join`, data).then((res) => res),
  joinTest: () => AX.get(`/event-api/event/test`).then((res) => res),
  validateNickName: (nickname) => AX.get(`/event-api/event/validate-nickname?nickname=${nickname}`).then((res) => res),
  fetchTeamList: () => AX.get(`/event-api/event/teams`).then((res) => res),
}

