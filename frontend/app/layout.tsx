import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import type React from "react" // Added import for React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grup Assessoria Despí - Tu Hogar Ideal",
  description: "Encuentra tu hogar ideal con Grup Assessoria Despí. Servicios inmobiliarios, asesoría y seguros.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}



import './globals.css'