import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "María García",
      role: "Cliente Inmobiliaria",
      content: "Excelente atención y profesionalidad. Me ayudaron a encontrar el piso perfecto.",
    },
    {
      name: "Juan Pérez",
      role: "Cliente Asesoría",
      content: "Llevan mis temas fiscales desde hace años. Muy satisfecho con su servicio.",
    },
    {
      name: "Ana Martínez",
      role: "Cliente Seguros",
      content: "Me asesoraron perfectamente con el seguro para mi negocio. Muy recomendable.",
    },
  ]

  return (
    <section className="bg-muted py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-4 text-muted-foreground">La satisfacción de nuestros clientes es nuestra mejor recompensa</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardContent className="flex flex-col gap-4 p-6">
                    <Quote className="h-8 w-8 text-primary" />
                    <p className="flex-1 text-muted-foreground">{testimonial.content}</p>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

