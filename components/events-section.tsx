"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function EventsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const events = [
    {
      title: "FlixFest 2023",
      images: ["/images/flixfest-202023.jpg", "/images/flixfest-202023-201.jpg"],
      description: "FLIX FEST Istanbul organized by Huginn.Tech in partnership with Inter Protocol",
      date: "2023",
      network: "FlixDotFun",
      lumaLink: "https://lu.ma/flixfest2023",
      videoLink: "https://www.youtube.com/watch?v=9S5Q7XsiT7U",
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
      title: "ATOM ISTANBUL 2025",
      images: ["/images/18ac5ba2-619d-4a08-8bdb.jpeg", "/images/3bc7b25f-0183-4dc8-8ac6.jpeg"],
      description: "Cosmos Hub ecosystem events and community gatherings",
      date: "2025",
      network: "Cosmos Hub",
      lumaLink: "http://lu.ma/3swt6vod",
      lumaLink2: "https://luma.com/z9ixu22y",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % events.length)
    }, 7000)

    return () => clearInterval(interval)
  }, [events.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % events.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + events.length) % events.length)
  }

  return (
    <section id="events" className="py-24 lg:py-32 bg-background/50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Events</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Join us at our community events and workshops organized at our office
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {events.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-blue-500/50 transition-all flex items-center justify-center z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background hover:border-blue-500/50 transition-all flex items-center justify-center z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex items-center justify-center gap-2 mt-6">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === index ? "w-8 bg-blue-500" : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function EventCard({
  event,
}: {
  event: {
    title: string
    images: string[]
    description: string
    date: string
    network: string
    lumaLink?: string
    lumaLink2?: string
    videoLink?: string
  }
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (event.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % event.images.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [event.images.length])

  return (
    <div className="min-w-full">
      <Card className="border-border overflow-hidden bg-card/50 backdrop-blur-sm">
        <div className="aspect-video relative overflow-hidden">
          <Image
            src={event.images[currentImageIndex] || "/placeholder.svg"}
            alt={`${event.title} - Image ${currentImageIndex + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
            priority={currentImageIndex === 0}
          />
        </div>
        <div className="p-8">
          <div className="text-sm text-blue-500 font-medium mb-2">{event.date}</div>
          <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
          <p className="text-muted-foreground mb-2">{event.description}</p>
          <div className="flex items-center gap-3 flex-wrap">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-sm font-medium">
              {event.network}
            </div>
            {event.lumaLink && (
              <a
                href={event.lumaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
                aria-label={`View ${event.title} event details${event.lumaLink2 ? " (July)" : ""}`}
              >
                {event.lumaLink2 ? "View Event (July)" : "View Event"}
              </a>
            )}
            {event.lumaLink2 && (
              <a
                href={event.lumaLink2}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
                aria-label={`View ${event.title} event details (August)`}
              >
                View Event (August)
              </a>
            )}
            {event.videoLink && (
              <a
                href={event.videoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-500 hover:underline"
                aria-label={`Watch ${event.title} video on YouTube`}
              >
                Watch Video
              </a>
            )}
          </div>
        </div>
      </Card>
    </div>
  )
}
