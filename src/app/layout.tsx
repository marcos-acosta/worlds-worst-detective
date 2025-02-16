import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "@/fonts";

export const metadata: Metadata = {
  title: "World's Worst Detective",
  description: "A blog about ???",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}
