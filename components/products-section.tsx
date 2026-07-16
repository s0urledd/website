import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, TriangleAlert, Check, Zap } from "lucide-react"

function BrandVisual({ src, alt, position = "center" }: { src: string; alt: string; position?: string }) {
  return (
    <div className="relative h-44 overflow-hidden border-b border-white/5">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        style={{ objectPosition: position }}
        sizes="(max-width: 768px) 100vw, 33vw"
      />
    </div>
  )
}

function GuardVisual() {
  return (
    <div className="relative h-44 overflow-hidden border-b border-white/5 bg-gradient-to-br from-amber-500/[0.07] via-transparent to-transparent">
      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 space-y-2.5 transition-transform duration-500 group-hover:-translate-y-[55%]">
        <div className="rounded-xl rounded-tl-sm bg-[#0b0e15] border border-white/10 px-3.5 py-2.5 shadow-xl shadow-black/50 max-w-[88%]">
          <div className="flex items-center gap-1.5 text-[11px] font-semibold text-amber-400">
            <TriangleAlert className="w-3 h-3" />
            Unbonding detected
          </div>
          <div className="text-[10px] font-mono text-muted-foreground mt-1">14,200 ATOM · cosmosvaloper1am8…ujwy</div>
        </div>
        <div className="rounded-xl rounded-tl-sm bg-[#0b0e15] border border-white/10 px-3.5 py-2 shadow-xl shadow-black/50 max-w-[64%] flex items-center gap-1.5">
          <Check className="w-3 h-3 text-emerald-400" />
          <span className="text-[10px] font-mono text-emerald-400/90">delivered · 0.4s</span>
        </div>
      </div>
    </div>
  )
}

