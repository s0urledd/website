export function StatsSection() {
  const stats = [
    {
      value: "99.9%",
      label: "Uptime",
    },
    {
      value: "18+",
      label: "Networks",
    },
    {
      value: "24/7",
      label: "Monitoring",
    },
    {
      value: "Enterprise",
      label: "Security",
    },
  ]

  return (
    <section className="py-20 lg:py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
