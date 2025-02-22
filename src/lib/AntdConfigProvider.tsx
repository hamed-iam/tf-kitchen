"use client";

import { ConfigProvider } from "antd";

export function AntdConfigProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "inherit",
          colorPrimary: "#FF5900",
        },
        cssVar: true,
        hashed: false,
        components: {
          Button: {},
          Input: {},
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
