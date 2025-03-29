export default function LangHome({ params }: { params: { lang: string } }) {
  const translations = {
    es: {
      title: "Bienvenido a Grup Assessoria Despí",
      body: "Servicios de asesoría, inmobiliaria y seguros personalizados. Contáctanos hoy mismo.",
    },
    en: {
      title: "Welcome to Grup Assessoria Despí",
      body: "Advisory, real estate, and tailored insurance services. Get in touch today.",
    },
    ca: {
      title: "Benvingut a Grup Assessoria Despí",
      body: "Serveis d’assessoria, immobiliària i assegurances personalitzades. Contacta avui mateix.",
    },
  }

  const lang = params.lang as keyof typeof translations
  const content = translations[lang] || translations["es"]

  return (
    <main className="p-6">
      <h1 className="text-4xl font-bold">{content.title}</h1>
      <p className="mt-4 text-lg">{content.body}</p>
    </main>
  )
}

