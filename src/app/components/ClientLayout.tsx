'use client';

import Script from 'next/script';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Image from 'next/image';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const metaId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  useEffect(() => {
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <>
      {/* Meta Pixel Script - fires on first load */}
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '${metaId}');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* NoScript fallback */}
      <noscript>
        <Image
          height={1}
          width={1}
          alt=""
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${metaId}&ev=PageView&noscript=1`}
        />
      </noscript>

      {children}
    </>
  );
}
