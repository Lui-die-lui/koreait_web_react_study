import { useState } from "react";
import Layout from "../Layout/Layout";
import Main from "../Main/Main";

function Index() {
  const [todoList, setTodoList] = useState([]);
  return (
    <Layout>
      <Main todoList={todoList} setTodoList={setTodoList} />
    </Layout>
  );
}

export default Index;
