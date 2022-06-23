import { Button, Input } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todosReducer";

export default function InputHeader() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const dispatch = useDispatch();

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(addTodo(title));
      setLoading(false);
      setTitle("");
    }, 1000);
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
