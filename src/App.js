import InputHeader from "./components/inputHeader";
import ListTodo from "./components/listTodo";
import { Layout } from "antd";
const { Content } = Layout;

const App = () => {
  return (
    <>
      <div
        style={{ margin: "10px auto", width: "400px", textAlign: "center" }}
      >
        <InputHeader />
        <ListTodo />
      </div>
    </>
  );
};

export default App;
