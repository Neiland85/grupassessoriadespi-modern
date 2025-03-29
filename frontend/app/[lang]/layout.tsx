import "../../globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const currentLang = ["es", "en", "ca"].includes(params.lang) ? params.lang : "es"

  return (
    <html lang={currentLang}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}

