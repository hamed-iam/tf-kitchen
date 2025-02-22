"use client";

import { LogOut, Eye } from "lucide-react";
import { Menu, Divider, Tag } from "antd";
import { useRouter, usePathname } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { logoutAsync } from "@/lib/features/auth/authSlice";
import { deleteCookie } from "cookies-next";
import React from "react";
import Image from "next/image";
import { menuItems } from "@/constants/MenuItems";

export default function Sidebar() {
  const dispatch = useAppDispatch();
  const { visibility } = useAppSelector((state) => state.settings);
  const router = useRouter();
  const pathname = usePathname();

  // Handle menu click events
  const handleMenuClick = ({ key }: { key: string }) => {
    if (key === "logout") {
      dispatch(logoutAsync())
        .unwrap()
        .then(() => {
          deleteCookie("token");
          router.push("/login");
        });
    }
  };

  return (
    <div className="flex h-full flex-col items-center">
      <div className="flex h-16 w-full items-center justify-between border-[0.5px] border-b-0 border-solid border-border-primary p-5">
        <div className="flex items-center gap-1.5">
          <Image
            src="/assets/logo.svg"
            alt="zagros gold"
            width={32}
            height={32}
            loading="eager"
          />
          <p className="m-0 text-2xl font-normal">زاگرس</p>
        </div>

        <Tag
          style={
            visibility
              ? { border: "1px solid #52C41A" }
              : { border: "1px solid red" }
          }
          color={visibility ? "#F6FFED" : "red"}
        >
          <div className="flex items-center gap-1">
            <Eye size={16} color={visibility ? "#52C41A" : "red"} />
            <span className={visibility ? "text-[#52C41A]" : "text-red-500"}>
              {visibility ? "آنلاین" : "آفلاین"}
            </span>
          </div>
        </Tag>
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
