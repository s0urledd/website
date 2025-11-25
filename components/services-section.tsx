import { Card } from "@/components/ui/card"

export function ServicesSection() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Services</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Access our comprehensive suite of network services and tools
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 lg:p-10 bg-card border-border">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-2">Cosmos Hub</h3>
              <p className="text-muted-foreground">Full node infrastructure and API services</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="text-sm">
                <div className="text-muted-foreground mb-1 text-xs uppercase tracking-wider">RPC</div>
                <div className="font-mono text-xs text-foreground break-all">cosmoshub-rpc.huginn.tech</div>
              </div>
              <div className="text-sm">
                <div className="text-muted-foreground mb-1 text-xs uppercase tracking-wider">API</div>
                <div className="font-mono text-xs text-foreground break-all">cosmoshub-api.huginn.tech</div>
              </div>
              <div className="text-sm">
                <div className="text-muted-foreground mb-1 text-xs uppercase tracking-wider">Services</div>
                <div className="text-xs text-foreground">Endpoints, Snapshots</div>
              </div>
              <div className="text-sm">
                <div className="text-muted-foreground mb-1 text-xs uppercase tracking-wider">Tools</div>
                <div className="text-xs text-foreground">State Sync, CLI</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
