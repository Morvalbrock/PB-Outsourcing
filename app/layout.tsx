import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "PB Outsourcing | Real Estate Photo Editing",
  description:
    "Real estate photo editing, HDR enhancement, day-to-night conversion, virtual staging, floor plans and property video editing.",
  metadataBase: new URL("https://example.com"),
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
