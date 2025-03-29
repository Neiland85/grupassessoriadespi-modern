import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Grup Assessoria Despí</h3>
            <p className="text-sm text-muted-foreground">
              Más de 30 años ofreciendo servicios profesionales en Sant Joan Despí
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios/inmobiliaria" className="text-muted-foreground hover:text-foreground">
                  Servicios Inmobiliarios
                </Link>
              </li>
              <li>
                <Link href="/servicios/asesoria" className="text-muted-foreground hover:text-foreground">
                  Asesoría Empresarial
                </Link>
              </li>
              <li>
                <Link href="/servicios/seguros" className="text-muted-foreground hover:text-foreground">
                  Mediación de Seguros
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces útiles</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-foreground">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">Suscríbete para recibir las últimas novedades</p>
            <form className="flex gap-2">
              <Input placeholder="tu@email.com" type="email" />
              <Button type="submit">Suscribirse</Button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Grup Assessoria Despí. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

