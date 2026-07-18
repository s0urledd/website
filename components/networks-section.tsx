"use client"

import { NetworkCard } from "@/components/network-card"
import { useState } from "react"

const networks = [
  {
    name: "Monad",
    ticker: "MON",
    chain: "Mainnet",
    apr: "13.09",
    logo: "/logos/monad.png",
    stakeUrl: "https://monadvision.com/validator/0x67a3aEe77920Fa694B6FD7c7cf875493762A99f9",
  },
  {
    name: "Cosmos Hub",
    ticker: "ATOM",
    chain: "Mainnet",
    apr: "17.06",
    logo: "/logos/cosmoshub.png",
    stakeUrl:
      "https://wallet.keplr.app/chains/cosmos-hub?modal=staking&chain=cosmoshub-4&validator_address=cosmosvaloper1am8wmhwta4swx8f4quvffu7hqw48aujwypp0ew&step_id=2",
  },
  {
    name: "Canton",
    ticker: "CC",
    chain: "Mainnet",
    apr: "0",
    logo: "/logos/canton-logo.png",
    stakeUrl:
      "https://www.cantonscan.com/party/jubileemarkets-validator-1%3A%3A122083160dd4450408fcda85e6e685865c403dd89a50a4f42041bcbd94d95a5cba6f",
    linkLabel: "View Validator",
  },
  {
    name: "Starknet",
    ticker: "STRK",
    chain: "Mainnet",
    apr: "9.64",
    logo: "/logos/starknet.png",
    stakeUrl:
      "https://voyager.online/staking-dashboard?validator=0x03c3085de545Ff2FFC2F267b7DFB87e2977938FD9cDd4c1dE4982313Ac34F872",
  },
  {
    name: "Dymension",
    ticker: "DYM",
    chain: "Mainnet",
    apr: "2.80",
    logo: "/logos/dymension.png",
    stakeUrl:
      "https://wallet.keplr.app/chains/dymension?modal=staking&chain=dymension_1100-1&validator_address=dymvaloper1thw8t8skc07sj5fyh9ggw4qachft6h8p9h4qwv&step_id=2",
  },
  {
    name: "Polkadot",
    ticker: "DOT",
    chain: "Mainnet",
    apr: "11.78",
    logo: "/logos/polkadot.png",
    stakeUrl: "https://polkadot.subscan.io/validator/12bUkY5nrGyoXqBpxKDf88z5VQWzaUK83PCgyHtJ1UN1ujjU",
  },
  {
    name: "Humans",
    ticker: "HEART",
    chain: "Mainnet",
    apr: "24.82",
    logo: "/logos/humans.png",
    stakeUrl: "https://restake.app/humans/humanvaloper1tr853jvy38wn6pa05vsqtzt2mzrzpxxnazsmjn/stake",
  },
  {
    name: "Babylon",
    ticker: "BABY",
    chain: "Mainnet",
    apr: "3.00",
    logo: "/logos/babylon.svg",
    stakeUrl:
      "https://www.stakingrewards.com/stake-app?input=bitcoin&type=babylon-staking&provider=huginn&locked=true&best-deal=false",
  },
  {
    name: "Espresso",
    ticker: "ESP",
    chain: "Mainnet",
    apr: "4.14",
    logo: "/logos/espresso.svg",
    stakeUrl: "https://stake.espresso.network/",
  },
  {
    name: "Cosmos Hub",
    ticker: "ATOM",
    chain: "Testnet",
    apr: "0",
    logo: "/logos/cosmoshub.png",
  },
  {
    name: "Monad",
    ticker: "MON",
    chain: "Testnet",
    apr: "0",
    logo: "/logos/monad.png",
  },
  {
    name: "Canton",
    ticker: "CC",
    chain: "Testnet",
    apr: "0",
    logo: "/logos/canton-logo.png",
  },
]

const categories = ["Mainnet", "Testnet"]

export function NetworksSection({ monadApr }: { monadApr?: string | null }) {
  const [activeCategory, setActiveCategory] = useState("Mainnet")

  const filteredNetworks = networks
    .filter((network) => network.chain === activeCategory)
    .map((network) =>
      network.name === "Monad" && network.chain === "Mainnet" && monadApr ? { ...network, apr: monadApr } : network,
    )

  return (
    <section id="networks" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Stake with us
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight text-white">Networks</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-light">
            {networks.length} chains · $20.4M staked · 99.9% uptime
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-1 p-1 rounded-lg bg-white/[0.04] border border-white/[0.08]">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-md text-[13px] font-medium transition-all ${
                  activeCategory === category
                    ? "bg-white/[0.08] text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredNetworks.map((network) => (
            <NetworkCard key={`${network.name}-${network.chain}`} {...network} />
          ))}
        </div>
      </div>
    </section>
  )
}
