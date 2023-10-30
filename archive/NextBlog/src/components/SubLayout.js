import Link from 'next/link';

/**
 * index.js 제외한 모든 페이지는 홈으로 돌아가는 버튼이 있는 SubLayout 적용.
 */
export default function SubLayout({ children }) {
  return (
    <>
      <h1>
        <Link href='/'>Home</Link>
      </h1>
      {children}
    </>
  );
}
