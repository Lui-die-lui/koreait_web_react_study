// inputState3
// state3개
// 간단한 회원가입
// 이메일 형식에 맞게 입력해주세요 @
// 비밀번호는 8자 이상이어야합니다

import { useState } from "react";

// 가입하기 버튼은 에러가 없어야 비활성화
function SignUp() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({});
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div>
      <h2>간단한회원가입</h2>
      <div>
        <input type="email" />
      </div>
      <div>
        <input type="password" />
      </div>
      <div>
        <button>가입하기</button>
      </div>
    </div>
  );
}

export default SignUp;
