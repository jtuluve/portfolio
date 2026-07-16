import type React from "react"
import type { Metadata } from "next"
import { Oxanium, Saira } from "next/font/google"
import "./globals.css"
import LoadingScreen from "@/components/ui/loading-screen"
import { LoadingProvider } from "@/components/loading-provider"

const saira = Saira({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

const oxanium = Oxanium({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pixelify",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Jnanesh",
  description: "Portfolio of Jnanesh"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${saira.variable} ${oxanium.variable}`}>
      <body className="font-pixelify antialiased overflow-x-hidden cursor-default">
        <LoadingProvider>
          <LoadingScreen />
          {children}
        </LoadingProvider>
      </body>
    </html>
  )
}
