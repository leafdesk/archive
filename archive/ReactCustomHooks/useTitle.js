import React, { useState, useEffect } from 'react';

// 초기값을 받아서 설정하고, setTitle 메소드를 제공
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);

  // html title 변경
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    htmlTitle.innerText = title;
  };

  // setTitle -> title state 변경 감지 -> updateTitle 실행
  useEffect(updateTitle, [title]);
  return setTitle;
};

export default function App() {
  // titleUpdater === setTitle
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 5000);

  return <></>;
}
