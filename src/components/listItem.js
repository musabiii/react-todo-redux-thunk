import React, { useState } from "react";
import { List, Button, Checkbox } from "antd";
import { useDispatch } from "react-redux";
import { removeTodo } from "../store/todosReducer";
import { CloseOutlined } from "@ant-design/icons";

export default function ListItem(item,index) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
console.log(item)
  const handleCheck = (index) => {
    console.log(index);
  };

  const handleRemove = (id) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      dispatch(removeTodo(id));
    }, 1000);
  };

  return (
    <List.Item>
      <Checkbox onChange={() => handleCheck(index)}>{item.item.title}</Checkbox>
      <Button
        type="danger"
        icon={<CloseOutlined />}
        loading={loading}
        onClick={() => handleRemove(item.item.id)}
      />
    </List.Item>
  );
}
