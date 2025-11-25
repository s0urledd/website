"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logos/huginn-logo.png"
              alt="Huginn Tech"
              width={40}
              height={40}
              className="transition-transform group-hover:scale-105"
            />
            <div className="text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
              Huginn
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            <Link
              href="#networks"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Networks
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <a
              href="https://blog.huginn.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Blog
            </a>
            <Link
              href="#events"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2" aria-label="Toggle menu">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-1">
            <Link
              href="#networks"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3"
            >
              Networks
            </Link>
            <Link
              href="#products"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3"
            >
              Products
            </Link>
            <a
              href="https://blog.huginn.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3"
            >
              Blog
            </a>
            <Link
              href="#events"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3"
            >
              Events
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-3"
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-6 border-t border-border mt-4">
              <Link href="#networks">
                <Button size="sm" className="w-full">
                  Stake Now
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
