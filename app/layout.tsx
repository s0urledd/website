import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const siteUrl = "https://huginn.tech"
const siteTitle = "Huginn Tech | Empowering Blockchain Innovation"
const siteDescription =
  "Practical solutions for a decentralized future. We deliver reliable tools, services, and expertise to support blockchain ecosystems."

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  generator: "v0.app",
  keywords: [
    "blockchain validator",
    "cosmos hub",
    "staking",
    "monad",
    "canton network",
    "starknet",
    "dymension",
    "validator services",
    "blockchain infrastructure",
    "cryptocurrency staking",
    "cosmos ecosystem",
  ],
  authors: [{ name: "Huginn Tech" }],
  creator: "Huginn Tech",
  publisher: "Huginn Tech",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: "Huginn Tech",
    images: [
      {
        url: "/logos/huginn-logo.png",
        width: 1200,
        height: 630,
        alt: "Huginn Tech - Blockchain Validator Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    site: "@HuginnStake",
    creator: "@HuginnStake",
    images: ["/logos/huginn-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logos/huginn-logo.png",
    apple: "/logos/huginn-logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" style={{ scrollPaddingTop: "7.5rem" }}>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
