import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section className="container py-24">
      <div className="grid gap-12 lg:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contacta con nosotros</h2>
            <p className="mt-4 text-muted-foreground">
              Estamos aquí para ayudarte. Contáctanos para cualquier consulta.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <p>Av. Barcelona, 21, 08970 Sant Joan Despí, Barcelona</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <p>+34 93 373 00 50</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <p>info@grupassessoriadespi.com</p>
            </div>
          </div>
        </div>

        <Card>
          <CardContent className="p-6">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre</Label>
                  <Input id="name" placeholder="Tu nombre" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Asunto</Label>
                <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea id="message" placeholder="Escribe tu mensaje aquí..." className="min-h-[150px]" />
              </div>
              <Button type="submit" className="w-full">
                Enviar mensaje
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

