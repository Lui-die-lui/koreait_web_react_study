/**@jsxImportSource @emotion/react*/
import Header from "../Header/Header";
import * as s from "./Styles";
// Main component를 자식 요소로 가져옴
function Layout({children}) {
	return (
		<div css={s.layout}>
			<div css={s.container}>
			<Header />
			{children}
			</div>
		</div>
	);
}

export default Layout;
