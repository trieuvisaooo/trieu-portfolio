import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/context/ThemeContext'

export const metadata: Metadata = {
  title: "Trieu's Portfolio",
  description: 'Personal portfolio of Trieu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-black bg-contact-gradient dark:bg-gray-950 dark:text-white transition-colors duration-300">
        <ThemeProvider>
          {/* <Header /> */}
          <main>{children}</main>
          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
