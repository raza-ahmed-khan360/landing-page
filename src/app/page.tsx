// app/page.tsx or src/app/page.tsx

import { Metadata } from 'next';

import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FeaturesSection from './components/FeaturesSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillSection';
import PricingSection from './components/PricingSection';
import ContactSection from './components/ContactForm';
import TestimonialsSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import AboutSection from './components/AboutSection';

export const metadata: Metadata = {
  title: 'Raza – Full Stack Developer',
  description:
    'Raza is a full-stack developer building modern, responsive websites with React, Next.js and Tailwind CSS.',
keywords: [
  'Web Development Services',
  'Custom Web Development',
  'Web Application Development',
  'Full Stack Web Developer',
  'React Web Development Services',
  'Freelance Web Developer Pakistan',
  'Web Development Pakistan',
  'Hire Web Developer',
  'E-commerce Website Development',
  'Next.js Development Services',
],
  openGraph: {
    title: 'Raza – Full Stack Developer',
    description:
      'Portfolio of Raza, a modern full-stack developer specializing in React, Next.js, and Tailwind CSS.',
    url: 'https://raza-dev.vercel.app',
    siteName: 'Raza Portfolio',
    images: [
      {
        url: 'https://raza-dev.vercel.app/_next/image?url=%2Fabout.png&w=1080&q=75',
        width: 1200,
        height: 630,
        alt: 'Raza Portfolio Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raza – Full Stack Developer',
    description:
      'Raza is a modern full-stack developer specializing in React, Next.js and Tailwind CSS.',
    images: ['https://raza-dev.vercel.app/_next/image?url=%2Fabout.png&w=1080&q=75'], 
  },
  metadataBase: new URL('https://raza-dev.vercel.app'),
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <ProjectsSection />
      <SkillsSection />
      <PricingSection />
      <ContactSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
