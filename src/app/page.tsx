"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const userAgent = (navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera) ?? "";
    let redirectUrl = process.env.NEXT_PUBLIC_FALLBACK_URL ?? "https://chargingc.com";

    if (/android/i.test(userAgent)) {
      redirectUrl = process.env.NEXT_PUBLIC_PLAY_STORE_LINK ?? "https://play.google.com/store";
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !("MSStream" in window)) {
      redirectUrl = process.env.NEXT_PUBLIC_APP_STORE_LINK ?? "https://apps.apple.com/";
    }

    window.location.href = redirectUrl;
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", fontSize: "1.5rem" }}>
      <p>กำลังเปลี่ยนเส้นทาง...</p>
    </div>
  );
}