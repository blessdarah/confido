import { Button, Col, Form, Input, Row, Typography } from "antd";
import React from "react";

const LoginPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("values: ", values);
  };

  return (
    <Row>
      <Col xs={0} md={14}>
        <img
          src="https://picsum.photos/1600/1400"
          alt="photo"
          style={{ maxWidth: "100%" }}
        />
      </Col>
      <Col
        xs={24}
        md={10}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: ".35rem" }}>
          <Typography.Title style={{ marginBottom: "-.2rem" }}>
            Login
          </Typography.Title>
          <Typography.Text>Login to access your dashboard</Typography.Text>
        </div>
        <Form
          style={{ width: "70%" }}
          onFinish={onFinish}
          form={form}
          layout="vertical"
          name="login-form"
        >
          <Form.Item
            label="Username"
            name="username"
            required
            rules={[{ required: true, message: "Username is required" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            required
            rules={[{ required: true, message: "Password is required" }]}
          >
            <Input type="password" />
          </Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
