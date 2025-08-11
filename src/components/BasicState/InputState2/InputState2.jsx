import { useState } from "react";

function InputState2() {
  const [inputValue, setInputValue] = useState({
    t1: "",
    t2: "",
    t3: "",
  });

  const onChangeHandler = (e) => {
    // 변수에 들어온 값 보관
    const name = e.target.name;
    const value = e.target.value;

    // 이전에 있던건 그대로 / 새로운 값은 새로 set
    // 대괄호 쓰는 이유 : name이 가지고있는 값을 키로 쓰기위해 
    // -안쓰면 키 이름이 그냥 name이 됨
    const newInputValue = {
      ...inputValue,
      [name]: value,
    };
    // T : 객체 안에서 대괄호를 쓰면, 변수 안에 들어있는 문자열 값을 키로 사용할 수 있다.

    setInputValue(newInputValue);

  };

  // 이름을 붙여 관리 가능
  return (
    <div>
        <h1>{inputValue.t1}</h1>
        <h1>{inputValue.t2}</h1>
        <h1>{inputValue.t3}</h1>
      <input name="t1" type="text" onChange={onChangeHandler} />
      <input name="t2" type="text" onChange={onChangeHandler} />
      <input name="t3" type="text" onChange={onChangeHandler} />
    </div>
  );
}

export default InputState2;
