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
      <body className="m-0 bg-black-100">
        <header className="top-0 w-screen fixed h-[min(12vh)] text-yellow-200 px-[min(6vw)] z-20 flex items-center justify-between text-[min(1.5vw)]">
          <button
            type="button"
            className="relative inline-flex items-center justify-start overflow-hidden font-ogg tracking-wider font-semibold"
            >
              <Link href="/" legacyBehavior>imarv</Link>
          </button>
          <svg width="30" height="30" viewBox="0 0 45 45" fill="none" className="hover:rotate-[135deg] hover:scale-125 duration-[600ms]">
            <path className="fill-yellow-200" d="M18.25 26.805L22.535 45L26.79 26.775L45 22.525L26.765 18.23L22.51 0L18.215 18.255L0 22.545L18.25 26.805Z"></path>
          </svg>
        </header>
        {children}
      </body>
    </html>
  );
}
