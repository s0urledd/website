import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, BookOpen, Shield, Video, Bot } from "lucide-react"

export function ProductsSection() {
  const products = [
    {
      icon: BookOpen,
      iconImage: "/logos/cosmoswiki.png",
      name: "Cosmos.Wiki",
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
      description:
        "Educational content and insights about blockchain technology, validator operations, and the Cosmos ecosystem.",
      features: ["Technical tutorials", "Ecosystem updates", "Validator guides", "Expert interviews"],
      link: "https://huginn.tv",
    },
    {
      icon: Shield,
      iconImage: "/logos/monval.png",
      name: "Monval",
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
    <section id="products" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Our Products</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Innovative solutions designed to enhance your blockchain experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="p-8 bg-card border-border hover:border-accent/50 transition-all flex flex-col">
              <div className="w-12 h-12 mb-5 flex items-center justify-start">
                {product.iconImage ? (
                  <Image
                    src={product.iconImage || "/placeholder.svg"}
                    alt={product.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                ) : (
                  <product.icon className="w-12 h-12 text-accent" />
                )}
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-3">{product.name}</h3>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{product.description}</p>

              <ul className="space-y-2 mb-8 flex-grow">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full group bg-transparent" asChild>
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  Learn More
                  <ExternalLink className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
