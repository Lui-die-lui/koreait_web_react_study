import { useEffect } from "react";

function LifeCycle({ count }) {
  console.log("렌더링 됨");
  useEffect(() => {
    // 렌더링의 결과
    console.log("마운트 됨");
    // 소멸 될 때 언마운트
    return () => {
      console.log("언마운트 됨");
    };
    // 빈배열 = 최초 마운트 한번 /
    // 안에 뭐가 있으면 해당 상태에서 마운트(count넣고 누르면 언마운트 - 마운트 반복됨)
    // ex 인스타 게시물 스크롤
  }, []);
  return (
    <div>
      <h4>자식 컴포넌트</h4>
      <p>부모가 준 숫자 : {count}</p>
    </div>
  );
}

export default LifeCycle;
