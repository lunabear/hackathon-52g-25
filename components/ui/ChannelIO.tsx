'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ChannelIO() {
  const pathname = usePathname()
  
  useEffect(() => {
    // 페이지가 바뀔 때마다 즉시 처리
    if (pathname !== '/') {
      // 메인 페이지가 아니면 즉시 숨김
      if ((window as any).ChannelIO) {
        (window as any).ChannelIO('hideChannelButton');
        // DOM에서 강제로 제거
        setTimeout(() => {
          const channelButton = document.querySelector('#ch-plugin-launcher');
          const channelMessenger = document.querySelector('#ch-plugin');
          if (channelButton) {
            (channelButton as HTMLElement).style.display = 'none';
          }
          if (channelMessenger) {
            (channelMessenger as HTMLElement).style.display = 'none';
          }
        }, 100);
      }
      return;
    }

    // 메인 페이지인 경우
    if ((window as any).ChannelIO) {
      // 이미 로드되어 있으면 show
      (window as any).ChannelIO('showChannelButton');
      // DOM에서 다시 표시
      setTimeout(() => {
        const channelButton = document.querySelector('#ch-plugin-launcher');
        const channelMessenger = document.querySelector('#ch-plugin');
        if (channelButton) {
          (channelButton as HTMLElement).style.display = 'block';
        }
        if (channelMessenger) {
          (channelMessenger as HTMLElement).style.display = 'block';
        }
      }, 100);
      return;
    }

    // 처음 로드하는 경우
    const loadChannelIO = () => {
      (function() {
        var w = window as any;
        if (w.ChannelIO) {
          return;
        }
        var ch = function() {
          ch.c(arguments);
        };
        ch.q = [];
        ch.c = function(args: any) {
          ch.q.push(args);
        };
        w.ChannelIO = ch;
        function l() {
          if (w.ChannelIOInitialized) {
            return;
          }
          w.ChannelIOInitialized = true;
          var s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
          var x = document.getElementsByTagName("script")[0];
          if (x.parentNode) {
            x.parentNode.insertBefore(s, x);
          }
        }
        if (document.readyState === "complete") {
          l();
        } else {
          w.addEventListener("DOMContentLoaded", l);
          w.addEventListener("load", l);
        }
      })();

      // 스크립트 로드 후 부팅
      setTimeout(() => {
        if ((window as any).ChannelIO) {
          (window as any).ChannelIO('boot', {
            "pluginKey": "f9360e8f-b7cf-471d-bf18-a7684a08a510"
          });
        }
      }, 500);
    };

    loadChannelIO();
  }, [pathname]);

  return null;
}