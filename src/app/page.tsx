"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera: string }).opera;
    let appLink = process.env.NEXT_PUBLIC_FALLBACK_URL ?? "https://chargingc.com";
    let storeLink = "";

    if (/android/i.test(userAgent)) {
      appLink = `intent://home#Intent;scheme=${process.env.NEXT_PUBLIC_APP_ANDROID_SCHEME};package=${process.env.NEXT_PUBLIC_APP_ANDROID_PACKAGE};end;`;
      storeLink = process.env.NEXT_PUBLIC_PLAY_STORE_LINK ?? "https://play.google.com/store";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !("MSStream" in window)) {
      // ใช้ Deep Link เพื่อเปิดแอพ
      appLink = `${process.env.NEXT_PUBLIC_APP_IOS_SCHEME}://home`;
      storeLink = process.env.NEXT_PUBLIC_APP_STORE_LINK ?? "https://apps.apple.com/";

      // สร้าง iframe เพื่อเปิดแอพ
      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      iframe.src = appLink;
      document.body.appendChild(iframe);

      // ถ้าเปิดแอพไม่ได้ภายใน 2 วินาที → ไป App Store
      setTimeout(() => {
        window.location.href = storeLink;
      }, 2000);

      return;
    }

    window.location.href = appLink;
  }, []);

  return <p>กำลังเปิดแอพ...</p>;
}