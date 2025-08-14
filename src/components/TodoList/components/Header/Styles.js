import { css } from "@emotion/react";

export const container = css`
  width: 100%;
  height: 40px;
  display: flex;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  border-radius: 8px;
  /* 영역 넘어가는거 안보이게 해줌 */
  overflow: hidden;
`;

export const searchInput = css`
  border: none;
  outline: none;
  flex-grow: 1;
  padding: 5px 15px;
`;

export const serchButton = css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  padding: 5px 12px;
  border-radius: 8px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #dbdbdb;
  }
`;

export const filterContainer = css`
  padding: 10px 0px;
  
`;
