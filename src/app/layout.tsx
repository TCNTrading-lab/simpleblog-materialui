import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { THEME_DEFAULT } from "@/config/app.config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ta Chi Nguyen - Blog",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={THEME_DEFAULT + " bg-bg-primary"}>{children}</body>
    </html>
  );
}
