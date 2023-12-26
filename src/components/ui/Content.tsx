"use client";

import { Layout } from "antd";

const Contents = ({ children }: { children: React.ReactNode }) => {
  const { Content } = Layout;
  return (
    <Content style={{ height: "100vh" }}>
      <div
        style={{
          padding: 30,
          minHeight: 360,
          background: "colorBgContainer",
          borderRadius: "borderRadiusLG",
          color: "black",
          fontSize: "28px",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
