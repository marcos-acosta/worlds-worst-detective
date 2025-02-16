import type { Metadata } from "next";
import "./globals.css";
import { bodyFont } from "@/fonts";

export const metadata: Metadata = {
  title: "World's Worst Detective",
  description: "Part of the mystery is figuring out what this blog is about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="apple-mobile-web-app-title"
        content="World's Words Detective"
      />
      <body className={bodyFont.className}>{children}</body>
    </html>
  );
}
