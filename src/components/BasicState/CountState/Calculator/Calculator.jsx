import { useState } from "react";

function Calculator() {
  // setter 개념
  const [input, setInput] = useState("0");
  const [result, setResult] = useState(0);

  // 버튼을 눌렀을 때 value 값을 가져옴
  const onClickHandler = (e) => {
    const clickedValue = e.target.value;

    // input의 마지막 글자가 +,- 또는 연산기호 뒤에 0이 올때 입력을 막음
    const lastChar = input.charAt(input.length - 1);
    if ((lastChar === "+" || lastChar === "-") && clickedValue === "0") {
      return; // 추가없이 return - 함수 종료
    }

    // input에 들어온 연산기호 뒤에 또 연산기호가 들어오는것을 막음
    // 중복 연산자 입력 차단
    if (
      (lastChar === "+" || lastChar === "-") &&
      (clickedValue === "+" || clickedValue === "-")
    ) {
      return;
    }

    // 한글자 지우기 / 0번째 인덱스에서 -1 - 가장 뒤를 잘라냄
    if (clickedValue === "r") {
      setInput(input.slice(0, -1));

      return;
    }

    // = 값이 들어갔을때 연산을 해주고 input값을 0으로 세팅 시켜줌
    if (clickedValue === "=") {
      setResult(eval(input));
      setInput("0");
      return;
    }

    // useState"0"으로 했을때
    if (input === "0") {
      if (clickedValue === "+" || clickedValue === "-") {
        return;
      } else {
        setInput(clickedValue);
      }
    } else {
      setInput(input + clickedValue);
      // 최초로 클릭한걸로 갈아끼워짐
    }
  };

  return (
    <div>
      <h1>입력 : {input}</h1>
      <h1>결과 : {result}</h1>
      <div>
        <button onClick={onClickHandler} value={0}>
          0
        </button>
        <button onClick={onClickHandler} value={"r"}>
          ←
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={1}>
          1
        </button>
        <button onClick={onClickHandler} value={2}>
          2
        </button>
        <button onClick={onClickHandler} value={3}>
          3
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={4}>
          4
        </button>
        <button onClick={onClickHandler} value={5}>
          5
        </button>
        <button onClick={onClickHandler} value={6}>
          6
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={7}>
          7
        </button>
        <button onClick={onClickHandler} value={8}>
          8
        </button>
        <button onClick={onClickHandler} value={9}>
          9
        </button>
      </div>
      <div>
        <button onClick={onClickHandler} value={"+"}>
          +
        </button>
        <button onClick={onClickHandler} value={"-"}>
          -
        </button>
        <button onClick={onClickHandler} value={"="}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calculator;
