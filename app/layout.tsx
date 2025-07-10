import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingFAB from "@/components/ui/FloatingFAB";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "제4회 GS그룹 해커톤 - Play with GenAI Season2",
  description: "모두의 PLAI, PLAI Everywhere! 바이브 코딩으로 쉽게 어디서나 PLAY!",
  keywords: ["GS그룹", "해커톤", "GenAI", "PLAI", "바이브코딩", "MISO"],
  openGraph: {
    title: "제4회 GS그룹 해커톤 - Play with GenAI Season2",
    description: "모두의 PLAI, PLAI Everywhere! 바이브 코딩으로 쉽게 어디서나 PLAY!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingFAB />
      </body>
    </html>
  );
}
