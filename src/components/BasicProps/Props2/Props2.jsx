function Props2({ a, b, ...나머지 }) {
  console.log(나머지); // c, d 값이 나머지라는 변수에 묶여서 들어감
  // 받을때 부터 비구조 할당 바로해줌
  return (
    <div>
      <p>{a}</p>
      <p>{b}</p>
    </div>
  );
}

export default Props2;
