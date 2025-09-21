import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Debarjita Bhattacharjee - Portfolio',
  description: 'Final-Year CS Student at VIT | Backend & Full-Stack Developer | Spring Boot • Django • Golang',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}