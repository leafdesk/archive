import { withIronSessionApiRoute } from 'iron-session/next';

const cookieOptions = {
  cookieName: 'session',
  password: process.env.COOKIE_PASSWORD!,
};

const withApiSession = (fn: any) => {
  return withIronSessionApiRoute(fn, cookieOptions);
};

export { withApiSession };
