import { Layout, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "./../AuthPage/slice";

const { Header } = Layout;

export default function CustomHeader() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Header className="flex justify-between items-center bg-white shadow px-6 py-3">
      <h1 className="text-xl font-bold text-gray-800">Admin Dashboard</h1>
      <Button
        type="primary"
        danger
        icon={<LogoutOutlined />}
        onClick={handleLogout}
        size="large"
        className="hover:bg-red-600 transition-all duration-200"
      >
        Logout
      </Button>
    </Header>
  );
}
