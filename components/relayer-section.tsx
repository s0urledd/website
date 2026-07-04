import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, RefreshCw, Radio, GitBranch } from "lucide-react"

const highlights = [
  {
    icon: Radio,
    title: "Always-on channels",
    description: "Relayer processes monitored around the clock so IBC packets never sit in the queue",
  },
  {
    icon: RefreshCw,
    title: "Timely packet clearing",
    description: "Stuck transfers and expired clients are cleared before users ever notice",
  },
  {
    icon: GitBranch,
    title: "Routes on request",
    description: "Need a new path between Cosmos SDK chains? We open and maintain it for you",
  },
]

export function RelayerSection() {
  return (
    <section id="relayer" className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.04] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
          <div>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Interchain Services
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight leading-tight">
              Relaying the interchain,
              <br />
              packet by packet
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">
              Beyond validation, we operate IBC relayers for Cosmos SDK networks — keeping channels healthy and value
              flowing between the chains we support.
            </p>

            <div className="space-y-5 mb-10">
              {highlights.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{item.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="px-7 h-12 rounded-xl font-medium shadow-lg shadow-accent/20 bg-gradient-to-r from-accent to-accent/85 hover:from-accent hover:to-accent/75 transition-all"
              asChild
            >
              <Link href="#contact">
                Request a Route
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="relative">
            <div className="rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm p-8 lg:p-10">
              <div className="flex items-center justify-between mb-10">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  IBC Packet Flow
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  relaying
                </span>
              </div>

              <div className="flex items-center gap-5 py-4">
                <div className="flex flex-col items-center gap-3 w-24 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden">
                    <Image src="/logos/ibc.png" alt="IBC Protocol" width={44} height={44} className="w-11 h-11 rounded-full" />
                  </div>
                  <span className="text-[10px] text-muted-foreground text-center leading-tight">
                    Cosmos SDK
                    <br />
                    chains
                  </span>
                </div>

                <div className="flex-1 space-y-7">
                  {[0, 1, 2].map((channel) => (
                    <div
                      key={channel}
                      className="relative h-px bg-gradient-to-r from-accent/40 via-white/15 to-accent/40"
                    >
                      <span className="packet-dot" style={{ animationDelay: `${channel * 1.1}s` }} aria-hidden="true" />
                      <span
                        className="packet-dot packet-dot-reverse"
                        style={{ animationDelay: `${channel * 1.1 + 1.8}s` }}
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col items-center gap-3 w-24 shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                    <Image
                      src="/logos/huginn-logo.png"
                      alt="Huginn Relayer"
                      width={44}
                      height={44}
                      className="w-11 h-11"
                    />
                  </div>
                  <span className="text-[10px] text-muted-foreground text-center leading-tight">
                    Huginn
                    <br />
                    Relayer
                  </span>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-8 leading-relaxed">
                Operating IBC relayer infrastructure across Cosmos SDK networks — keeping channels open and packets
                moving in both directions.
              </p>
            </div>

            <div className="absolute -top-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
