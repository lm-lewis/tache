import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import App from "../App.jsx"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tache App',
  description: 'Gestion des taches',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <App /> */}
      <body className={inter.className}>{children}</body>
    </html>
  )
}
