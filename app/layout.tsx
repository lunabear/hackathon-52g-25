import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
        <script dangerouslySetInnerHTML={{
          __html: `
            (function(){var w=window;if(w.ChannelIO){return w.console.error("ChannelIO script included twice.");}var ch=function(){ch.c(arguments);};ch.q=[];ch.c=function(args){ch.q.push(args);};w.ChannelIO=ch;function l(){if(w.ChannelIOInitialized){return;}w.ChannelIOInitialized=true;var s=document.createElement("script");s.type="text/javascript";s.async=true;s.src="https://cdn.channel.io/plugin/ch-plugin-web.js";var x=document.getElementsByTagName("script")[0];if(x.parentNode){x.parentNode.insertBefore(s,x);}}if(document.readyState==="complete"){l();}else{w.addEventListener("DOMContentLoaded",l);w.addEventListener("load",l);}})();
            
            // 익명 사용자 ID 생성 또는 기존 ID 사용
            function getAnonymousUserId() {
              let userId = localStorage.getItem('channel_anonymous_user_id');
              if (!userId) {
                userId = 'anonymous_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
                localStorage.setItem('channel_anonymous_user_id', userId);
              }
              return userId;
            }
            
            ChannelIO('boot', {
              "pluginKey": "f9360e8f-b7cf-471d-bf18-a7684a08a510",
              "memberId": getAnonymousUserId(),
              "profile": {
                "name": "익명 사용자"
              }
            });
          `
        }} />
      </body>
    </html>
  );
}
