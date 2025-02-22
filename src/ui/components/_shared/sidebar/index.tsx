"use client";

import { LogOut } from "lucide-react";
import { Menu, Divider } from "antd";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { menuItems } from "./MenuItems";

export default function Sidebar() {
  const pathname = usePathname();

  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "logout") {
    }
  };

  return (
    <div className="flex h-full flex-col items-center">
      <div className="border-border-primary flex h-16 w-full items-center justify-between border-[0.5px] border-b-0 border-solid p-5">
        <div className="flex items-center gap-1.5">
          <Image
            src="/assets/logo.svg"
            alt="ss"
            width={32}
            height={32}
            loading="eager"
          />
          <p className="m-0 text-2xl font-normal">تپسی‌فود</p>
        </div>
      </div>
      <Divider style={{ margin: 0 }} />

      <Menu
        onClick={handleMenuClick}
        style={{ width: 256, flex: 1 }}
        defaultSelectedKeys={["1"]}
        selectedKeys={[pathname]}
        mode="inline"
        items={menuItems}
      />

      <div className="w-full">
        <Divider style={{ margin: 0 }} />
        <Menu
          onClick={handleMenuClick}
          style={{ width: "100%" }}
          items={[
            {
              key: "logout",
              icon: <LogOut strokeWidth={1.5} />,
              label: "خروج از حساب",
            },
          ]}
        />
      </div>
    </div>
  );
}
