import type { Metadata } from "next";
import './globals.css'
import { DESCRIPTION } from "./const";
import Link from "next/link";

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
      <body className="m-0 overflow-y-scroll overflow-x-hidden bg-black-100">
        <header className="top-0 w-screen fixed h-[min(12vh)] px-[min(6vw)] z-20 flex items-center justify-between text-[min(3vw,24px)]">
          <button
            type="button"
            className="relative inline-flex items-center justify-start overflow-hidden font-ogg tracking-wider font-semibold"
            >
              <Link href="/" legacyBehavior>imarv</Link>
          </button>
          <div className="font-ogg text-[min(1.5vw)]">A</div>
        </header>
        {children}
      </body>
    </html>
  );
}
