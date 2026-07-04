import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2318a8ff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Accent glow effect */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-[1.1] tracking-tight">
            Empowering Blockchain
            <br />
            <span className="bg-gradient-to-r from-accent via-accent to-sky-400 bg-clip-text text-transparent">
              Innovation
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground mb-12 text-balance max-w-2xl leading-relaxed font-light">
            Practical solutions for a decentralized future. We deliver reliable tools, services, and expertise to
            support blockchain ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto px-8 h-14 text-base font-medium rounded-xl bg-gradient-to-r from-accent via-accent to-accent/90 hover:from-accent hover:via-accent/95 hover:to-accent/80 shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/40 transition-all duration-300 hover:scale-[1.02] border border-accent/20"
              asChild
            >
              <Link href="#networks">
                Stake with Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-8 h-14 text-base font-medium rounded-xl bg-white/5 backdrop-blur-sm border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg"
              asChild
            >
              <Link href="#contact">Get in Touch</Link>
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">12</div>
              <div className="text-sm text-muted-foreground mt-1">Networks</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">$20.4M</div>
              <div className="text-sm text-muted-foreground mt-1">Total Staked</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold text-foreground">99.9%</div>
              <div className="text-sm text-muted-foreground mt-1">Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
