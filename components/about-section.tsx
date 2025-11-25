import { Card } from "@/components/ui/card"
import { Shield, Key, Activity, Server } from "lucide-react"

export function AboutSection() {
  const features = [
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Multiple security layers protecting your assets with industry-standard protocols",
    },
    {
      icon: Key,
      title: "Key Management",
      description: "Secure key management system with hardware security modules (HSM)",
    },
    {
      icon: Activity,
      title: "24/7 Monitoring",
      description: "Round-the-clock monitoring of all systems and networks",
    },
    {
      icon: Server,
      title: "Secure Infrastructure",
      description: "Enterprise-grade infrastructure with redundancy and backup systems",
    },
  ]

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/[0.02] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Enterprise-Grade Security</h2>
          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Your assets are protected by state-of-the-art security measures and continuous monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 bg-card/50 border-border hover:border-blue-500/50 hover:bg-card/70 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                <feature.icon className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-xs">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
