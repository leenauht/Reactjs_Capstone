import { Layout, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { logout } from "./../AuthPage/slice";

const { Header } = Layout;

export default function CustomHeader() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Header className="flex justify-end items-center bg-white shadow-md px-6 py-3">
      <Button
        type="primary"
        danger
        icon={<LogoutOutlined />}
        onClick={handleLogout}
        size="large"
        className="hover:bg-red-600 transition-all duration-200 text-white"
      >
        Đăng xuất
      </Button>
    </Header>
  );
}
