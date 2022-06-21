import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../store/todosReducer";
import { List, Button, Checkbox } from "antd";

export default function ListTodo() {
  const initialTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleCheck = (index) => {
    console.log(index);
  };

  const handleRemove = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <List
      dataSource={initialTodos}
      renderItem={(item, index) => {
        return (
          <List.Item>
            <Checkbox onChange={() => handleCheck(index)}>
              {item.title}
            </Checkbox>
            <Button
              type="danger"
              icon={<CloseOutlined />}
              loading={false}
              onClick={() => handleRemove(item.id)}
            />
          </List.Item>
        );
      }}
    />
  );
}
