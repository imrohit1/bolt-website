import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SessionProvider } from 'next-auth/react';
import CookieBanner from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'InnovAI Solutions',
  description: 'AI Product Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-r from-purple-900 to-blue-700 text-white`}>
        <SessionProvider>
          <Header />
          {children}
          <Footer />
          <CookieBanner />
        </SessionProvider>
      </body>
    </html>
  )
}
