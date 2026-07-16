import Link from "next/link"
import { Github, Send } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="text-2xl font-bold mb-4 text-foreground">Huginn Tech</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering blockchain innovation with reliable tools and services
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Networks</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#networks" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mainnet
                </Link>
              </li>
              <li>
                <Link href="#networks" className="text-muted-foreground hover:text-foreground transition-colors">
                  Testnet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Products</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="https://cosmos.wiki"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Cosmos.Wiki
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/Huginn_GuardBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Huginn Guard
                </a>
              </li>
              <li>
                <a
                  href="https://huginn.tv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Huginn TV
                </a>
              </li>
              <li>
                <a
                  href="https://monval.huginn.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Monval
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Huginn-Tech/monadoring"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Monadoring
                </a>
              </li>
              <li>
                <a
                  href="https://validator-api.huginn.tech/monad-api"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Validator API
                </a>
              </li>
              <li>
                <a
                  href="https://monad-status.huginn.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Monad RPC & WSS
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/s0urledd/espressoduty"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  EspressoDuty
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#relayer" className="text-muted-foreground hover:text-foreground transition-colors">
                  IBC Relayer
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.huginn.tech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2025 Huginn Tech. All rights reserved.</p>

          <div className="flex items-center gap-3">
            <a
              href="https://x.com/HuginnStake"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="http://github.com/Huginntech/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://t.me/HuginnTech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg border border-border hover:border-accent hover:bg-accent/10 transition-all flex items-center justify-center"
              aria-label="Telegram"
            >
              <Send className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