function EspressoDutyVisual() {
  return (
    <div className="relative h-44 overflow-hidden border-b border-white/5 bg-gradient-to-br from-[#DE9E67]/[0.12] via-transparent to-transparent">
      <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 rounded-xl bg-[#0b0a08] border border-white/10 shadow-2xl shadow-black/60 divide-y divide-white/5 transition-transform duration-500 group-hover:-translate-y-[53%]">
        <div className="px-3.5 py-2.5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[9px] font-mono text-foreground/70">espressoduty · :3030</span>
            <span className="flex items-center gap-1 text-[9px] font-mono text-[#DE9E67]">
              <span className="w-1 h-1 rounded-full bg-[#DE9E67]" />
              leader slots
            </span>
          </div>
          <div className="flex gap-[3px]">
            {Array.from({ length: 22 }).map((_, i) => (
              <span
                key={i}
                className={`h-2 flex-1 rounded-[2px] ${i === 16 ? "bg-red-400/90" : "bg-[#DE9E67]/80"}`}
              />
            ))}
          </div>
        </div>
        <div className="px-3.5 py-2 flex items-center gap-2 font-mono text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
          <span className="text-red-400/90">missed leader slot · alert sent</span>
        </div>
        <div className="px-3.5 py-2 flex items-center gap-2 font-mono text-[10px]">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="text-emerald-400/90">node healthy · synced</span>
        </div>
      </div>
    </div>
  )
}

function ApiVisual() {
  return (
    <div className="relative h-60 overflow-hidden border-b border-white/5 bg-gradient-to-br from-accent/[0.07] via-transparent to-transparent">
      <div
        className="absolute inset-x-0 top-0 h-32 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(56,189,248,0.30) 1px, transparent 1px), radial-gradient(rgba(99,102,241,0.22) 1px, transparent 1px)",
          backgroundSize: "10px 10px, 16px 16px",
          backgroundPosition: "0 0, 5px 8px",
          maskImage: "linear-gradient(180deg, black 20%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, black 20%, transparent)",
        }}
      />

      <div className="absolute top-10 left-12 -right-16 -bottom-6 rounded-tl-2xl bg-[#0d1117] border border-white/10 shadow-[0_28px_70px_-16px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.07] font-mono text-[10px]">
          <span className="flex gap-1.5 mr-1">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]/70" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]/70" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]/70" />
          </span>
          <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded px-1.5 py-0.5">
            GET
          </span>
          <span className="text-muted-foreground">/monad-api/staking/pool</span>
          <span className="text-emerald-400/80 ml-3">200 OK</span>
        </div>
        <div className="flex font-mono text-[10.5px] leading-[1.9]">
          <div className="px-3 py-2.5 text-right text-muted-foreground/40 select-none border-r border-white/[0.05]">
            {[1, 2, 3, 4, 5, 6, 7].map((n) => (
              <div key={n}>{n}</div>
            ))}
          </div>
          <div className="px-4 py-2.5">
            <div className="text-muted-foreground">{"{"}</div>
            <div className="pl-4">
              <span className="text-sky-300">"success"</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-violet-300">true</span>
              <span className="text-muted-foreground">,</span>
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"total_staked"</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-amber-300">15073654424.53</span>
              <span className="text-muted-foreground">,</span>
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"apr"</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-amber-300">13.09</span>
              <span className="text-muted-foreground">,</span>
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"active_validators"</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-amber-300">198</span>
              <span className="text-muted-foreground">,</span>
            </div>
            <div className="pl-4">
              <span className="text-sky-300">"epoch"</span>
              <span className="text-muted-foreground">: </span>
              <span className="text-amber-300">1711</span>
            </div>
            <div className="text-muted-foreground">{"}"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function RpcVisual() {
  return (
    <div className="relative h-60 overflow-hidden border-b border-white/5">
      <div
        className="absolute inset-x-0 top-0 h-36 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(52,211,153,0.32) 1px, transparent 1px), radial-gradient(rgba(56,189,248,0.20) 1px, transparent 1px)",
          backgroundSize: "10px 10px, 16px 16px",
          backgroundPosition: "0 0, 5px 8px",
          maskImage: "linear-gradient(180deg, black 25%, transparent)",
          WebkitMaskImage: "linear-gradient(180deg, black 25%, transparent)",
        }}
      />
      <div className="absolute -top-10 right-10 w-56 h-56 rounded-full bg-emerald-500/[0.05] blur-3xl pointer-events-none" />

      <div className="absolute left-1/2 -translate-x-1/2 top-12 w-[300px] rounded-2xl bg-[#0d1117]/95 backdrop-blur border border-white/10 shadow-[0_28px_70px_-16px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:-translate-y-1.5">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.07]">
          <span className="text-[11px] font-medium text-foreground/85">Huginn Monad RPC</span>
          <span className="text-muted-foreground/50 text-xs leading-none">×</span>
        </div>
        <div className="px-5 pt-4 pb-4">
          <div className="relative w-44 mx-auto">
            <svg viewBox="0 0 120 64" className="w-full">
              <path
                d="M10 58 A50 50 0 0 1 110 58"
                fill="none"
                stroke="rgba(255,255,255,0.08)"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <path
                d="M10 58 A50 50 0 0 1 104 33"
                fill="none"
                stroke="url(#rpcGauge)"
                strokeWidth="9"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="rpcGauge" x1="0" y1="1" x2="1" y2="0">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#34d399" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-x-0 bottom-0 text-center">
              <div className="text-xl font-bold text-foreground tracking-tight leading-none">99.98%</div>
              <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground mt-1">
                uptime · 30 days
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-4 pt-3 border-t border-white/[0.06] font-mono text-[10px]">
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              rpc · operational
            </span>
            <span className="flex items-center gap-1.5 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              wss · operational
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

