import { Card } from "@/components/ui/card"
import { Shield, KeyRound, BellRing, Network, RefreshCcw } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Why Huginn
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Enterprise-Grade Security</h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Signing keys in hardware, validators behind sentries, engineers on call — security is our operating model,
            not a feature checkbox
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          <Card className="group p-7 bg-card/50 border-border hover:border-accent/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 lg:col-span-2">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {["Isolated signers", "Dedicated hardware"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-muted-foreground bg-black/30 border border-white/5 rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Sentry Node Architecture</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every validator runs behind dedicated sentry nodes on separate operational machines. Public traffic only
              ever reaches the sentries — our signing infrastructure stays fully isolated from the open internet.
            </p>
          </Card>

          <Card className="group p-7 bg-card/50 border-border hover:border-accent/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                <KeyRound className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {["YubiHSM", "Ledger"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-muted-foreground bg-black/30 border border-white/5 rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Hardware Key Management</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chain-specific key setups backed by YubiHSM and Ledger devices. Keys live in hardware — never in
              plaintext on disk.
            </p>
          </Card>

          <Card className="group p-7 bg-card/50 border-border hover:border-accent/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                <Network className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                <span className="text-[10px] font-mono text-muted-foreground bg-black/30 border border-white/5 rounded px-2 py-1">
                  Tailscale
                </span>
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Private Mesh Networking</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Operator and node-to-node traffic flows over a Tailscale-secured private mesh. No publicly exposed
              management surfaces, anywhere.
            </p>
          </Card>

          <Card className="group p-7 bg-card/50 border-border hover:border-accent/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                <BellRing className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {["24/7 on-call"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-muted-foreground bg-black/30 border border-white/5 rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Custom Alerting Systems</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Purpose-built alerting pipelines watch signing, peering, and chain health per network — and page the
              on-call engineer within seconds, around the clock.
            </p>
          </Card>

          <Card className="group p-7 bg-card/50 border-border hover:border-accent/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 lg:col-span-2">
            <div className="flex items-start justify-between gap-4 mb-5">
              <div className="w-11 h-11 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                <RefreshCcw className="w-5 h-5 text-accent" />
              </div>
              <div className="flex flex-wrap gap-2 justify-end">
                {["Per-chain playbooks", "Standby infra"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono text-muted-foreground bg-black/30 border border-white/5 rounded px-2 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Failover & Instant Response</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every chain has its own failover and backup plan — rehearsed, documented, and kept warm. When something
              breaks, standby infrastructure and an engineer are on it immediately, not after a support ticket.
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
