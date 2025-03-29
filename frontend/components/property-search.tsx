import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"

export function PropertySearch() {
  return (
    <section className="bg-muted py-12">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Encuentra tu propiedad ideal</h2>
          <p className="mt-4 text-muted-foreground">
            Utiliza nuestro buscador avanzado para encontrar la propiedad que mejor se adapte a tus necesidades
          </p>
        </div>

        <div className="mx-auto max-w-3xl rounded-lg border bg-card p-6 shadow-sm">
          <form className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="location">Ubicación</Label>
                <Input id="location" placeholder="Ej: Sant Joan Despí" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="type">Tipo de propiedad</Label>
                <Select>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Selecciona tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="apartment">Apartamento</SelectItem>
                    <SelectItem value="house">Casa</SelectItem>
                    <SelectItem value="office">Oficina</SelectItem>
                    <SelectItem value="commercial">Local comercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="operation">Operación</Label>
                <Select>
                  <SelectTrigger id="operation">
                    <SelectValue placeholder="Selecciona operación" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sale">Venta</SelectItem>
                    <SelectItem value="rent">Alquiler</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Rango de precio (€)</Label>
                <Slider defaultValue={[0, 1000000]} max={1000000} step={1000} className="py-4" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0€</span>
                  <span>1.000.000€</span>
                </div>
              </div>
            </div>

            <Button type="submit" className="w-full">
              Buscar propiedades
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

