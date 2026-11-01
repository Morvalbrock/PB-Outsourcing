import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "ClearPixelImages | Professional Photo & Visual Editing Services",
  description:
    "ClearPixelImages provides premium visual editing: Single Image, HDR, Day to Night, Twilight, Virtual Staging, Video Editing, Clipping Path, Item Removal, Wedding Photo Editing, and Aerial Drone enhancements.",
  metadataBase: new URL("https://clearpixelimages.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
