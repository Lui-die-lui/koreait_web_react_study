/**@jsxImportSource @emotion/react*/
import { useState } from "react";
import * as s from "./Styles";
import { IoTrash } from "react-icons/io5";

function Main({ todoList, setTodoList }) {
  const [inputValue, setInputValue] = useState("");

  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  // 13번 키= 엔터 -> 엔터아니면 다 무시
  const onKeyDownHandler = (e) => {
    if (e.keyCode !== 13) {
      return;
    }
    if (inputValue.trim().length === 0) {
      return;
    }
    // console.log(inputValue, "등록");
    // 전에 있던 상태를 들고옴
    // 새로운 배열
    setTodoList((prev) => {
      // prev 배열 마지막 요소를 가지고 옴
      // prev.length - 1.id= 마지막 요소의 아이디를 가지고 옴
      const lastId = prev.length === 0 ? 0 : prev[prev.length - 1].id;
      const newTodo = {
        // 마지막 요소의 다음 번호로 넣어야 하기 때문에 +1
        id: lastId + 1,
        isComplete: false,
        content: inputValue,
      };
      return [...prev, newTodo];
    });
    // 초기화
    setInputValue("");
  };

  const checkBoxOnChangeHandler = (e) => {
    // 넣어놓은 todoid를 Int 값으로 변환 후 todoId 함수에 넣음
    const todoId = parseInt(e.target.value);

    setTodoList((prev) =>
      prev.map((todo) => {
        // todo id가 가져온 todo id와 같은지
        if (todo.id === todoId) {
          return {
            ...todo,
            // 클릭 했을때 true가 될 수 있도록
            isComplete: !todo.isComplete,
          };
        }
        // 바꾼것만 return
        return todo;
      })
    );
  };

  const deleteOnClickHandler = (todoId) => {
    // filter - todo 가져옴 - 아닌것 빼고 (삭제의 의미)
    setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  return (
    <div css={s.container}>
      <div css={s.listContainer}>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              {/* 고유 id 설정 */}
              <input
                type="checkbox"
                id={`todo${todo.id}`}
                value={todo.id}
                // 체크가 값을 따라감
                checked={todo.isComplete}
                onChange={checkBoxOnChangeHandler}
              />
              <label htmlFor={`todo${todo.id}`}></label>
              {/* 내용을 클릭해도 체크됨 */}
              <label htmlFor={`todo${todo.id}`}>{todo.content}</label>
              <div css={s.hiddenTrashBox}>
                {/* 매개변수 괄호있음 -> 바로 호출됨/ 화살표 함수(익명 함수) 사용해줘야함 */}
                <div
                  css={s.trashBox}
                  onClick={() => deleteOnClickHandler(todo.id)}
                >
                  <IoTrash />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div css={s.todoInputContainer}>
        <input
          type="text"
          placeholder="할 일을 입력하세요"
          value={inputValue}
          onChange={inputOnChangeHandler}
          onKeyDown={onKeyDownHandler}
        />
      </div>
    </div>
  );
}

export default Main;
