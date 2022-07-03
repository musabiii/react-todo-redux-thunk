import React, { useState } from "react";
import { List, Button, Checkbox } from "antd";
import { useDispatch,useSelector } from "react-redux";
import { removeTodo } from "../store/todosReducer";
import { CloseOutlined } from "@ant-design/icons";
import { deleteTodoAction } from "../store/actions/todoAction";

export default function ListItem(item,index) {
  const dispatch = useDispatch();
  const loadingDelete = useSelector((state) => state.todos.loadingDelete);


  const handleCheck = (index) => {
    console.log(index);
  };

  const handleRemove = (id) => {
      dispatch(deleteTodoAction(id));
  };

  return (
    <List.Item>
      <Checkbox onChange={() => handleCheck(index)}>{item.item.title}</Checkbox>
      <Button
        type="danger"
        icon={<CloseOutlined />}
        loading={item.item.id===loadingDelete}
        onClick={() => handleRemove(item.item.id)}
      />
    </List.Item>
  );
}
