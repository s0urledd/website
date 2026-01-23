"use client"

import { NetworkCard } from "@/components/network-card"
import { useState } from "react"

const networks = [
  {
    name: "Monad",
    chain: "Mainnet",
    apr: "14.38",
    logo: "/logos/monad.png",
    accentColor: "rgba(147, 51, 234, 0.15)",
    stakeUrl: "https://monadvision.com/validator/0x67a3aEe77920Fa694B6FD7c7cf875493762A99f9",
  },
  {
    name: "Cosmos Hub",
    chain: "Mainnet",
    apr: "17.06",
    logo: "/logos/cosmoshub.png",
    accentColor: "rgba(47, 86, 233, 0.15)",
    stakeUrl:
      "https://wallet.keplr.app/chains/cosmos-hub?modal=staking&chain=cosmoshub-4&validator_address=cosmosvaloper1am8wmhwta4swx8f4quvffu7hqw48aujwypp0ew&step_id=2",
  },
  {
    name: "Starknet",
    chain: "Mainnet",
    apr: "9.64",
    logo: "/logos/starknet.png",
    accentColor: "rgba(236, 64, 122, 0.15)",
    stakeUrl:
      "https://voyager.online/staking-dashboard?validator=0x03c3085de545Ff2FFC2F267b7DFB87e2977938FD9cDd4c1dE4982313Ac34F872",
  },
  {
    name: "Dymension",
    chain: "Mainnet",
    apr: "2.80",
    logo: "/logos/dymension.png",
    accentColor: "rgba(255, 152, 0, 0.15)",
    stakeUrl:
      "https://wallet.keplr.app/chains/dymension?modal=staking&chain=dymension_1100-1&validator_address=dymvaloper1thw8t8skc07sj5fyh9ggw4qachft6h8p9h4qwv&step_id=2",
  },
  {
    name: "Elys",
    chain: "Mainnet",
    apr: "0",
    logo: "/logos/elys.png",
    accentColor: "rgba(132, 204, 22, 0.15)",
  },
  {
    name: "Humans",
    chain: "Mainnet",
    apr: "24.82",
    logo: "/logos/humans.png",
    accentColor: "rgba(76, 217, 100, 0.15)",
    stakeUrl: "https://restake.app/humans/humanvaloper1tr853jvy38wn6pa05vsqtzt2mzrzpxxnazsmjn/stake",
  },
  {
    name: "Jackal",
    chain: "Mainnet",
    apr: "7.50",
    logo: "/logos/jackal.png",
    accentColor: "rgba(255, 69, 58, 0.15)",
    stakeUrl: "https://restake.app/jackal/jklvaloper1sxnq68tdscu5znhqn408av4vv3g9ka088l2s0j/stake",
  },
  {
    name: "FlixDotFun",
    chain: "Mainnet",
    apr: "5.00",
    logo: "/logos/omniflix.png",
    accentColor: "rgba(191, 90, 242, 0.15)",
    stakeUrl:
      "https://wallet.keplr.app/chains/omniflix?modal=staking&chain=omniflixhub-1&validator_address=omniflixvaloper1nxhlmhaeme4j25d5vac6tk4wgy092xdsu77h4x&step_id=2",
  },
  {
    name: "Quicksilver",
    chain: "Mainnet",
    apr: "23.60",
    logo: "/logos/quicksilver.png",
    accentColor: "rgba(142, 142, 147, 0.15)",
    stakeUrl:
      "https://wallet.keplr.app/chains/quicksilver?modal=staking&chain=quicksilver-2&validator_address=quickvaloper19wp3y9h3h4yz7teevse22zpxa74skahmd6q3z6&step_id=2",
  },
  {
    name: "UX Chain",
    chain: "Mainnet",
    apr: "9.20",
    logo: "/logos/uxchain.png",
    accentColor: "rgba(52, 199, 89, 0.15)",
    stakeUrl:
      "https://wallet.keplr.app/chains/ux?modal=staking&chain=umee-1&validator_address=umeevaloper1vr59ktf5yehvxz06qe889sl4eg0dtak8l2yge3&step_id=2",
  },
  {
    name: "Babylon",
    chain: "Mainnet",
    apr: "3.00",
    logo: "/logos/babylon.png",
    accentColor: "rgba(255, 107, 0, 0.15)",
    stakeUrl:
      "https://www.stakingrewards.com/stake-app?input=bitcoin&type=babylon-staking&provider=huginn&locked=true&best-deal=false",
  },
  {
    name: "Polkadot",
    chain: "Mainnet",
    apr: "11.78",
    logo: "/logos/polkadot.png",
    accentColor: "rgba(230, 0, 122, 0.15)",
    stakeUrl: "https://polkadot.subscan.io/validator/12bUkY5nrGyoXqBpxKDf88z5VQWzaUK83PCgyHtJ1UN1ujjU",
  },
  {
    name: "Axone",
    chain: "Mainnet",
    apr: "10.00",
    logo: "/logos/axone.png",
    accentColor: "rgba(59, 130, 246, 0.15)",
    stakeUrl: "https://explore.axone.xyz/AXONE-MAINNET/staking/axonevaloper1jn9ycc8898lmhl749ng2q58fnum82pj4hd6unf",
  },
  {
    name: "Cosmos Hub",
    chain: "Testnet",
    apr: "0",
    logo: "/logos/cosmoshub.png",
    accentColor: "rgba(47, 86, 233, 0.15)",
  },
  {
    name: "Monad",
    chain: "Testnet",
    apr: "0",
    logo: "/logos/monad.png",
    accentColor: "rgba(147, 51, 234, 0.15)",
  },
  {
    name: "Canton",
    chain: "Testnet",
    apr: "0",
    logo: "/logos/canton.png",
    accentColor: "rgba(59, 130, 246, 0.15)",
  },
]

const categories = ["Mainnet", "Testnet"]

export function NetworksSection() {
  const [activeCategory, setActiveCategory] = useState("Mainnet")

  const filteredNetworks = networks.filter((network) => network.chain === activeCategory)

  return (
    <section id="networks" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-white">Networks</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Stake with confidence across our professionally validated blockchain networks
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">15+</span>
              <span>Chains</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold">$20.4M</span>
              <span>TVL</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-16">
          <div className="inline-flex items-center gap-2 p-1.5 rounded-full bg-card/40 backdrop-blur-md border border-white/10 shadow-xl">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-accent to-accent/80 text-white shadow-lg shadow-accent/30"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredNetworks.map((network) => (
            <NetworkCard key={network.name} {...network} />
          ))}
        </div>
      </div>
    </section>
  )
}
