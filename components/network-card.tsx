import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"

interface NetworkCardProps {
  name: string
  chain: string
  apr: string
  logo: string
  accentColor?: string
  stakeUrl?: string
}

export function NetworkCard({ name, chain, apr, logo, stakeUrl }: NetworkCardProps) {
  return (
    <Card className="group relative overflow-hidden border border-border bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-accent/10 transition-all duration-500 hover:border-accent/50 hover:-translate-y-1">
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 70%)",
        }}
      />

      <div className="p-6 relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center overflow-hidden backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
              <Image src={logo || "/placeholder.svg"} alt={name} width={36} height={36} className="w-9 h-9" />
            </div>
            <div>
              <h3 className="font-semibold text-base text-foreground group-hover:text-accent transition-colors">
                {name}
              </h3>
              <Badge variant="secondary" className="mt-1 text-xs font-normal">
                {chain}
              </Badge>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
            {apr === "0" ? "—" : `${apr}%`}
          </div>
          <p className="text-xs text-muted-foreground uppercase tracking-wider">APR</p>
        </div>

        {stakeUrl ? (
          <Button className="w-full group/btn text-sm font-medium bg-transparent" variant="outline" size="sm" asChild>
            <a href={stakeUrl} target="_blank" rel="noopener noreferrer" aria-label={`Stake ${name} on ${chain}`}>
              Stake Now
              <ArrowUpRight className="ml-2 w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          </Button>
        ) : (
          <Button
            className="w-full group/btn text-sm font-medium bg-transparent"
            variant="outline"
            size="sm"
            disabled
            aria-label={`Staking for ${name} coming soon`}
          >
            Stake Now
            <ArrowUpRight className="ml-2 w-3.5 h-3.5 opacity-50" />
          </Button>
        )}
      </div>
    </Card>
  )
}
