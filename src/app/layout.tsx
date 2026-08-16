import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { ObservationProvider } from '@/observation';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://terrapayx.com'),
  title: 'Terra Pay X — Governed AI Engineering & Payments Infrastructure',
  description:
    'Terra Pay X Labs designs governed AI engineering systems and operational controls, backed by the discipline of a cloud-native payments platform in development.',
  keywords: [
    'AI engineering systems',
    'payments infrastructure',
    'cloud-native',
    'ECS Fargate',
    'OpenTelemetry',
    'AI governance',
    'financial systems',
    'Terra Pay X',
  ],
  authors: [{ name: 'Terra Pay X' }],
  openGraph: {
    title: 'Terra Pay X — Governed AI Engineering & Payments Infrastructure',
    description:
      'Governed AI engineering systems and operational controls, backed by cloud-native payments infrastructure in development.',
    type: 'website',
    url: 'https://terrapayx.com',
    siteName: 'Terra Pay X',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Terra Pay X — Governed AI Engineering and Payments Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terra Pay X — Governed AI Engineering & Payments Infrastructure',
    description:
      'Governed AI engineering systems and operational controls, backed by cloud-native payments infrastructure in development.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-text antialiased">
        <ObservationProvider>
          <Nav />
          {children}
          <Footer />
        </ObservationProvider>
      </body>
    </html>
  );
}
