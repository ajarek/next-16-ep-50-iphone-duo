import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "iPhone Duo — Nowy wymiar iPhone | Apple (Polska)",
  description:
    "Poznaj iPhone Duo. Rewolucyjny składany smartfon z elastycznym ekranem 7.6 cala Immersive Display, układem A20 Pro, aparatem 48MP Dual Fusion i tytanową obudową IP68.",
  keywords: [
    "iPhone Duo",
    "Apple",
    "składany iPhone",
    "A20 Pro",
    "Dual Fusion",
    "Immersive Display",
    "smartfon",
  ],
  authors: [{ name: "Apple Inc." }],
  openGraph: {
    title: "iPhone Duo — Nowy wymiar iPhone",
    description:
      "Złóż. Otwórz. Odkryj więcej. Największy wyświetlacz iPhone. Teraz w Twojej kieszeni.",
    url: "https://www.apple.com/pl/iphone-duo",
    siteName: "Apple (Polska)",
    images: [
      {
        url: "/ui/iPhone-Duo – page.png",
        width: 1024,
        height: 1536,
        alt: "iPhone Duo - Rewolucyjny składany smartfon",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#020610",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='pl'
      className='dark h-full antialiased'
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full flex flex-col bg-[#020610] text-slate-100 selection:bg-sky-500/30 selection:text-white`}
      >
        {/* Główny komponent Navbar na wszystkich podstronach */}
        <Navbar />

        {/* Główna zawartość strony */}
        <main className='flex-1 flex flex-col'>{children}</main>
      </body>
    </html>
  )
}
