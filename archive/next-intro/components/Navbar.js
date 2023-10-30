import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  // 현재 주소창의 루트를 알 수 있음
  const router = useRouter();

  return (
    <>
      <div>
        <img src='/vercel.svg' />
      </div>

      <nav>
        <Link href='/'>
          <a className={router.pathname === '/' ? 'active' : ''}>Home</a>
        </Link>

        <Link href='/archive/next-intro/pages/about'>
          <a className={router.pathname === '/about' ? 'active' : ''}>About</a>
        </Link>
      </nav>

      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          padding-top: 10px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.1) 0px 16px 24px -2px;
        }

        div {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 0 0;
        }

        img {
          max-width: 100px;
          margin-bottom: 5px;
        }

        nav a {
          font-weight: 600;
          font-size: 18px;
        }

        nav div {
          display: flex;
          gap: 10px;
        }

        .active {
          color: tomato;
        }
      `}</style>
    </>
  );
};

export default Navbar;
