import { Input, List, Button, Space, Checkbox } from "antd";
import { CloseOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { addTodo } from "./store/todosReducer";
const App = () => {

  const initialTodos = useSelector((state) => state.todos.todos);
  console.log("initialTodos",initialTodos);
  const dispatch = useDispatch()

  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  const [dataList, setDataList] = useState(data);

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

    dispatch(addTodo())

    setDataList((prev) => {
      return [...prev, title];
    });
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleCheck = (index) => {
    console.log(index);
  };

  return (
    <>
      <Space
        direction="vertical"
        align="center"
        size="middle"
        style={{ display: "flex" }}
      >
        <Input.Group compact>
          <Input
            value={title}
            onChange={handleChangeTitle}
            style={{ width: "500px" }}
            defaultValue=""
          />

          <Button
            type="primary"
            loading={loadings[0]}
            onClick={(e) => enterLoading(e, 0)}
          >
            Submit
          </Button>
        </Input.Group>

        <List
          size="small"
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          dataSource={initialTodos}
          renderItem={(item, index) => {
            return (
              <List.Item>
                <Checkbox onChange={() => handleCheck(index)}>{item}</Checkbox>
                <Button
                type="danger"
                icon={<CloseOutlined />}
                loading={loadings[2]}
                onClick={() => enterLoading(2)}
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
