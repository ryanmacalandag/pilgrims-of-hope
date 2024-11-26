import type { Metadata } from "next";
import "./globals.css";
//@fontscource
// Supports weights 100-900
import "@fontsource-variable/roboto-slab";
import "@fontsource-variable/noto-sans";
import { openGraphImage } from "./shared-metadata";

export const metadata: Metadata = {
  metadataBase: new URL("https://pilgrimageofhope.catholic.au"),
  title: {
    default: "Pilgrims of Hope | Guide to Jubilee 2025",
    template: "%s - Jubilee 2025: Pilgrims of Hope",
  },
  description: "Australia's guide to the Jubilee 2025 pilgrimage sites.",
  ...openGraphImage,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pilgrims of Hope | Guide to Jubilee 2025",
    description: "Australia&#39;s guide to the Jubilee 2025 pilgrimage sites.",
    url: "https://pilgrimageofhope.catholic.au",
    siteName: "Pilgrimage of Hope",
    images: "/opengraph-image.jpg",
    type: "website",
  },
  manifest: "/site.webmanifest",
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
