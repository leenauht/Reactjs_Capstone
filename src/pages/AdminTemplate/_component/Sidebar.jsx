import { Layout, Menu } from "antd";
import {
  UserOutlined,
  VideoCameraOutlined,
  ScheduleOutlined,
  UnorderedListOutlined,
  PlusOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Sider } = Layout;

export default function Sidebar() {
  const menuItems = [
    {
      key: "user",
      icon: <UserOutlined />,
      label: "Quản lý người dùng",
      children: [
        {
          key: "1",
          icon: <UnorderedListOutlined />,
          label: <Link to="/admin/list-user">Danh sách người dùng</Link>,
        },
        {
          key: "2",
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
          key: "3",
          icon: <UnorderedListOutlined />,
          label: <Link to="/admin/list-film">Danh sách phim</Link>,
        },
        {
          key: "4",
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
          key: "5",
          icon: <UnorderedListOutlined />,
          label: <Link to="/admin/list-showtime">Danh sách suất chiếu</Link>,
        },
        {
          key: "6",
          icon: <PlusOutlined />,
          label: <Link to="/admin/add-showtime">Thêm suất chiếu</Link>,
        },
      ],
    },
  ];

  return (
    <Sider theme="dark" collapsible width={250}>
      <div className="p-4 text-white text-center font-bold text-xl">Admin</div>
      <Menu theme="dark" mode="inline" items={menuItems} />
    </Sider>
  );
}
