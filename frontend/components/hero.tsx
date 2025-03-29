import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function Hero() {
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
      title: "Descubre tu hogar de ensueño",
      description: "Propiedades exclusivas en las mejores zonas de Sant Joan Despí",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Lujo y confort en cada detalle",
      description: "Casas y apartamentos con las últimas tendencias en diseño y comodidad",
    },
    {
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Vive la experiencia del lujo",
      description: "Propiedades únicas que superarán todas tus expectativas",
    },
  ]

  return (
    <section className="relative">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[70vh] min-h-[600px] w-full">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${slide.image})` }}>
                  <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="container relative flex h-full flex-col items-center justify-center text-center text-white">
                  <h1 className="mb-6 text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    {slide.title}
                  </h1>
                  <p className="mb-8 max-w-[600px] text-lg text-white md:text-xl">{slide.description}</p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" variant="default">
                      Explorar propiedades
                    </Button>
                    <Button size="lg" variant="outline">
                      Contactar ahora
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </section>
  )
}

