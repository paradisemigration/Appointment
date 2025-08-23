import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import TestInteractivity from '@/components/TestInteractivity'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'VFS Appointment Booking | Visa Services Portal',
  description: 'Book your VFS and visa appointments for European countries and global destinations. Professional visa services with minimal cost.',
  keywords: 'VFS appointment, visa booking, Schengen visa, visa services, appointment booking',
  openGraph: {
    title: 'VFS Appointment Booking Portal',
    description: 'Professional visa appointment booking services for all European countries and major destinations.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans overflow-x-hidden`}>
        <Header />
        <main className="min-h-screen w-full">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <TestInteractivity />
      </body>
    </html>
  )
}
