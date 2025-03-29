import { Inter } from "next/font/google"
import "./globals.css"
import { CookieConsent } from "@/components/cookie-consent"
import type { Metadata } from "next"
import type React from "react"
import { DefaultSeo } from "next-seo"
import SEO from "../next-seo.config"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Grup Assessoria Despí - Tu Hogar Ideal",
  description:
    "Encuentra tu hogar ideal con Grup Assessoria Despí. Servicios inmobiliarios, asesoría y seguros.",
  generator: "v0.dev",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // ✅ Validación de que la variable de entorno está correctamente cargada
  console.log("✅ Weglot key loaded:", process.env.NEXT_PUBLIC_WEGLOT_API_KEY)

  return (
    <html lang="es">
      <head>
        {/* ✅ Weglot script cargado dinámicamente con seguridad */}
        <script
          // rome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
dangerouslySetInnerHTML={{
            __html: `
              window.Weglot = { api_key: '${process.env.NEXT_PUBLIC_WEGLOT_API_KEY}' };
            `,
          }}
        />
        <script src="https://cdn.weglot.com/weglot.min.js" async />
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

