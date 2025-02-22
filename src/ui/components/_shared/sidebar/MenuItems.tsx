import {
  Bell,
  CircleUserRound,
  HandCoins,
  History,
  LayoutDashboard,
  Shield,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import type { MenuProps } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

export const menuItems: MenuItem[] = [
  {
    key: "/",
    icon: <LayoutDashboard strokeWidth={1.5} />,
    label: <Link href="/">داشبورد</Link>,
  },
  {
    key: "/test-one",
    icon: <HandCoins strokeWidth={1.5} />,
    label: <Link href="/test-one">تست ۱</Link>,
  },
  {
    key: "/test-two",
    icon: <History strokeWidth={1.5} />,
    label: <Link href="/test-two">تست ۲</Link>,
  },
  {
    key: "/test-three",
    icon: <Bell strokeWidth={1.5} />,
    label: <Link href="/test-three">تست ۳</Link>,
  },
  {
    key: "/test-four",
    icon: <Shield strokeWidth={1.5} />,
    label: <Link href="/test-four">تست ۴</Link>,
  },
  {
    key: "/profile",
    icon: <CircleUserRound strokeWidth={1.5} />,
    label: <Link href="/profile">پروفایل</Link>,
  },
];
