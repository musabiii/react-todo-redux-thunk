import { Input, List, Button, Space, Checkbox } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo,removeTodo } from "./store/todosReducer";
import InputHeader from "./components/inputHeader";
const App = () => {
  const initialTodos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");

  const [loadings, setLoadings] = useState([]);

  const enterLoading = (e, index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);


  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCheck = (index) => {
    console.log(index);
  };

const handleSubmit=()=>{
  dispatch(addTodo(title));
  setTitle("");
}

const handleRemove=(id)=>{
  dispatch(removeTodo(id));
}

  return (
    <>
      <Space
        direction="vertical"
        align="center"
        size="middle"
        style={{ display: "flex" }}
      >

        <InputHeader/>

        <List
          dataSource={initialTodos}
          renderItem={(item, index) => {
            return (
              <List.Item>
                <Checkbox onChange={() => handleCheck(index)}>{item.title}</Checkbox>
                <Button
                  type="danger"
                  icon={<CloseOutlined />}
                  loading={loadings[2]}
                  onClick={()=>handleRemove(item.id)}
                />
              </List.Item>
            );
          }}
        />
      </Space>
    </>
  );
};

export default App;
