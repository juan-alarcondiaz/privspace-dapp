import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { NextFont } from "next/dist/compiled/@next/font";

const montserrat: NextFont = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PrivSpace",
  description:
    "Secure, private and decentralized storage with blockchain technology.",
  applicationName: "PrivSpace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={montserrat.className}>
      <body className="bg-jaguar-950 px-6 pt-32">{children}</body>
    </html>
  );
}
