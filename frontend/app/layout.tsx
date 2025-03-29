import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import type { Metadata } from "next"
import type React from "react"

// SEO
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grup Assessoria Despí - Tu Hogar Ideal",
  description: "Encuentra tu hogar ideal con Grup Assessoria Despí. Servicios inmobiliarios, asesoría y seguros.",
  generator: "v0.dev"
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* Weglot script para multilingüe */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.Weglot = { api_key: 'wg_e39ddf9cdccad4fd0095692650d80e649' };
            `,
          }}
        />
        <script src="https://cdn.weglot.com/weglot.min.js" async></script>
      </head>
      <body className={inter.className}>
        {/* SEO global */}
        <DefaultSeo {...SEO} />

        {/* Contenido principal */}
        {children}

        {/* Consentimiento de cookies */}
        <CookieConsent />
      </body>
    </html>
  )
}

