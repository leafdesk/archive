// DOM 연결
const inputForm = document.querySelector('form.input-form');
const username = inputForm.username;
const text = inputForm.text;
const submitBtn = document.querySelector('button.submit');

// 문자열 상수
const STRING_LIST = 'list';

// 댓글 리스트
const commentList = [];

// 인풋 창 비우기
const clearInputForm = () => {
  username.value = '';
  text.value = '';
};

// Submit 버튼 클릭 시
submitBtn.onclick = (event) => {
  event.preventDefault();

  const comment = {
    key: Date.now(),
    username: username.value,
    text: text.value,
  };

  commentList.push(comment);
  localStorage.setItem(STRING_LIST, JSON.stringify(commentList));
  clearInputForm();

  console.log(commentList);
};
