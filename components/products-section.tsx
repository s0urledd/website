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

function ApiVisual() {
  return (
    <div className="relative h-48 overflow-hidden border-b border-white/5 bg-gradient-to-br from-accent/[0.08] via-transparent to-transparent">
      <div className="absolute inset-x-8 top-6 bottom-0 rounded-t-xl bg-[#0b0e15] border border-white/10 border-b-0 shadow-2xl shadow-black/60 transition-transform duration-500 group-hover:-translate-y-1">
        <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 font-mono text-[10px]">
          <span className="text-[9px] font-semibold text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded px-1.5 py-0.5">
            GET
          </span>
          <span className="text-muted-foreground">/monad-api/staking/pool</span>
          <span className="ml-auto text-emerald-400/80">200</span>
        </div>
        <div className="px-4 py-3 font-mono text-[10.5px] leading-relaxed">
          <div className="text-muted-foreground">{"{"}</div>
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
  )
}

function RpcVisual() {
  const bars = [
    100, 100, 100, 100, 98, 100, 100, 100, 100, 100, 100, 96, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99,
    100, 100, 100, 100, 100, 100, 100,
  ]
  return (
    <div className="relative h-48 overflow-hidden border-b border-white/5 bg-gradient-to-br from-emerald-500/[0.06] via-transparent to-transparent">
      <div className="absolute inset-x-8 top-6 bottom-0 rounded-t-xl bg-[#0b0e15] border border-white/10 border-b-0 shadow-2xl shadow-black/60 p-4 space-y-4 transition-transform duration-500 group-hover:-translate-y-1">
        {["rpc.monad.huginn.tech", "wss.monad.huginn.tech"].map((endpoint) => (
          <div key={endpoint}>
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[10px] text-foreground/80">{endpoint}</span>
              <span className="flex items-center gap-1.5 text-[10px] text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                Operational
              </span>
            </div>
            <div className="flex gap-[3px]">
              {bars.map((v, i) => (
                <span
                  key={i}
                  className={`h-3.5 flex-1 rounded-[2px] ${v === 100 ? "bg-emerald-400/70" : "bg-amber-400/70"}`}
                />
              ))}
            </div>
          </div>
        ))}
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
          {products.map((product, index) => (
            <Card
              key={product.name}
              className={`group relative overflow-hidden p-0 gap-0 bg-card/60 backdrop-blur-sm border-border hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-500 flex flex-col lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
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
