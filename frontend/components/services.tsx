import { Building2, Shield, FileText } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function Services() {
  const services = [
    {
      title: "InmoDespi",
      description:
        "Conoce y/o sé parte de nuestra gran variedad de alquiler y venta de inmuebles (apartamentos, locales, oficinas y más).",
      icon: Building2,
    },
    {
      title: "Assessoria Despí",
      description:
        "Forma parte de nuestros más de 200 clientes y de nuestra experiencia de casi 30 años gestionando todos los temas de administración pública.",
      icon: FileText,
    },
    {
      title: "ACG 2003 Assessors",
      description:
        "Calcula el precio de tu seguro y consigue el que se ajuste más a todas tus necesidades e intereses. Agentes Directos de Catalana Occidente.",
      icon: Shield,
    },
  ]

  return (
    <section className="container py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Servicios</h2>
        <p className="mt-4 text-muted-foreground">Ofrecemos soluciones integrales para todas tus necesidades</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="transition-all hover:shadow-lg">
            <CardHeader>
              <service.icon className="h-10 w-10 mb-4" />
              <CardTitle>{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{service.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

