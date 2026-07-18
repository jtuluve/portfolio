import type React from "react"
import { LoadingProvider } from "@/components/loading-provider"
import LoadingScreen from "@/components/ui/loading-screen"

export default function OldLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <LoadingProvider>
      <LoadingScreen />
      {children}
    </LoadingProvider>
  )
}
