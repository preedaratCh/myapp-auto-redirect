"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera: string }).opera;
    const fallbackUrl = process.env.NEXT_PUBLIC_FALLBACK_URL ?? "https://chargingc.com";
    const androidScheme = process.env.NEXT_PUBLIC_APP_ANDROID_SCHEME;
    const androidPackage = process.env.NEXT_PUBLIC_APP_ANDROID_PACKAGE;
    const playStoreLink = process.env.NEXT_PUBLIC_PLAY_STORE_LINK ?? "https://play.google.com/store";
    const iosScheme = process.env.NEXT_PUBLIC_APP_IOS_SCHEME;
    const appStoreLink = process.env.NEXT_PUBLIC_APP_STORE_LINK ?? "https://apps.apple.com/";

    let appLink = fallbackUrl;

    if (/android/i.test(userAgent)) {
      appLink = `intent://home#Intent;scheme=${androidScheme};package=${androidPackage};end;`;
      setTimeout(() => {
        window.location.href = playStoreLink;
      }, 3000);
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !('MSStream' in window)) {
      appLink = `${iosScheme}://home`;
      setTimeout(() => {
        window.location.href = appStoreLink;
      }, 3000);
    }

    window.location.href = appLink;
  }, []);

  return <p>กำลังเปลี่ยนเส้นทาง...</p>;
}