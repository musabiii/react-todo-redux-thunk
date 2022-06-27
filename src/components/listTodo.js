import React from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import ListItem from "./listItem";
import {getTodos} from "../utils/supabase"

export default function ListTodo() {
  const initialTodos = useSelector((state) => state.todos.todos);

  getTodos().then(res=>console.log(res))

  return (
    <List
      dataSource={initialTodos}
      renderItem={(item, index) => {
        return <ListItem item={item} index={index} />;
      }}
    />
  );
}
