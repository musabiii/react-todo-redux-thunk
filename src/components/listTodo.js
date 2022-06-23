import React from "react";
import { useSelector } from "react-redux";
import { List } from "antd";
import ListItem from "./listItem";

export default function ListTodo() {
  const initialTodos = useSelector((state) => state.todos.todos);

  return (
    <List
      dataSource={initialTodos}
      renderItem={(item, index) => {
        return <ListItem item={item} index={index} />;
      }}
    />
  );
}
