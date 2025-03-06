"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera: string }).opera;
    let appLink = process.env.NEXT_PUBLIC_FALLBACK_URL ?? "https://chargingc.com";
    let storeLink = "";

    if (/android/i.test(userAgent)) {
      // Android → เปิดแอพถ้ามี / ไป Play Store ถ้าไม่มี
      appLink = `intent://home#Intent;scheme=${process.env.NEXT_PUBLIC_APP_ANDROID_SCHEME};package=${process.env.NEXT_PUBLIC_APP_ANDROID_PACKAGE};end;`;
      storeLink = process.env.NEXT_PUBLIC_PLAY_STORE_LINK ?? "https://play.google.com/store";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && typeof (window as unknown as { MSStream?: unknown }).MSStream === "undefined") {
      // iOS → ใช้ Deep Link ก่อน แล้วไป App Store ถ้าเปิดไม่ได้
      appLink = `${process.env.NEXT_PUBLIC_APP_IOS_SCHEME}`;
      storeLink = process.env.NEXT_PUBLIC_APP_STORE_LINK ?? "https://apps.apple.com/";
      
      // เปิดแอพก่อน ถ้าไม่ได้ให้เปิด App Store
      window.location.href = appLink;
      setTimeout(() => {
        window.location.href = storeLink;
      }, 2000);
      return;
    }

    window.location.href = appLink;
  }, []);

  return <p>กำลังเปลี่ยนเส้นทาง...</p>;
}