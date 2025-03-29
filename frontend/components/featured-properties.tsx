import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function FeaturedProperties() {
  const properties = [
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Villa de Lujo con Vistas al Mar",
      price: "2.500.000€",
      badges: ["5 habitaciones", "6 baños", "650m²", "Piscina"],
      type: "Venta",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2053&q=80",
      title: "Ático de Diseño en el Centro",
      price: "5.000€/mes",
      badges: ["3 habitaciones", "2 baños", "200m²", "Terraza"],
      type: "Alquiler",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      title: "Mansión Exclusiva con Jardín",
      price: "3.800.000€",
      badges: ["7 habitaciones", "8 baños", "1000m²", "Jardín"],
      type: "Venta",
    },
  ]

  return (
    <section className="bg-muted py-24">
      <div className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          Propiedades Destacadas
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <Card key={index} className="overflow-hidden">
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-2">{property.title}</h3>
                <p className="text-2xl font-bold text-primary mb-4">{property.price}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {property.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="bg-secondary p-4 flex justify-between items-center">
                <Badge variant="default">{property.type}</Badge>
                <Button variant="default">Ver detalles</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

