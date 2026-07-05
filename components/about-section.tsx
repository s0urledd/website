import { Shield, KeyRound, BellRing, Network, Globe, ServerCog, Lock, ArrowRight } from "lucide-react"

const pillars = [
  {
    icon: Shield,
    title: "Sentry node architecture",
    description: "Signers never touch the public internet. Dedicated sentry nodes take all external traffic.",
  },
  {
    icon: KeyRound,
    title: "Hardware key management",
    description: "Per-chain YubiHSM and Ledger setups. No plaintext keys on disk, ever.",
  },
  {
    icon: Network,
    title: "Private Tailscale mesh",
    description: "Operator access and node-to-node traffic run over an encrypted private mesh.",
  },
  {
    icon: BellRing,
    title: "Alerting & failover",
    description:
      "Custom pipelines page the on-call engineer within seconds, and rehearsed per-chain failover plans take over right away.",
  },
]

const stats = [
  { value: "100%", label: "Keys in hardware" },
  { value: "24/7", label: "On-call rotation" },
  { value: "99.9%", label: "Validator uptime" },
  { value: "<60s", label: "Alert to engineer" },
]

function Connector({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3 h-9 ml-7" aria-hidden="true">
      <span className="w-px h-full bg-gradient-to-b from-white/25 to-white/10" />
      <span className="text-[10px] font-mono text-muted-foreground">{label}</span>
    </div>
  )
}

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Why Huginn
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Security by Architecture</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Signing keys stay in hardware, validators run behind sentries, and an engineer is always on call. This is
            how every Huginn
            validator actually runs
          </p>
        </div>

        <div className="max-w-6xl mx-auto rounded-2xl border border-white/10 bg-card/40 backdrop-blur-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 p-8 lg:p-10 lg:border-r border-white/5 flex flex-col justify-center gap-8">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                    <pillar.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{pillar.title}</div>
                    <p className="text-sm text-muted-foreground leading-relaxed mt-1">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-3 p-8 lg:p-10 bg-black/25 border-t lg:border-t-0 border-white/5">
              <div className="flex items-center justify-between mb-7">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Signing Path · Live Architecture
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400" />
                  </span>
                  operational
                </span>
              </div>

              <div className="rounded-xl border border-dashed border-white/15 px-4 py-3">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Public internet
                  </span>
                  <Globe className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <div className="flex flex-wrap gap-2">
                  {["p2p peers", "rpc traffic", "unknown hosts"].map((chip) => (
                    <span
                      key={chip}
                      className="text-[10px] font-mono text-muted-foreground bg-white/[0.03] border border-white/5 rounded px-2 py-1"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <Connector label="firewalled ingress · sentries only" />

              <div className="rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                    Sentry layer · isolated hardware
                  </span>
                  <Shield className="w-3.5 h-3.5 text-muted-foreground" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {["sentry-01", "sentry-02", "sentry-03"].map((node) => (
                    <span
                      key={node}
                      className="flex items-center justify-center gap-1.5 text-[10px] font-mono text-foreground/80 bg-white/[0.03] border border-white/10 rounded-md px-2 py-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-emerald-400 shrink-0" />
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              <Connector label="Tailscale private mesh · encrypted" />

              <div className="rounded-xl border border-accent/25 bg-accent/[0.05] px-4 py-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-accent/90">
                    Private network · no public surface
                  </span>
                  <Lock className="w-3.5 h-3.5 text-accent/80" />
                </div>

                <div className="flex items-stretch gap-2.5">
                  <div className="flex-1 rounded-lg bg-black/30 border border-white/10 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <ServerCog className="w-3.5 h-3.5 text-foreground/70 shrink-0" />
                      <span className="text-[11px] font-mono text-foreground/90">validator node</span>
                    </div>
                    <div className="flex items-center gap-1.5 mt-1.5 text-[10px] font-mono text-emerald-400/90">
                      <span className="w-1 h-1 rounded-full bg-emerald-400" />
                      signing
                    </div>
                  </div>

                  <div className="flex items-center shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>

                  <div className="flex-1 rounded-lg bg-black/30 border border-accent/25 px-3 py-2.5">
                    <div className="flex items-center gap-2">
                      <KeyRound className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="text-[11px] font-mono text-foreground/90">YubiHSM · Ledger</span>
                    </div>
                    <div className="mt-1.5 text-[10px] font-mono text-muted-foreground">keys never leave hardware</div>
                  </div>
                </div>

                <div className="mt-3 pt-3 border-t border-white/5 flex items-center gap-2 text-[10px] font-mono">
                  <BellRing className="w-3 h-3 text-amber-400/90 shrink-0" />
                  <span className="text-muted-foreground">custom alerting</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground/60 shrink-0" />
                  <span className="text-muted-foreground">on-call engineer paged</span>
                  <span className="ml-auto text-emerald-400/90">&lt;60s</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/5 divide-x divide-white/5">
            {stats.map((stat) => (
              <div key={stat.label} className="px-6 py-6 text-center">
                <div className="text-2xl font-bold text-foreground tracking-tight">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
