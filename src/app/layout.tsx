import type { Metadata } from "next";
import { Alegreya } from "next/font/google";
import "./globals.css";

export const bodyFont = Alegreya({
  subsets: ["latin"],
  weight: ["400"],
});

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
