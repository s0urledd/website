"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Calendar, MapPin, ExternalLink, Play } from "lucide-react"
import { useState, useEffect } from "react"

const events = [
  {
    title: "ATOM ISTANBUL 2025",
    images: ["/images/18ac5ba2-619d-4a08-8bdb.jpeg", "/images/3bc7b25f-0183-4dc8-8ac6.jpeg"],
    description: "Cosmos Hub ecosystem events and community gatherings",
    date: "2025",
    network: "Cosmos Hub",
    lumaLink: "http://lu.ma/3swt6vod",
    lumaLink2: "https://luma.com/z9ixu22y",
  },
  {
    title: "io.net Event 2025",
    images: ["/images/ionet-202.jpg", "/images/ionet-202025-201.jpg", "/images/ionet.jpg"],
    description: "The Internet of GPUs is Finally Here - Community gathering with io.net",
    date: "2025",
    network: "io.net",
    lumaLink: "https://lu.ma/ionet2025",
  },
  {
    title: "Honeypot Finance Meetup 2025 (Berachain)",
    images: ["/images/honeypot-202025.jpg", "/images/honeypot-20finance-201.jpg"],
    description: "Berachain ecosystem event and developer workshop with the community",
    date: "2025",
    network: "Berachain",
    lumaLink: "https://luma.com/8xpnkqe5",
  },
  {
    title: "FlixFest 2023",
    images: ["/images/flixfest-202023.jpg", "/images/flixfest-202023-201.jpg"],
    description: "FLIX FEST Istanbul organized by Huginn.Tech in partnership with Inter Protocol",
    date: "2023",
    network: "FlixDotFun",
    lumaLink: "https://lu.ma/flixfest2023",
    videoLink: "https://www.youtube.com/watch?v=9S5Q7XsiT7U",
  },
]

type Event = (typeof events)[number]

export function EventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [isPaused])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <section id="events" className="py-24 lg:py-32 relative bg-white/[0.015]">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.03] to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent mb-4">
            Community
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Events</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Join us at our community events and workshops organized at our office
          </p>
        </div>

        <div
          className="max-w-6xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <EventCard key={index} event={event} isActive={index === currentSlide} />
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/70 backdrop-blur-md border border-white/10 hover:bg-background hover:border-accent/50 hover:scale-105 transition-all flex items-center justify-center z-10 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background/70 backdrop-blur-md border border-white/10 hover:bg-background hover:border-accent/50 hover:scale-105 transition-all flex items-center justify-center z-10 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="flex items-center gap-2">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "w-8 bg-accent shadow-sm shadow-accent/50" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <span className="text-xs text-muted-foreground font-medium tabular-nums ml-2">
              {String(currentSlide + 1).padStart(2, "0")} / {String(events.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

function EventCard({ event, isActive }: { event: Event; isActive: boolean }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (event.images.length <= 1 || !isActive) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % event.images.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [event.images.length, isActive])

  return (
    <div className="min-w-full">
      <Card className="border-border overflow-hidden bg-card/50 backdrop-blur-sm py-0 gap-0">
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-3 relative aspect-video lg:aspect-auto lg:min-h-[420px] overflow-hidden">
            {event.images.map((image, idx) => (
              <Image
                key={image}
                src={image || "/placeholder.svg"}
                alt={`${event.title} - Image ${idx + 1}`}
                fill
                className={`object-cover transition-opacity duration-700 ${
                  idx === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority={idx === 0}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/20 pointer-events-none" />

            {event.images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
                {event.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? "w-5 bg-white" : "w-1.5 bg-white/50 hover:bg-white/70"
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-2 p-8 lg:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-5 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-medium">
                <Calendar className="w-3 h-3" />
                {event.date}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-foreground/80 text-xs font-medium">
                <MapPin className="w-3 h-3" />
                Istanbul
              </span>
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold mb-4 leading-tight">{event.title}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">{event.description}</p>

            <div className="inline-flex mb-8">
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20">
                {event.network}
              </span>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              {event.lumaLink && (
                <a
                  href={event.lumaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 shadow-md shadow-accent/20 transition-all hover:-translate-y-0.5"
                  aria-label={`View ${event.title} event details${event.lumaLink2 ? " (July)" : ""}`}
                >
                  {event.lumaLink2 ? "View Event (July)" : "View Event"}
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {event.lumaLink2 && (
                <a
                  href={event.lumaLink2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-transparent text-sm font-medium hover:border-accent/50 hover:bg-accent/10 transition-all hover:-translate-y-0.5"
                  aria-label={`View ${event.title} event details (August)`}
                >
                  View Event (August)
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {event.videoLink && (
                <a
                  href={event.videoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-transparent text-sm font-medium hover:border-accent/50 hover:bg-accent/10 transition-all hover:-translate-y-0.5"
                  aria-label={`Watch ${event.title} video on YouTube`}
                >
                  <Play className="w-3.5 h-3.5" />
                  Watch Video
                </a>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
