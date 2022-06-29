import { useRouter } from 'next/router';

const QuickMenuItem = ({ pathname, imgSrc, title }) => {
  const router = useRouter();

  return (
    <li
      // 메뉴를 클릭하면 pathname 페이지로 이동
      onClick={() => {
        router.push(pathname);
      }}
    >
      {/* 메뉴 아이콘 이미지 소스 & 대체 텍스트 */}
      <div className='img'>
        <img src={imgSrc} alt={title} />
      </div>

      {/* 메뉴 제목 */}
      <div className='txt'>{title}</div>
    </li>
  );
};

export default QuickMenuItem;
