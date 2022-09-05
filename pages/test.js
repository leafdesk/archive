// pages/test.js 페이지

const testFunc = () => {
  console.log('testFunc');
  fetch('api/test/test', {
    method: 'POST',
    body: JSON.stringify({
      name: 'Lee',
      age: 23,
    }),
  });
};

export default function testPage() {
  return (
    <div>
      API TEST PAGE
      <button onClick={testFunc}>POST</button>
    </div>
  );
}
