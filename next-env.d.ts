/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

/// <reference types="next" />
/// <reference types="next/image-types/global" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_APP_ANDROID_PACKAGE: string;
    NEXT_PUBLIC_APP_ANDROID_SCHEME: string;
    NEXT_PUBLIC_APP_IOS_SCHEME: string;
    NEXT_PUBLIC_APP_STORE_LINK: string;
    NEXT_PUBLIC_PLAY_STORE_LINK: string;
    NEXT_PUBLIC_FALLBACK_URL: string;
  }
}
