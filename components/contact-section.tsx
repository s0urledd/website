"use client"

import type React from "react"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:stake@huginn.tech?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">Get in Touch</h2>
          <p className="text-lg text-muted-foreground font-light leading-relaxed">
            Have a question or want to work together? We'd love to hear from you. You can also reach out for special
            offers and partnerships
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-card border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href="mailto:stake@huginn.tech"
                className="text-sm text-muted-foreground hover:text-accent transition-colors"
              >
                stake@huginn.tech
              </a>
            </Card>

            <Card className="p-6 bg-card border-border">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">Istanbul, TURKIYE</p>
            </Card>
          </div>

          <Card className="lg:col-span-2 p-8 bg-card border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium text-foreground mb-2 block">
                    First Name *
                  </label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-foreground mb-2 block">
                    Last Name *
                  </label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                    className="h-11"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11"
                />
              </div>

              <div>
                <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                  Subject *
                </label>
                <Input
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="h-11"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                  Message *
                </label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="resize-none"
                />
              </div>

              <Button type="submit" className="w-full h-11 text-base font-medium">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
