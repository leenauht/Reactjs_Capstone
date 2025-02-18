import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  ScheduleOutlined,
  UnorderedListOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { useLocation, Link } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      key: "user",
      icon: <UserOutlined />,
      label: "Quản lý người dùng",
      children: [
        {
          key: "/admin/list-user",
          icon: <UnorderedListOutlined />,
          label: <Link to="/admin/list-user">Danh sách người dùng</Link>,
        },
        {
          key: "/admin/add-user",
          icon: <PlusOutlined />,
          label: <Link to="/admin/add-user">Thêm người dùng</Link>,
        },
      ],
    },
    {
      key: "film",
      icon: <VideoCameraOutlined />,
      label: "Quản lý phim",
      children: [
        {
          key: "/admin/list-film",
          icon: <UnorderedListOutlined />,
          label: <Link to="/admin/list-film">Danh sách phim</Link>,
        },
        {
          key: "/admin/add-film",
          icon: <PlusOutlined />,
          label: <Link to="/admin/add-film">Thêm phim</Link>,
        },
      ],
    },
    {
      key: "showtime",
      icon: <ScheduleOutlined />,
      label: "Quản lý suất chiếu",
      children: [
        {
          key: "/admin/list-showtime",
          icon: <UnorderedListOutlined />,
          label: <Link to="/admin/list-showtime">Danh sách suất chiếu</Link>,
        },
        {
          key: "/admin/add-showtime",
          icon: <PlusOutlined />,
          label: <Link to="/admin/add-showtime">Thêm suất chiếu</Link>,
        },
      ],
    },
  ];

  return (
    <Sider theme="dark" collapsible width={250}>
      <div className="p-4 text-white text-center font-bold text-xl">Admin</div>
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[location.pathname]}
        items={menuItems}
      />
    </Sider>
  );
}
