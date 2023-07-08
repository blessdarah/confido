import { Button, Card, Col, Form, Input, Row, Typography } from "antd";
import React from "react";

const RegisterPage: React.FC = () => {
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
          // flexFlow: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: ".35rem" }}>
          <Typography.Title style={{ marginBottom: "-.2rem" }}>
            Create account
          </Typography.Title>
          <Typography.Text>It's easy to get started</Typography.Text>
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
            label="Email"
            name="Email;"
            required
            rules={[{ required: true, message: "Email is required" }]}
          >
            <Input type="email" />
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
            Register
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default RegisterPage;
