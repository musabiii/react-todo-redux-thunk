import { Input, List, Button, Space } from "antd";
import { useState } from "react";


const App = () => {

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

    setDataList((prev) => prev.push(title));
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
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
          bordered
          dataSource={dataList}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </Space>
    </>
  );
};

export default App;
