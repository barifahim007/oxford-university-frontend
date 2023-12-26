"use client";

import { USER_ROLE } from "@/constaints/role";
import { sidebarItems } from "@/constaints/sidebarItems";

import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import React, { useState } from "react";

type MenuItem = Required<MenuProps>["items"][number];

const { Sider } = Layout;

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  // dynamic sidebar
  const role = USER_ROLE.STUDENT;

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={280}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        left: 0,
        top: 0,
        bottom: 0,
        fontSize: "2rem",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: "1rem",
          marginTop: "1rem",
        }}
      >
        university of Oxford
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBar;
