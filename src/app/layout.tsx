import type { Metadata } from "next";
import "./globals.css";
import BackToTopButton from "./components/BackToTopButton";
import Navbar from "./components/NavBar";
import Footer from "./components/FooterSection";
export const metadata: Metadata = {
  title: "Raza – Dev",
  description:
    "Welcome to Raza Ahmed's developer portfolio. Explore high-performance web projects, modern UI/UX design, animation-rich interfaces, and seamless digital solutions built with Next.js, Tailwind CSS, and Framer Motion.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans scroll-smooth antialiased`}>
        <Navbar />
        {children}
        <BackToTopButton />
        <Footer />
      </body>
    </html>
  );
}
