export default function Servicios() {
  return (
    <section className="max-w-4xl mx-auto py-12 px-4 space-y-8">
      <h1 className="text-3xl font-bold">Nuestros Servicios</h1>

      {[
        ['Asesoría Fiscal', 'Planificación y presentación de impuestos para particulares y empresas.'],
        ['Asesoría Laboral', 'Contrataciones, nóminas, Seguridad Social, ERTES y despidos.'],
        ['Asesoría Contable', 'Balances, gestión financiera y análisis contable.'],
        ['Asesoría Jurídica', 'Consultoría legal civil, mercantil y laboral.'],
        ['Gestión Inmobiliaria', 'Compra, venta y alquiler de inmuebles.'],
      ].map(([title, desc], i) => (
        <div key={i} className="space-y-1">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}

      <a
        href="https://www.idealista.com/pro/grupassessoriadespi/"
        className="inline-block mt-4 text-blue-600 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver inmuebles en Idealista
      </a>
    </section>
  )
}

