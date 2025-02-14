import { Layout, Button } from "antd";

const { Header } = Layout;

export default function CustomHeader() {
  return (
    <Header className="flex justify-between items-center bg-white shadow px-6">
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
      <Button type="primary" danger>
        Logout
      </Button>
    </Header>
  );
}
