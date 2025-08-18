import { css } from "@emotion/react";

export const container = css`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const listContainer = css`
  flex-grow: 1;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  overflow: hidden;

  /* 자신의 자식 요소에 스타일 주는 법 */
  & > ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 424px;
    /* 스크롤 생김 */
    overflow-y: auto;

    & > li {
      position: relative;
      display: flex;
      box-sizing: border-box;
      padding: 10px 15px;
      border-bottom: 1px solid #dbdbdb;
      /* type이 checkbox인것 선택 */
      & > input[type="checkbox"] {
        display: none; // 기존 input을 가림

        // 틀을 잡음
        & + label {
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          border: 1px solid #dbdbdb;
          box-sizing: border-box;
          margin-right: 10px;
        }

        // 체크 되었을때 라벨의 가상요소를 만듦
        &:checked + label::after {
          display: block;
          content: "";
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background-color: #0b4f8f;
        }
      }
    }
  }
`;

export const todoInputContainer = css`
  margin-top: 10px;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  height: 40px;

  & > input {
    border: none;
    outline: none;
    box-sizing: border-box;
    padding: 5px 15px;
    width: 100%;
    height: 100%;
  }
`;

export const hiddenTrashBox = css`
  position: absolute;
  top: 0;
  right: 0;
  width: 46px;
  height: 46px;
  overflow: hidden;
  cursor: pointer;

   &:hover > div {
    right: 0;
   }
`;

export const trashBox = css`
transition: all 0.2s ease-in-out;
  position: absolute;
  top: 0;
  right: -46px;
  width: 46px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ea0808;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
