import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { NetworksSection } from "@/components/networks-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { RelayerSection } from "@/components/relayer-section"
import { EventsSection } from "@/components/events-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

async function getMonadApr(): Promise<string | null> {
  try {
    const res = await fetch("https://validator-api.huginn.tech/monad-api/staking/pool", {
      next: { revalidate: 3600 },
    })
    if (!res.ok) return null
    const data = await res.json()
    return typeof data?.apr === "number" && data.apr > 0 ? data.apr.toFixed(2) : null
  } catch {
    return null
  }
}

export default async function Page() {
  const monadApr = await getMonadApr()

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <NetworksSection monadApr={monadApr} />
        <AboutSection />
        <ProductsSection />
        <RelayerSection />
        <EventsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
