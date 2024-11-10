import type { Metadata } from "next";
import "./globals.css";
//@fontscource
// Supports weights 100-900
import "@fontsource-variable/roboto-slab";
import "@fontsource-variable/noto-sans";

export const metadata: Metadata = {
  title: "Pilgrims of Hope",
  description: "Find pilgrimage sites and trails near you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`antialiased text-lg bg-shale`}>{children}</body>
    </html>
  );
}
