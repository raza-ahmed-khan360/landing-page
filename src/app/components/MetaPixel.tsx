'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface FBQ {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: (...args: unknown[]) => void;
}

const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? '';

export function MetaPixel() {
    const pathname = usePathname();

    useEffect(() => {
        if (!window.fbq) {
            const fbq: FBQ = function (...args: unknown[]) {
                if (fbq.callMethod) {
                    fbq.callMethod(...args);
                } else {
                    (fbq.queue as unknown[]).push(args);
                }
            } as FBQ;

            fbq.queue = [];
            fbq.loaded = true;
            fbq.version = '2.0';

            window.fbq = fbq;

            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://connect.facebook.net/en_US/fbevents.js';
            document.head.appendChild(script);

            window.fbq('init', pixelId);
        }

        window.fbq('track', 'PageView');
    }, []);

    useEffect(() => {
        if (typeof window.fbq === 'function') {
            window.fbq('track', 'PageView');
        }
    }, [pathname]);

    return null;
}
