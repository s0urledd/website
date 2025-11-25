import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { NetworksSection } from "@/components/networks-section"
import { StatsSection } from "@/components/stats-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NetworksSection />
        <StatsSection />
        <AboutSection />
        <ProductsSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
