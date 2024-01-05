import React from "react";
import { Avatar, MenuProps } from "antd";
import { Button, Dropdown, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { userLogOut } from "@/service/auth.service";
import { authKey } from "@/constaints/token";
import { useRouter } from "next/navigation";

const Headers = () => {
  const router = useRouter();
  const logout = () => {
    userLogOut(authKey);
    router.push("/login");
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Button type="text" danger onClick={logout}>
          Logout
        </Button>
      ),
    },
  ];
  return (
    <Header
      style={{
        background: "#fff",
      }}
    >
      <Row justify="end" align="middle" style={{ height: "100%" }}>
        <Dropdown menu={{ items }}>
          <Link href="#">
            <Avatar
              size="small"
              icon={<UserOutlined />}
              style={{ backgroundColor: "#87d068" }}
            />
          </Link>
        </Dropdown>
      </Row>
    </Header>
  );
};

export default Headers;
