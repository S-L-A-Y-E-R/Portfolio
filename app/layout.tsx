import type { Metadata } from "next";
import { roboto } from "@/components/ui/fonts";
import "@/styles/global.css";
import Navbar from "@/components/navbar";
import ToastProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <ToastProvider />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
