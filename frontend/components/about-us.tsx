import { Card, CardContent } from "@/components/ui/card"

export function AboutUs() {
  return (
    <section className="container py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Más de 30 años de excelencia</h2>
          <p className="text-muted-foreground">
            Desde 1991, Assessoria Despí ha sido sinónimo de calidad y profesionalidad en el sector inmobiliario y de
            asesoría empresarial. Nuestro compromiso con la excelencia nos ha permitido formar un grupo empresarial
            líder, dedicado al asesoramiento de empresas, servicios inmobiliarios y mediación de seguros.
          </p>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Nuestra misión</h3>
            <p className="text-muted-foreground">
              En Grup Assessoria Despí, nuestra filosofía se basa en ofrecer un servicio personalizado y de alta calidad
              a cada cliente. Nos esforzamos por superar las expectativas, proporcionando soluciones integrales que se
              adaptan a las necesidades únicas de cada individuo y empresa.
            </p>
          </div>
        </div>
        <Card>
          <CardContent className="p-0">
            <img
              src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
              alt="Equipo profesional de Grup Assessoria Despí"
              className="rounded-lg object-cover w-full h-[400px]"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

