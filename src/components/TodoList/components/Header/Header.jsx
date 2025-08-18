/**@jsxImportSource @emotion/react*/
import { IoSearch } from "react-icons/io5";
import * as s from "./Styles";
import { useState } from "react";

function Header({ filter, setFilter, setSearchText }) {
  const [searchInputValue, setSearchInputValue] = useState("");

  const searchInputOnChangeHandler = (e) => {
    setSearchInputValue(e.target.value);
  };

  const filterOnChangeHandler = (e) => {
    setFilter(e.target.id);
  };

  const searchButtonOnClickHandler = () => {
    setSearchText(searchInputValue);
  };

  return (
    <>
      <div css={s.container}>
        {/* input 상태값 바뀔때마다 searchInputOnChangeHandler */}
        <input
          type="text"
          css={s.searchInput}
          onChange={searchInputOnChangeHandler}
        />
        <button css={s.serchButton} onClick={searchButtonOnClickHandler}>
          <IoSearch />
        </button>
      </div>
      <div>
        <input
          type="radio"
          id="all"
          name="filter"
          checked={filter === "all"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="all">전체</label>
        <input
          type="radio"
          id="complete"
          name="filter"
          checked={filter === "complete"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="complete">완료</label>
        <input
          type="radio"
          id="incomplete"
          name="filter"
          checked={filter === "incomplete"}
          onChange={filterOnChangeHandler}
        />
        <label htmlFor="incomplete">미완료</label>
      </div>
    </>
  );
}

export default Header;
