import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Activity, Layers } from "lucide-react"

const heroChains = [
  { name: "Monad", logo: "/logos/monad.png" },
  { name: "Cosmos Hub", logo: "/logos/cosmoshub.png" },
  { name: "Canton", logo: "/logos/canton-logo.png" },
  { name: "Espresso", logo: "/logos/espresso.svg" },
  { name: "Polkadot", logo: "/logos/polkadot.png" },
]

const uptimeBars = [96, 100, 100, 98, 100, 100, 100, 97, 100, 100, 99, 100, 100, 100, 98, 100, 100, 100, 100, 100]

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 lg:pt-52 lg:pb-32 overflow-hidden">
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2318a8ff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Nordic aurora glow */}
      <div className="absolute -top-48 right-[-12%] w-[720px] h-[720px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.13),transparent_62%)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-[-16%] w-[620px] h-[620px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.11),transparent_62%)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-[-10%] right-1/4 w-[520px] h-[420px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.08),transparent_62%)] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-16 items-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-balance leading-[1.08] tracking-tight">
              Professional validators,
              <br />
              <span className="bg-gradient-to-r from-accent via-accent to-sky-400 bg-clip-text text-transparent">
                proven infrastructure.
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 text-balance max-w-2xl leading-relaxed font-light">
              Five years of Proof-of-Stake operations. Genesis validator on Monad and Initia, mainnet validator on
              Starknet, 100+ nodes launched, and foundation delegations earned across the networks we run.
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

            <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg lg:hidden">
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

          {/* Floating glass panels */}
          <div className="relative hidden lg:block h-[440px]" aria-hidden="true">
            <div className="absolute top-0 right-0 w-[330px] rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 p-5">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Networks</span>
                <Layers className="w-3.5 h-3.5 text-accent" />
              </div>
              <div className="flex items-center -space-x-2 mb-3">
                {heroChains.map((chain) => (
                  <span
                    key={chain.name}
                    className="w-9 h-9 rounded-full bg-[#101420] border-2 border-background flex items-center justify-center overflow-hidden"
                  >
                    <Image src={chain.logo} alt={chain.name} width={22} height={22} className="w-[22px] h-[22px]" />
                  </span>
                ))}
                <span className="w-9 h-9 rounded-full bg-accent/15 border-2 border-background flex items-center justify-center text-[10px] font-semibold text-accent">
                  +7
                </span>
              </div>
              <p className="text-sm text-foreground/90 font-medium">12 networks validated</p>
              <p className="text-xs text-muted-foreground mt-0.5">mainnet & testnet, one standard of care</p>
            </div>

            <div className="absolute top-[168px] left-0 w-[300px] rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Validator uptime
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  live
                </span>
              </div>
              <div className="flex items-end gap-[3px] h-9 mb-3">
                {uptimeBars.map((v, i) => (
                  <span
                    key={i}
                    className="flex-1 rounded-[2px] bg-emerald-400/70"
                    style={{ height: `${(v - 90) * 10}%` }}
                  />
                ))}
              </div>
              <p className="text-2xl font-bold text-foreground tracking-tight">99.9%</p>
              <p className="text-xs text-muted-foreground mt-0.5">across all chains, all year</p>
            </div>

            <div className="absolute bottom-0 right-0 w-[280px] rounded-2xl bg-white/[0.05] backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Total staked
                </span>
                <Activity className="w-3.5 h-3.5 text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground tracking-tight">$20.4M</p>
              <p className="text-xs text-muted-foreground mt-0.5">delegated by people who sleep well</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
