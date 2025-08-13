/**@jsxImportSource @emotion/react*/
import * as s from "./Styles"; // js파일 가져옴

function Emotion2() {
  return (
    <div>
      <div css={s.box1}></div>
      <div css={s.box2("gray")}></div>
    </div>
  );
}

// 내보내기
export default Emotion2;
