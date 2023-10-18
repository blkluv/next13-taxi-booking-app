import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Outfit } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components'

const outfit = Outfit({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Next 13.5 Taxi Booking App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <ClerkProvider>
    <html lang="en">
      <body className={`${outfit.className} bg-gray-200`}>
        <Navbar />
        {children}
      </body>
    </html>
  </ClerkProvider>
  )
}
