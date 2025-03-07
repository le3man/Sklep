import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata = {
  title: "ShopOnline - Twój ulubiony sklep internetowy",
  description:
    "Odkryj szeroki wybór produktów w najlepszych cenach. Szybka dostawa, łatwe zwroty i profesjonalna obsługa klienta.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl">
      <body className={inter.className}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}



import './globals.css'