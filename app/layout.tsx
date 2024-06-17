import type { Metadata } from "next";
import localFont from "next/font/local";
import StoreProvider from "./StoreProvider";
import "./globals.css";

const IranSansFont = localFont({
  src: [
    {
      path: "../assets/fonts/iransans-light.ttf",
      weight: "400",
      style: "light",
    },
    {
      path: "../assets/fonts/iransans-regular.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../assets/fonts/iransans-bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

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
