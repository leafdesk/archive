import { withIronSessionApiRoute } from 'iron-session/next';

// req.session에 member가 있다는 것을 알려주기 위함.
declare module 'iron-session' {
  interface IronSessionData {
    member?: {
      id: number;
    };
  }
}

const cookieOptions = {
  cookieName: 'session',
  password: process.env.COOKIE_PASSWORD!, // 암호화에 사용.
};

const withApiSession = (fn: any) => {
  return withIronSessionApiRoute(fn, cookieOptions);
};

export { withApiSession };
