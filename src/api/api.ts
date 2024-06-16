import AX from '@/api/apiConfig'
import { PostsResponse } from '@/api/types/post-response'

export const API = {
  join: (data: any) => AX.post(`/event-api/event/join`, data).then((res) => res),
  joinTest: () => AX.get(`/event-api/event/test`).then((res) => res),
  validateNickName: (nickname: string) =>
    AX.get(`/event-api/event/validate-nickname?nickname=${nickname}`).then(
      (res) => res,
    ),
  fetchTeamList: () => AX.get(`/event-api/event/teams`).then((res) => res),
  fetchPost: (params: any) => AX.get(`/event-api/event/post`, { params }).then((res) => res.data as PostsResponse),
}
