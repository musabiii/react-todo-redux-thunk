import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "antd";
import ListItem from "./listItem";
import { getTodosAction } from "../store/actions/todoAction";

export default function ListTodo() {
  const initialTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  return (
    <List
      dataSource={initialTodos}
      renderItem={(item, index) => {
        return <ListItem item={item} index={index} />;
      }}
    />
  );
}
