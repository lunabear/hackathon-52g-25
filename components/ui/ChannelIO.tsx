'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

// Type definitions for ChannelIO
interface ChannelIOWindow extends Window {
  ChannelIO?: ChannelIOFunction
  ChannelIOInitialized?: boolean
}

interface ChannelIOFunction {
  (...args: unknown[]): void
  c?: (args: unknown[]) => void
  q?: unknown[][]
}

export default function ChannelIO() {
  const pathname = usePathname()
  
  useEffect(() => {
    const w = window as ChannelIOWindow
    
    // 페이지가 바뀔 때마다 즉시 처리
    if (pathname !== '/') {
      // 메인 페이지가 아니면 즉시 숨김
      if (w.ChannelIO) {
        w.ChannelIO('hideChannelButton');
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
    if (w.ChannelIO) {
      // 이미 로드되어 있으면 show
      w.ChannelIO('showChannelButton');
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
        if (w.ChannelIO) {
          return;
        }
        const ch: ChannelIOFunction = function(...args: unknown[]) {
          if (ch.c) {
            ch.c(args);
          }
        };
        ch.q = [];
        ch.c = function(args: unknown[]) {
          ch.q?.push(args);
        };
        w.ChannelIO = ch;
        function l() {
          if (w.ChannelIOInitialized) {
            return;
          }
          w.ChannelIOInitialized = true;
          const s = document.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
          const x = document.getElementsByTagName("script")[0];
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
        if (w.ChannelIO) {
          w.ChannelIO('boot', {
            "pluginKey": "f9360e8f-b7cf-471d-bf18-a7684a08a510"
          });
        }
      }, 500);
    };

    loadChannelIO();
  }, [pathname]);

  return null;
}