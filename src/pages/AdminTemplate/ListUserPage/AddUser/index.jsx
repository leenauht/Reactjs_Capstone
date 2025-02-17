import { Form, Input, Button, Select, notification, Card } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import api from "../../../../services/api";

const { Option } = Select;

export default function AddUserPage() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    const userWithGroup = {
      ...values,
      maNhom: "GP08",
    };

    try {
      const result = await api.post(
        "/QuanLyNguoiDung/ThemNguoiDung",
        userWithGroup
      );

      notification.success({
        message: "Thêm người dùng thành công!",
        description: result.data.message,
        placement: "bottomRight",
      });

      form.resetFields();
    } catch (error) {
      notification.error({
        message: "Thêm người dùng thất bại!",
        description: error.response?.data?.content || "Có lỗi xảy ra!",
        placement: "bottomRight",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card
        title={
          <h2 style={{ textAlign: "left", fontSize: "24px" }}>
            Thêm Người Dùng
          </h2>
        }
        className="w-full max-w-lg"
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            maLoaiNguoiDung: "KhachHang",
          }}
        >
          <Form.Item
            label={<span style={{ fontSize: "16px" }}>Tài khoản</span>}
            name="taiKhoan"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Nhập tài khoản"
              style={{ fontSize: "16px" }}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontSize: "16px" }}>Mật khẩu</span>}
            name="matKhau"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Nhập mật khẩu"
              style={{ fontSize: "16px" }}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontSize: "16px" }}>Email</span>}
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder="Nhập email"
              style={{ fontSize: "16px" }}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontSize: "16px" }}>Số điện thoại</span>}
            name="soDt"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
              { pattern: /^[0-9]+$/, message: "Số điện thoại không hợp lệ!" },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder="Nhập số điện thoại"
              style={{ fontSize: "16px" }}
            />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontSize: "16px" }}>Họ tên</span>}
            name="hoTen"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input placeholder="Nhập họ tên" style={{ fontSize: "16px" }} />
          </Form.Item>

          <Form.Item
            label={<span style={{ fontSize: "16px" }}>Loại người dùng</span>}
            name="maLoaiNguoiDung"
          >
            <Select style={{ fontSize: "16px" }}>
              <Option value="KhachHang">Khách Hàng</Option>
              <Option value="QuanTri">Quản Trị</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{ fontSize: "16px" }}
            >
              Thêm Người Dùng
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
