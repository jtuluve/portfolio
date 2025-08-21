import type React from "react"
import type { Metadata } from "next"
import { Pixelify_Sans } from "next/font/google"
import "./globals.css"

const pixelifySans = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "JNANESH - Portfolio",
  description: "Portfolio of JNANESH"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={pixelifySans.variable}>
      <body className="font-pixelify antialiased">{children}</body>
    </html>
  )
}
