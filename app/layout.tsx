import type { Metadata } from "next";
import "./globals.css";
import { openGraphImage } from "./shared-metadata";

//@fontscource -- Supports weights 100-900
import "@fontsource-variable/roboto-slab";
import "@fontsource-variable/noto-sans";

export const metadata: Metadata = {
  metadataBase: new URL("https://pilgrims-of-hope.vercel.app"),
  title: {
    default: "Pilgrims of Hope - Jubilee 2025 Resources",
    template: "%s | Pilgrims of Hope - Jubilee 2025 Resources",
  },
  description: "Jubilee 2025 resources for Australian pilgrims.",
  ...openGraphImage,
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Pilgrims of Hope | Guide to Jubilee 2025",
    description: "Australia&#39;s guide to the Jubilee 2025 pilgrimage sites.",
    url: "https://pilgrims-of-hope.vercel.app",
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
    <html lang="en" className="scroll-smooth scroll-pt-6">
      <body className={`antialiased bg-shale`}>{children}</body>
    </html>
  );
}
