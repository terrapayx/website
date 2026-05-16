import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://terrapayx.com'),
  title: 'Terra Pay X — Cloud-Native Payments Infrastructure',
  description:
    'Terra Pay X builds secure, observable, and operationally resilient payments infrastructure powered by modern cloud architecture and governed AI engineering workflows.',
  keywords: [
    'payments infrastructure',
    'cloud-native',
    'ECS Fargate',
    'OpenTelemetry',
    'AI governance',
    'financial systems',
  ],
  authors: [{ name: 'Terra Pay X' }],
  openGraph: {
    title: 'Terra Pay X — Cloud-Native Payments Infrastructure',
    description:
      'Secure, observable, and operationally resilient payments infrastructure built for reliability and intelligent operations.',
    type: 'website',
    url: 'https://terrapayx.com',
    siteName: 'Terra Pay X',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-bg text-text antialiased">{children}</body>
    </html>
  );
}
