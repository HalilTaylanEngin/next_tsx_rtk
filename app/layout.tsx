import ReduxProvider from '@/providers/ReduxProvider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import ThemeProviders from '@/providers/ThemeProviders'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Redux Toolkit | Typescript | Next.js',
  description: 'Next.js | Redux Toolkit | TypeScript e-commerce-site-demo'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReduxProvider>
          <ThemeProviders>
            <Navbar />
            {children}
            <Footer />
          </ThemeProviders>
        </ReduxProvider>
      </body>
    </html>
  )
}
