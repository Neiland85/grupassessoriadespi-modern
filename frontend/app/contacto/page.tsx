export default function Contacto() {
  return (
    <section className="max-w-3xl mx-auto py-12 px-4 space-y-6">
      <h1 className="text-3xl font-bold">Contáctanos</h1>

      <form className="space-y-4">
        <input type="text" placeholder="Nombre" className="w-full border px-4 py-2 rounded" />
        <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded" />
        <textarea placeholder="Mensaje" rows={5} className="w-full border px-4 py-2 rounded"></textarea>
        <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Enviar</button>
      </form>

      <div className="text-sm text-gray-600">
        <p>📍 Carrer de l'Ajuntament, 123 – Sant Joan Despí</p>
        <p>📞 93 123 45 67</p>
        <p>📧 info@grupassessoriadespi.com</p>
      </div>
    </section>
  )
}

