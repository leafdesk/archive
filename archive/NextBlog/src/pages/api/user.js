import { userDetail } from 'constants/userDetail';

/**
 * 테스트용 데이터를 가져와서 클라이언트에 응답.
 */
export default function handler(req, res) {
  return res.status(200).json(userDetail);
}
