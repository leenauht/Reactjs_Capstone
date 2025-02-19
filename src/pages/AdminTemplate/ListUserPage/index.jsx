import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Input, Popconfirm, message } from "antd";
import {
  SearchOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { actGetListUser, deleteUser } from "./slice";

export default function ListUserPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading } = useSelector((state) => state.listUserReducer);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    dispatch(actGetListUser());
  }, [dispatch]);

  const filteredData = data?.filter((user) =>
    [user.taiKhoan, user.hoTen, user.email].some((field) =>
      field.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  const handleDelete = (id) => {
    dispatch(deleteUser(id))
      .unwrap()
      .then(() => message.success("Xóa người dùng thành công!"))
      .catch(() => message.error("Xóa thất bại!"));
  };

  const columns = [
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Số ĐT",
      dataIndex: "soDT",
      key: "soDT",
    },
    {
      title: "Loại",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => (
        <span
          className={`font-bold ${
            text === "Khách Hàng" ? "text-green-500" : "text-red-500"
          }`}
        >
          {text}
        </span>
      ),
    },
    {
      title: "Hành động",
      key: "action",
      align: "center",
      render: (_, record) => (
        <div className="flex justify-center items-center gap-3">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => navigate(`/admin/edit-user/${record.taiKhoan}`)}
          />
          <Popconfirm
            title="Bạn có chắc muốn xóa?"
            onConfirm={() => handleDelete(record.taiKhoan)}
            okText="Có"
            cancelText="Không"
          >
            <Button danger icon={<DeleteOutlined />} />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">Danh Sách Người Dùng</h2>

      <div className="flex justify-between items-center mb-6">
        <Input
          prefix={<SearchOutlined />}
          placeholder="Tìm kiếm người dùng..."
          size="large"
          className="w-1/2 py-3 px-5 text-lg"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          size="large"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-6 rounded-lg"
          onClick={() => navigate("/admin/add-user")}
        >
          Thêm Người Dùng
        </Button>
      </div>

      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="taiKhoan"
        loading={loading}
        bordered
        size="large"
        scroll={{ x: "max-content" }}
      />
    </div>
  );
}
