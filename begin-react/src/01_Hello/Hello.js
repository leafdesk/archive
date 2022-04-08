import React from 'react';

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {/* 조건부 렌더링, isSpecial === true 면 '*' 표시 */}
      {isSpecial && <b>*</b>}
      Hi, {name}
    </div>
  );
}

// props 기본값
Hello.defaultProps = {
  name: 'no name',
};

export default Hello;
