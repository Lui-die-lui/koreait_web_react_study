import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";

// 원영님 방법 나중에 함 보기
function Index() {
  const [todoList, setTodoList] = useState([]);
  const [filter, setFilter] = useState("incomplete");
  const [searchText, setSearchText] = useState("");

  // 미리 set을 해놔야함

  // 최초에 localstorage=[] / 내 상태=[]
  useEffect(() => {
    let localStorageTodoList = localStorage.getItem("todoList");
    if (!localStorageTodoList) {
      localStorage.setItem("todoList", JSON.stringify([]));
      localStorageTodoList = [];
      setTodoList(localStorageTodoList);
    } else {
      setTodoList(JSON.parse(localStorageTodoList));
    }
  }, []);

  useEffect(() => {
    let localstorageTodoList = localStorage.getItem("todoList");
    // 상태를 변경한 list
    const todoListJson = JSON.stringify(todoList);
    // 이미 저장된 todoList랑 비교해서 변경(다름)이 되었으면
    // localstorage에 set함 -> 클릭시 true / 풀면 false
    if (localstorageTodoList !== todoListJson) {
      // 초기화 된 빈 상태를 체크하게 됨
      localStorage.setItem("todoList", todoListJson);
    }
  }, [todoList]);

  // 먼저 전체 다 들고옴
  const filterTodoList = todoList
    .filter((todo) => {
      if (filter === "all") {
        return true;
        // true가 들어있는 iscomplete만
      } else if (filter === "complete") {
        return todo.isComplete;
      } else if (filter === "incomplete") {
        return !todo.isComplete;
      }
    })
    .filter((todo) => {
      if (searchText.trim().length === 0) {
        return true;
      }
      return todo.content.includes(searchText);
    });

  return (
    <Layout filter={filter} setFilter={setFilter} setSearchText={setSearchText}>
      <Main todoList={filterTodoList} setTodoList={setTodoList} />
    </Layout>
  );
}

export default Index;
