import { Layout } from "antd";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import Header from "./_component/CustomHeader";
import Sidebar from "./_component/Sidebar";

const { Content } = Layout;

export default function AdminTemPlate() {
  const { data } = useSelector((state) => state.authReducer);

  const isAuthenticated = useMemo(() => !!data, [data]);

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

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
