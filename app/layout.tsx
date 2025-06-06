import type { Metadata } from 'next'
import { Inter, Playfair_Display, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap'
})
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'ZM Studio Photography - Professional Wedding & Event Photography',
  description: 'Professional wedding and event photography in Edmonton, AB. Capturing your special moments with artistic vision and modern techniques.',
  keywords: 'wedding photography, event photography, Edmonton photographer, engagement photos, professional photography',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} ${playfair.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
} 