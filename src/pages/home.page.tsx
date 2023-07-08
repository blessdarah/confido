import { Button, Space, Typography } from "antd";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/app-routes.constants";
import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

const items: MenuProps["items"] = [
  {
    label: <Link to={ROUTES.HOME}>Home</Link>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: "Browse",
    key: "app",
    icon: <AppstoreOutlined />,
  },
  {
    label: <Link to={ROUTES.AUTH.LOGIN}>Login</Link>,
    key: "login",
  },
  {
    label: (
      <Link to={ROUTES.AUTH.REGISTER}>
        <Button>Register</Button>
      </Link>
    ),
    key: "register",
  },
];

const HomePage: React.FC = () => {
  const [current, setCurrent] = useState("home");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };
  return (
    <>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
      <header style={{ textAlign: "center" }}>
        <Typography.Title>Confido</Typography.Title>
        <Space>
          <Link to={ROUTES.AUTH.LOGIN}>
            <Button type="primary">Login</Button>
          </Link>
          <Link to={ROUTES.AUTH.REGISTER}>
            <Button>Register</Button>
          </Link>
        </Space>
      </header>
    </>
  );
};

export default HomePage;
