import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Shield, Video, Bot, Check } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: BookOpen,
      iconImage: "/logos/cosmoswiki.png",
      name: "Cosmos.Wiki",
      tagline: "Knowledge Base",
      description:
        "Your comprehensive guide to the Cosmos ecosystem. Stay informed with detailed documentation, tutorials, and ecosystem updates.",
      features: [
        "In-depth network documentation",
        "Step-by-step tutorials",
        "Ecosystem updates",
        "Technical resources",
      ],
      link: "https://cosmos.wiki",
    },
    {
      icon: Shield,
      iconImage: "/logos/huginnguard.png",
      name: "Huginn Guard",
      tagline: "Security Bot",
      description:
        "Your personal security and monitoring assistant for the Cosmos ecosystem. Stay informed with real-time notifications.",
      features: [
        "Real-time unbonding token alerts",
        "Validator jail notifications",
        "Instant updates directly to Telegram",
        "Customizable wallet monitoring",
      ],
      link: "https://t.me/Huginn_GuardBot",
    },
    {
      icon: Video,
      iconImage: "/logos/huginntv.png",
      name: "Huginn TV",
      tagline: "Media & Education",
      description:
        "Educational content and insights about blockchain technology, validator operations, and the Cosmos ecosystem.",
      features: ["Technical tutorials", "Ecosystem updates", "Validator guides", "Expert interviews"],
      link: "https://huginn.tv",
    },
    {
      icon: Shield,
      iconImage: "/logos/monval.png",
      name: "Monval",
      tagline: "Validator Toolkit",
      description:
        "Complete toolkit for Monad validator setup and management. Simplify your validator operations with comprehensive tools and guides.",
      features: [
        "Open source tools",
        "Snapshots & forkpoint access",
        "RPC endpoints management",
        "Troubleshooting CLI commands",
      ],
      link: "https://monval.huginn.tech",
    },
    {
      icon: Bot,
      name: "Monadoring Bot",
      tagline: "Monitoring",
      description:
        "Real-time monitoring solution for Monad validators. Get instant alerts for skipped blocks, timeouts, and chain issues.",
      features: [
        "Instant timeout & skipped block alerts",
        "Chain halt detection",
        "Telegram & PagerDuty integration",
        "Discord bridge support",
      ],
      link: "https://github.com/Huginntech/monadoring-telegram-bot",
    },
  ]

  return (
    <section id="products" className="py-24 lg:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Built by Huginn
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Our Products</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Innovative solutions designed to enhance your blockchain experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden p-8 bg-card/60 backdrop-blur-sm border-border hover:border-accent/50 hover:shadow-xl hover:shadow-accent/10 hover:-translate-y-1 transition-all duration-500 flex flex-col lg:col-span-2 ${
                index === 3 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/20">
                  {product.iconImage ? (
                    <Image
                      src={product.iconImage || "/placeholder.svg"}
                      alt={product.name}
                      width={36}
                      height={36}
                      className="object-contain w-9 h-9"
                    />
                  ) : (
                    <product.icon className="w-7 h-7 text-accent" />
                  )}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent/80 bg-accent/10 border border-accent/20 rounded-full px-3 py-1">
                  {product.tagline}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

              <ul className="space-y-2.5 mb-8 flex-grow">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2.5">
                    <span className="mt-0.5 w-4 h-4 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-accent" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group/btn bg-transparent hover:bg-accent/10 hover:border-accent/50" asChild>
                <a href={product.link} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${product.name}`}>
                  Learn More
                  <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
