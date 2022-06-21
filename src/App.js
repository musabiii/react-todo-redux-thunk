import { Space } from "antd";
import { Col, Row } from 'antd';
import InputHeader from "./components/inputHeader";
import ListTodo from "./components/listTodo";
import { Layout } from "antd";
const { Content } = Layout;

const App = () => {
  return (
    <>
    <Row offset={6} style={{margin:10}}>
      <Col >
          {/* <Space
        direction="vertical"
        align="center"
        size="middle"
        style={{ display: "flex" }}
      > */}
          <InputHeader />
          <ListTodo />
      </Col>
    </Row>
          {/* </Space> */}
    </>
  );
};

export default App;
