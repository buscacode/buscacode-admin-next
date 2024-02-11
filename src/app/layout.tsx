import type { Metadata } from 'next'
import { Inter, Pathway_Extreme } from 'next/font/google'
import './globals.css'
//import Head from 'next/head'

const pathway_Extreme = Pathway_Extreme({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      {/* <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Pathway+Extreme:ital,opsz,wdth,wght@0,8..144,75..100,100..900;1,8..144,75..100,100..900&display=swap" rel="stylesheet" />


      </head> */}
      <body className={pathway_Extreme.className}>{children}</body>
    </html>
  )
}
