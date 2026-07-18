const pillars = [
  {
    id: "01",
    title: "Sentry node architecture",
    description: "Signers never touch the public internet. Dedicated sentry nodes take all external traffic.",
  },
  {
    id: "02",
    title: "Hardware key management",
    description: "Per-chain YubiHSM and Ledger setups. No plaintext keys on disk, ever.",
  },
  {
    id: "03",
    title: "Private Tailscale mesh",
    description: "Operator access and node-to-node traffic run over an encrypted private mesh.",
  },
  {
    id: "04",
    title: "Alerting & failover",
    description:
      "Custom pipelines page the on-call engineer within seconds, and rehearsed failover plans take over right away.",
  },
]

const flow = [
  { label: "Public internet", sub: "untrusted traffic", dim: true },
  { label: "Sentry nodes", sub: "firewalled ingress · 3 nodes", dim: false },
  { label: "Private mesh", sub: "Tailscale · encrypted", dim: false },
  { label: "Validator + HSM", sub: "keys never leave hardware", dim: false, core: true },
]

const stats = [
  { value: "100%", label: "keys in hardware" },
  { value: "24/7", label: "on-call rotation" },
  { value: "99.9%", label: "validator uptime" },
  { value: "<60s", label: "alert to engineer" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-20">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
              Why Huginn
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Security by Architecture</h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              Signing keys stay in hardware, validators run behind sentries, and an engineer is always on call. This is
              how every Huginn validator actually runs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] gap-16 lg:gap-24">
            {/* Numbered editorial pillars */}
            <div>
              {pillars.map((pillar, i) => (
                <div
                  key={pillar.id}
                  className={`grid grid-cols-[3.5rem_1fr] gap-6 py-8 ${i > 0 ? "border-t border-white/[0.08]" : ""}`}
                >
                  <span className="text-2xl font-light text-white/20 tabular-nums leading-none pt-0.5">
                    {pillar.id}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">{pillar.title}</h3>
                    <p className="text-[15px] text-muted-foreground leading-relaxed mt-2 max-w-md">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Minimal vertical signing-path flow */}
            <div className="lg:pt-8">
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-8">
                Signing path
              </div>
              <div className="relative">
                <span className="absolute left-[5px] top-2 bottom-2 w-px bg-gradient-to-b from-white/10 via-white/20 to-accent/60" />
                {flow.map((step, i) => (
                  <div key={step.label} className={`relative pl-8 ${i < flow.length - 1 ? "pb-10" : ""}`}>
                    <span
                      className={`absolute left-0 top-1 w-[11px] h-[11px] rounded-full border-2 ${
                        step.core
                          ? "border-accent bg-accent/30 shadow-[0_0_10px_2px_rgba(56,189,248,0.35)]"
                          : step.dim
                            ? "border-white/20 bg-background"
                            : "border-white/40 bg-background"
                      }`}
                    />
                    <div
                      className={`text-[15px] font-medium tracking-tight ${
                        step.dim ? "text-muted-foreground" : step.core ? "text-accent" : "text-foreground"
                      }`}
                    >
                      {step.label}
                    </div>
                    <div className="text-[12px] font-mono text-muted-foreground/70 mt-1">{step.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hairline stats row */}
          <div className="mt-20 pt-8 border-t border-white/[0.08] flex flex-wrap gap-x-14 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold text-foreground tracking-tight">{s.value}</div>
                <div className="text-[13px] text-muted-foreground mt-1.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
