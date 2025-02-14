import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./_component/CustomHeader";
import Sidebar from "./_component/Sidebar";

const { Content } = Layout;

export default function AdminTemPlate() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header />
        <Content
          style={{ margin: "16px", padding: "16px", background: "#fff" }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}
