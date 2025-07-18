import type { Metadata } from "next";
import "./globals.css";
import HeaderLayout from "@/components/ui/HeaderLayout";
import ChannelIO from "@/components/ui/ChannelIO";

export const metadata: Metadata = {
  title: "제4회 GS그룹 해커톤 - Play with GenAI Season2",
  description: "모두의 PLAI, PLAI Everywhere! 바이브 코딩으로 쉽게 어디서나 PLAY!",
  keywords: ["GS그룹", "해커톤", "GenAI", "PLAI", "바이브코딩", "MISO"],
  icons: {
    icon: '/assets/GSLogo.png',
    apple: '/assets/GSLogo.png',
  },
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
      <body className="antialiased">
        <HeaderLayout />
        {children}
        <ChannelIO />
      </body>
    </html>
  );
}
