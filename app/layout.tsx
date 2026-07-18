import type React from "react"
import type { Metadata } from "next"
import { Oxanium, Saira } from "next/font/google"
import "./globals.css"

const siteUrl = "https://jtuluve.is-a.dev"
const siteTitle = "Jnanesh | Software Engineer & Full-Stack Developer"
const siteDescription =
  "Portfolio of Jnanesh, a software engineer building full-stack web applications, backend services, automation tools, and developer utilities."

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
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Jnanesh",
  },
  description: siteDescription,
  applicationName: "Jnanesh Portfolio",
  authors: [{ name: "Jnanesh", url: siteUrl }],
  creator: "Jnanesh",
  publisher: "Jnanesh",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Jnanesh",
    "software engineer",
    "full-stack developer",
    "web developer",
    "Next.js developer",
    "backend developer",
    "automation developer",
    "Mangaluru",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "Jnanesh Portfolio",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jnanesh — Software Engineer and Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${saira.variable} ${oxanium.variable}`}>
      <body className="font-pixelify antialiased overflow-x-hidden cursor-default">
        {children}
      </body>
    </html>
  )
}
