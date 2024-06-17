import type { Metadata } from "next";

import StoreProvider from "./StoreProvider";
import { IranSansFont } from "@/assets";

import "./globals.css";

export const metadata: Metadata = {
  title: "Movies",
  description: "A Simple Movie App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <StoreProvider>
        <body className={IranSansFont.className}>{children}</body>
      </StoreProvider>
    </html>
  );
}
