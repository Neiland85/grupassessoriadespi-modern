import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { PropertySearch } from "@/components/property-search"
import { FeaturedProperties } from "@/components/featured-properties"
import { AboutUs } from "@/components/about-us"
import { Testimonials } from "@/components/testimonials"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PropertySearch />
        <FeaturedProperties />
        <Services />
        <AboutUs />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

