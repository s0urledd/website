import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

interface NetworkCardProps {
  name: string
  ticker: string
  chain: string
  apr: string
  logo: string
  stakeUrl?: string
  linkLabel?: string
}

export function NetworkCard({ name, ticker, chain, apr, logo, stakeUrl, linkLabel }: NetworkCardProps) {
  const content = (
    <>
      <div className="flex items-start justify-between mb-8">
        <span className="w-13 h-13 rounded-lg bg-[#0d1119] border border-white/10 flex items-center justify-center overflow-hidden">
          <Image src={logo || "/placeholder.svg"} alt={name} width={32} height={32} className="w-8 h-8" />
        </span>
        <ArrowUpRight
          className={`w-4 h-4 mt-0.5 transition-all ${
            stakeUrl
              ? "text-muted-foreground/40 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              : "text-muted-foreground/20"
          }`}
        />
      </div>

      <div className="font-semibold text-[15px] text-foreground tracking-tight">{name}</div>
      <div className="text-[11px] font-mono text-muted-foreground mt-0.5 mb-5">{ticker}</div>

      {apr !== "0" ? (
        <div className="flex items-baseline justify-between border-t border-white/[0.06] pt-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">Est. APR</span>
          <span className="font-mono text-lg text-foreground tabular-nums tracking-tight">{apr}%</span>
        </div>
      ) : stakeUrl ? (
        <div className="border-t border-white/[0.06] pt-4">
          <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground group-hover:text-accent transition-colors">
            {linkLabel || "View Validator"}
          </span>
        </div>
      ) : null}
    </>
  )

  const cardClass =
    "group relative rounded-xl border border-white/[0.07] bg-white/[0.02] p-5 transition-all duration-300"

  if (!stakeUrl) {
    return <div className={`${cardClass} opacity-60`}>{content}</div>
  }

  return (
    <a
      href={stakeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${linkLabel || "Stake"} ${name} on ${chain}`}
      className={`${cardClass} hover:border-white/20 hover:bg-white/[0.04] hover:-translate-y-0.5`}
    >
      {content}
    </a>
  )
}
