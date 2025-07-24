import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import ClientLayout from './components/ClientLayout'
import BackToTopButton from "./components/BackToTopButton";
import Navbar from "./components/NavBar";
import Footer from "./components/FooterSection";

export const metadata = {
  title: 'Raza – Dev',
  description: "Welcome to Raza Ahmed's developer portfolio. Explore high-performance web projects, modern UI/UX design, animation-rich interfaces, and seamless digital solutions built with Next.js, Tailwind CSS, and Framer Motion.",
  openGraph: {
    title: 'Raza – Dev',
    description: "Welcome to Raza Ahmed's developer portfolio. Explore high-performance web projects, modern UI/UX design, animation-rich interfaces, and seamless digital solutions built with Next.js, Tailwind CSS, and Framer Motion.",
    url: 'https://raza-dev.vercel.app',
    siteName: 'Raza Dev',
    images: [
      {
        url: 'https://raza-dev.vercel.app/_next/image?url=%2Fabout.png&w=1080&q=75', // ✅ full URL
        width: 1200,
        height: 630,
        alt: 'Raza Dev – Full Stack Developer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="_Fql-lbojPPhGIsc7aGAU1iNknR5icdb3_WXEsPzgqc" />
      </head>
      <body className={`font-sans scroll-smooth antialiased`}>
        <Navbar />
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
