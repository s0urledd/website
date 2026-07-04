"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Bot, ArrowRight, Code2, Server, RefreshCw } from "lucide-react"
import { useState } from "react"

const productGroups = [
  {
    label: "Infrastructure & Tools",
    items: [
      {
        name: "Monval",
        description: "Complete toolkit for Monad validators",
        href: "https://monval.huginn.tech",
        iconImage: "/logos/monval.png",
      },
      {
        name: "Monadoring",
        description: "Real-time Monad validator monitoring",
        href: "https://github.com/Huginn-Tech/monadoring",
        icon: Bot,
      },
      {
        name: "Validator & Staking API",
        description: "Monad validator, uptime & staking data",
        href: "https://validator-api.huginn.tech/monad-api",
        icon: Code2,
      },
      {
        name: "Monad RPC & WSS",
        description: "Free public endpoints with live status",
        href: "https://monad-status.huginn.tech/",
        icon: Server,
      },
    ],
  },
  {
    label: "Security & Interchain",
    items: [
      {
        name: "Huginn Guard",
        description: "Security & alert bot on Telegram",
        href: "https://t.me/Huginn_GuardBot",
        iconImage: "/logos/huginnguard.png",
      },
      {
        name: "IBC Relayer",
        description: "Packet relaying for Cosmos SDK chains",
        href: "#relayer",
        icon: RefreshCw,
        internal: true,
      },
    ],
  },
  {
    label: "Education & Media",
    items: [
      {
        name: "Cosmos.Wiki",
        description: "Cosmos ecosystem knowledge base",
        href: "https://cosmos.wiki",
        iconImage: "/logos/cosmoswiki.png",
      },
      {
        name: "Huginn TV",
        description: "Tutorials & ecosystem videos",
        href: "https://huginn.tv",
        iconImage: "/logos/huginntv.png",
      },
    ],
  },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <a
        href="https://stake.espresso.network/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-gradient-to-r from-accent/90 via-accent to-accent/90 px-4 py-2 text-center group"
      >
        <span className="text-xs sm:text-sm font-medium text-white">
          Now validating on Espresso Network
        </span>
        <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold text-white underline-offset-4 group-hover:underline">
          Stake ESP
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </a>

      <div className="bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logos/huginn-logo.png"
                alt="Huginn Tech"
                width={40}
                height={40}
                className="transition-transform group-hover:scale-105"
                priority
              />
              <div className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                Huginn
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-10">
              <Link
                href="#networks"
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors"
              >
                Networks
              </Link>

              <div
                className="relative"
                onMouseEnter={() => setProductsOpen(true)}
                onMouseLeave={() => setProductsOpen(false)}
              >
                <Link
                  href="#products"
                  className="flex items-center gap-1.5 text-sm font-semibold text-foreground/90 hover:text-accent transition-colors py-2"
                  aria-expanded={productsOpen}
                  aria-haspopup="true"
                >
                  Products
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                  />
                </Link>

                {productsOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[560px]">
                    <div className="rounded-2xl border border-white/10 bg-background/95 backdrop-blur-xl shadow-2xl shadow-black/50 p-6">
                      <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                        {productGroups.map((group) => (
                          <div key={group.label} className={group.label === "Infrastructure & Tools" ? "row-span-2" : ""}>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground mb-3">
                              {group.label}
                            </div>
                            <div className="space-y-1">
                              {group.items.map((item) => (
                                <a
                                  key={item.name}
                                  href={item.href}
                                  {...(item.internal
                                    ? { onClick: () => setProductsOpen(false) }
                                    : { target: "_blank", rel: "noopener noreferrer" })}
                                  className="flex items-start gap-3 rounded-xl p-2.5 -mx-2.5 hover:bg-white/5 transition-colors group/item"
                                >
                                  <span className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 overflow-hidden">
                                    {item.iconImage ? (
                                      <Image
                                        src={item.iconImage}
                                        alt={item.name}
                                        width={22}
                                        height={22}
                                        className="w-[22px] h-[22px] object-contain"
                                      />
                                    ) : item.icon ? (
                                      <item.icon className="w-4.5 h-4.5 text-accent" />
                                    ) : null}
                                  </span>
                                  <span>
                                    <span className="block text-sm font-semibold text-foreground group-hover/item:text-accent transition-colors">
                                      {item.name}
                                    </span>
                                    <span className="block text-xs text-muted-foreground leading-snug mt-0.5">
                                      {item.description}
                                    </span>
                                  </span>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-5 pt-4 border-t border-white/10">
                        <Link
                          href="#products"
                          onClick={() => setProductsOpen(false)}
                          className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:gap-2.5 transition-all"
                        >
                          View all products
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="https://blog.huginn.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors"
              >
                Blog
              </a>
              <Link
                href="#events"
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors"
              >
                Events
              </Link>
              <Link
                href="#contact"
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden lg:flex items-center gap-4">
              <Link href="#networks">
                <Button size="sm" className="text-sm font-medium">
                  Stake Now
                </Button>
              </Link>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden border-t border-border bg-background">
            <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
              <Link
                href="#networks"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors py-3"
              >
                Networks
              </Link>
              <Link
                href="#products"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors py-3"
              >
                Products
              </Link>
              <a
                href="https://blog.huginn.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors py-3"
              >
                Blog
              </a>
              <Link
                href="#events"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors py-3"
              >
                Events
              </Link>
              <Link
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-foreground/90 hover:text-accent transition-colors py-3"
              >
                Contact
              </Link>
              <div className="flex flex-col gap-3 pt-6 border-t border-border mt-4">
                <Link href="#networks" onClick={() => setMobileMenuOpen(false)}>
                  <Button size="sm" className="w-full">
                    Stake Now
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
