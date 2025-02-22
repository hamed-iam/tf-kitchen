import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Providers from "@/lib/providers";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "./globals.css";
import { AntdConfigProvider } from "@/lib/AntdConfigProvider";

export const metadata: Metadata = {
  title: "Yakitori",
  description: "Yakitori By Tapsifood",
};

const vazirmatn = Vazirmatn({ subsets: ["arabic"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirmatn.className} antialiased`}>
        <AntdRegistry>
          <AntdConfigProvider>
            <Providers>{children}</Providers>
          </AntdConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
