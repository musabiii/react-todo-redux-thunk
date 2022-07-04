import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List,Spin,Space } from "antd";
import ListItem from "./listItem";
import { getTodosAction } from "../store/actions/todoAction";

export default function ListTodo() {
  const initialTodos = useSelector((state) => state.todos.todos);
  const loadingList = useSelector((state) => state.todos.loadingList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodosAction());
  }, []);

  if (loadingList) {
    return  <Space><Spin size="large" /></Space>}

  return (
    <List
      dataSource={initialTodos}
      renderItem={(item, index) => {
        return <ListItem item={item} index={index} />;
      }}
    />
  );
}
