import { Button, Input } from "antd";
import React, { useState } from "react";
import {useSelector, useDispatch } from "react-redux";
import { addTodoAction } from "../store/actions/todoAction";

export default function InputHeader() {
  const [title, setTitle] = useState("");
  const loading = useSelector((state) => state.todos.loading);
  const dispatch = useDispatch();

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addTodoAction(title))
    .then(()=>{
      setTitle('')
    })
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <Input.Group compact>
      <Input
        value={title}
        onChange={handleChangeTitle}
        style={{ width: "300px" }}
        defaultValue=""
        onKeyDown={handleKeyDown}
      />

      <Button type="primary" loading={loading} onClick={handleSubmit}>
        Submit
      </Button>
    </Input.Group>
  );
}
