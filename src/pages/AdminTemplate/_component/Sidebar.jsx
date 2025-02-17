import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const menuItems = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: <Link to="/admin/list-user">Quản lý người dùng</Link>,
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: <Link to="/admin/list-film">Quản lý phim</Link>,
    },
    {
      key: "3",
      icon: <ScheduleOutlined />,
      label: <Link to="/admin/show-time">Quản lý suất chiếu</Link>,
    },
  ];

  return (
    <Sider theme="dark" collapsible>
      <div className="p-4 text-white text-center font-bold text-xl">Admin</div>
      <Menu theme="dark" mode="inline" items={menuItems} />
    </Sider>
  );
}
