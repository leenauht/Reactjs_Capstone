import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  return (
    <Sider theme="dark" collapsible>
      <div className="logo p-4 text-white text-center font-bold">Admin</div>
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/admin/list-user">Quản lý người dùng</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/admin/list-film">Quản lý phim</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<ScheduleOutlined />}>
          <Link to="/admin/show-time">Quản lý suất chiếu</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
}
