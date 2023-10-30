import React from 'react';

// App.js 에서 다음과 같이 사용

// const _arr = [
//   {
//     key: 1,
//     content: 'a',
//   },
//   {
//     key: 2,
//     content: 'b',
//   },
//   {
//     key: 3,
//     content: 'c',
//   },
// ];

{
  /* <List array={_arr} /> */
}

const Item = ({ element }) => {
  return (
    <div>
      {element.id}, {element.content}
    </div>
  );
};

const List = ({ array }) => {
  return (
    <div>
      {array.map((_elem) => (
        <Item element={_elem} key={_elem.id} />
      ))}
    </div>
  );
};

export default List;
