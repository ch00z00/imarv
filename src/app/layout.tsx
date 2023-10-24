import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IndieFlix",
  description: "This is a film blog site dedicated to indie(independent) films.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <body className="m-0 overflow-hidden">{children}</body>
    </html>
  );
}
