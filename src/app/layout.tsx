import type { Metadata } from "next";
import './globals.css'
import { DESCRIPTION } from "./const";

export const metadata: Metadata = {
  title: "imarv",
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600&family=Syne:wght@800&family=Zen+Old+Mincho:wght@500;900&display=swap" rel="stylesheet" />
      </head>
      <body className="m-0 overflow-y-scroll overflow-x-hidden bg-black-100">{children}</body>
    </html>
  );
}
