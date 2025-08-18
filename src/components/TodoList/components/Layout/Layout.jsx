/**@jsxImportSource @emotion/react*/
import Header from "../Header/Header";
import * as s from "./Styles";
// Main component를 자식 요소로 가져옴
// layout(화면 구성하는데 전체적인 틀)
// 안에서 css요소들 배열 - layout/header는 바뀌지 않기때문에
// but 안에 다른 요소는 바뀔 수 있음
function Layout({ children, filter, setFilter, setSearchText }) {
  return (
    <div css={s.layout}>
      <div css={s.container}>
        <Header
          filter={filter}
          setFilter={setFilter}
          setSearchText={setSearchText}
        />
        {children}
      </div>
    </div>
  );
}

export default Layout;