const products = [
  {
    name: "Cosmos.Wiki",
    tagline: "Knowledge Base",
    description: "Network docs, guides, and handbooks for the whole Cosmos ecosystem, all in one place.",
    cta: "Visit Cosmos.Wiki",
    link: "https://cosmos.wiki",
    visual: () => <BrandVisual src="/images/cosmoswiki.jpg" alt="Cosmos.Wiki" />,
  },
  {
    name: "Huginn Guard",
    tagline: "Security Bot",
    description:
      "Watches your wallets and validators, and pings you on Telegram the moment something needs attention.",
    cta: "Open in Telegram",
    link: "https://t.me/Huginn_GuardBot",
    visual: GuardVisual,
  },
  {
    name: "Huginn TV",
    tagline: "Media",
    description: "Tutorials, interviews, and ecosystem coverage from a team that runs validators every day.",
    cta: "Watch Huginn TV",
    link: "https://huginn.tv",
    visual: () => <BrandVisual src="/images/huginntv.jpg" alt="Huginn TV" position="32% center" />,
  },
  {
    name: "Monval",
    tagline: "Validator Toolkit",
    description: "Everything a Monad validator needs: snapshots, forkpoints, RPC lists, and battle-tested CLI recipes.",
    cta: "Open Monval",
    link: "https://monval.huginn.tech",
    visual: () => <BrandVisual src="/images/monval.png" alt="Monval" position="left center" />,
  },
  {
    name: "Monadoring",
    tagline: "Monitoring",
    description: "Open-source watchdog for Monad validators. Skipped blocks and chain halts go straight to your pager.",
    cta: "View on GitHub",
    link: "https://github.com/Huginn-Tech/monadoring",
    visual: () => <BrandVisual src="/images/monadoring.png" alt="Monadoring" position="top" />,
  },
  {
    name: "EspressoDuty",
    tagline: "Monitoring",
    description:
      "Uptime monitoring and alerting for Espresso validators. Missed leader slots and node health, pushed to Telegram, Discord, Slack, or PagerDuty.",
    cta: "View on GitHub",
    link: "https://github.com/s0urledd/espressoduty",
    visual: EspressoDutyVisual,
  },
]

const infra = [
  {
    name: "Validator & Staking API",
    tagline: "REST API",
    description:
      "Live Monad validator, uptime, and staking data over a clean REST API. Free on Mainnet and Testnet, no key required.",
    meta: ["15+ endpoints", "60 req/min", "Mainnet · Testnet"],
    cta: "Explore the API",
    link: "https://validator-api.huginn.tech/monad-api",
    visual: ApiVisual,
  },
  {
    name: "Free Monad RPC & WSS",
    tagline: "Public Endpoints",
    description:
      "Public JSON-RPC and WebSocket endpoints on our validator infrastructure, with uptime tracked transparently on a live status page.",
    meta: ["JSON-RPC", "WebSocket", "Live status"],
    cta: "View Endpoints & Status",
    link: "https://monad-status.huginn.tech/",
    visual: RpcVisual,
  },
]

export function ProductsSection() {
  return (
    <section id="products" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Built by Huginn
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Our Products</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Tools we built for our own validator operations, now open to everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <Card
              key={product.name}
              className="group relative overflow-hidden p-0 gap-0 bg-card/60 backdrop-blur-sm border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-500 flex flex-col lg:col-span-2"
            >
              <product.visual />

              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-accent/80 bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1 shrink-0">
                    {product.tagline}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{product.description}</p>

                <Button
                  variant="outline"
                  className="w-full group/btn bg-transparent hover:bg-accent/10 hover:border-accent/50"
                  asChild
                >
                  <a href={product.link} target="_blank" rel="noopener noreferrer" aria-label={product.cta}>
                    {product.cta}
                    <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-7xl mx-auto mt-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center gap-2.5 shrink-0">
              <Zap className="w-4 h-4 text-accent" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Developer Infrastructure
              </h3>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {infra.map((item) => (
              <Card
                key={item.name}
                className="group relative overflow-hidden p-0 gap-0 bg-card/60 backdrop-blur-sm border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <item.visual />

                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-accent/80 bg-accent/10 border border-accent/20 rounded-full px-2.5 py-1 shrink-0">
                      {item.tagline}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6 flex-grow">
                    {item.meta.map((m) => (
                      <span
                        key={m}
                        className="text-[10px] font-mono text-muted-foreground bg-black/30 border border-white/5 rounded px-2 py-1"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group/btn bg-transparent hover:bg-accent/10 hover:border-accent/50"
                    asChild
                  >
                    <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={item.cta}>
                      {item.cta}
                      <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
