// inputState3
// state3개
// 간단한 회원가입
// 이메일 형식에 맞게 입력해주세요 @
// 비밀번호는 8자 이상이어야합니다

import { useState, useEffect } from "react";

// 가입하기 버튼은 에러가 없어야 비활성화
function SignUp() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  // 유효성 검사
  useEffect(() => {
    // 빈 배열 만들어줌
    const newErrors = {};
    // 새로운 key value 형태로 들어감
    console.log("useEffect");
    console.log(formValues.email);
    if (!formValues.email.includes("@") && formValues.email.length > 0) {
      newErrors.email = "이메일 형식이 알맞지 않습니다.";
    }
    console.log(newErrors);

    if (formValues.password.length < 8 && formValues.password.length > 0) {
      newErrors.password = "비밀번호는 8자리 이상 설정해주세요.";
    }
    console.log(Object.keys(newErrors).length);

    if (
      // 에러가 나면 값이 늘어남
      // 버튼 활성화
      Object.keys(newErrors).length > 0 ||
      formValues.password.length < 8 ||
      !formValues.email.includes("@")
    ) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }

    setError(newErrors);
  }, [formValues]);

  const onChangeHandler = (e) => {
    // state input3 - 구조분해
    const { name, value } = e.target;
    // console.log(e.target.name); // email
    // console.log(e.target.value); // input 태그에 입력한 값
    // 이전상태 prev 가져오기 - input name 넣어줘야함
    setFormValues((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onClickHandler = () => {
    alert("회원가입이 완료되었습니다.");
  };

  return (
    <div>
      <h2>간단한 회원가입</h2>
      <div>
        <input
          type="email"
          name="email"
          placeholder="이메일"
          onChange={onChangeHandler}
        />
        <p>{error.email}</p>
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChangeHandler}
        />
        <p>{error.password}</p>
      </div>
      <div>
        {/* 활성화 확인 */}
        <button disabled={isDisabled} onClick={onClickHandler}>
          가입하기
        </button>
      </div>
    </div>
  );
}

export default SignUp;
