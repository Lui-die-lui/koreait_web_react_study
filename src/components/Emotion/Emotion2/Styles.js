import { css } from "@emotion/react";

export const box1 = css`
  width: 100px;
  height: 100px;
  background-color: black;
`;

export const box2 = (color) => css`
  width: 100px;
  height: 100px;
  background-color: ${color};
`;

//js / jsx 하나 세트(컴포넌트)로 생각하면 됨