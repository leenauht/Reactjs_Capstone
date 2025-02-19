import { useEffect } from "react";
import { Form, Input, Button, Select, notification, Card } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
  EditOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserInfo, updateUser, createUser, resetUserInfo } from "./slice";

const { Option } = Select;

export default function AddUserPage() {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { userInfo, loading } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (id) {
      dispatch(fetchUserInfo(id));
    }
    return () => dispatch(resetUserInfo());
  }, [dispatch, id]);

  useEffect(() => {
    if (userInfo) {
      form.setFieldsValue(userInfo);
    } else {
      form.resetFields();
    }
  }, [userInfo, form]);

  const handleSubmit = (values) => {
    const userData = { ...values, maNhom: "GP08" };

    console.log("🚀 ~ handleSubmit ~ userData:", userData);
    if (id) {
      dispatch(updateUser(userData))
        .unwrap()
        .then(() => {
          notification.success({
            message: "Cập nhật thành công!",
            placement: "bottomRight",
          });
          navigate("/admin/list-user");
        })
        .catch((error) => {
          notification.error({
            message: "Cập nhật thất bại!",
            description: error || "Có lỗi xảy ra!",
            placement: "bottomRight",
          });
        });
    } else {
      dispatch(createUser(userData))
        .unwrap()
        .then(() => {
          notification.success({
            message: "Thêm người dùng thành công!",
            placement: "bottomRight",
          });
          navigate("/admin/list-user");
        })
        .catch((error) => {
          notification.error({
            message: "Thêm người dùng thất bại!",
            description: error || "Có lỗi xảy ra!",
            placement: "bottomRight",
          });
        });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-5">
      <h2 className="text-left text-2xl font-bold  w-full pb-4">
        {id ? "Cập Nhật Người Dùng" : "Thêm Người Dùng"}
      </h2>
      <Card className="w-full max-w-lg shadow-xl rounded-lg bg-white ">
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ maLoaiNguoiDung: "KhachHang" }}
        >
          <Form.Item
            label={<span className="text-lg">Tài khoản</span>}
            name="taiKhoan"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Nhập tài khoản"
              className="text-lg"
              disabled={!!id}
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-lg">Mật khẩu</span>}
            name="matKhau"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập mật khẩu"
              className="text-lg"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-lg">Email</span>}
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Nhập email"
              className="text-lg"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-lg">Số điện thoại</span>}
            name="soDT"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              { pattern: /^[0-9]+$/, message: "Số điện thoại không hợp lệ!" },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Nhập số điện thoại"
              className="text-lg"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-lg">Họ tên</span>}
            name="hoTen"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input
              prefix={<EditOutlined />}
              placeholder="Nhập họ tên"
              className="text-lg"
            />
          </Form.Item>

          <Form.Item
            label={<span className="text-lg">Loại người dùng</span>}
            name="maLoaiNguoiDung"
          >
            <Select
              prefix={<UserSwitchOutlined />}
              className="text-lg"
              size="large"
            >
              <Option value="KhachHang">Khách Hàng</Option>
              <Option value="QuanTri">Quản Trị</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              className="text-lg py-5"
              loading={loading}
            >
              {id ? "Cập Nhật Người Dùng" : "Thêm Người Dùng"}
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
