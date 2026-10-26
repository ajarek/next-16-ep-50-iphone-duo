"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight, ShoppingBag, Sparkles } from "lucide-react"
import ThemeToggle from "./ThemeToggle"
import OrderModal from "./OrderModal"

import AppleLogo from "./AppleLogo"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [orderModalOpen, setOrderModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile drawer on escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleKeyDown)
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { label: "Opis", href: "/description" },
    { label: "Wyświetlacz", href: "/display" },
    { label: "Aparat", href: "/camera" },
    { label: "Specyfikacja", href: "/specification" },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "bg-slate-950/80 dark:bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20"
            : "bg-transparent backdrop-blur-md border-b border-white/5"
        }`}
      >
        <div className='mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
          {/* Lewa strona: Logotyp z przekierowaniem do strony głównej */}
          <div className='flex items-center gap-3'>
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label='Otwórz menu mobilne'
              className='lg:hidden p-1.5 -ml-1 text-slate-300 hover:text-white transition-colors'
            >
              <Menu className='w-5 h-5' />
            </button>

            <Link
              href='/'
              className='group flex items-center gap-2 text-white hover:opacity-90 transition-opacity'
              aria-label='iPhone Duo - Strona główna'
            >
              <AppleLogo className='w-4 h-4 text-slate-100 group-hover:scale-105 transition-transform' />
              <span className='text-sm font-semibold tracking-tight text-slate-100'>
                iPhone Duo
              </span>
            </Link>
          </div>

          {/* Środek: Linki nawigacji (Desktop) */}
          <nav
            aria-label='Główna nawigacja'
            className='hidden lg:flex items-center gap-7 text-xs font-medium text-slate-300'
          >
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className='hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-sky-400 hover:after:w-full after:transition-all'
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Prawa strona: CTA i Przełącznik motywu */}
          <div className='flex items-center gap-3'>
            {/* Przełącznik motywu w Navbarze */}
            <ThemeToggle variant='navbar' />

            {/* Wezwanie do działania CTA */}
            <button
              onClick={() => setOrderModalOpen(true)}
              className='group relative inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 active:scale-95 transition-all'
            >
              <Sparkles className='w-3.5 h-3.5 text-sky-200' />
              <span>Zamów teraz</span>
            </button>
          </div>
        </div>
      </header>

      {/* Płynne wysuwane menu z lewej strony dla urządzeń mobilnych */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-visibility duration-300 ${
          mobileMenuOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
      >
        {/* Tło przyciemniające */}
        <div
          onClick={() => setMobileMenuOpen(false)}
          className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel wysuwany z lewej strony */}
        <aside
          role='dialog'
          aria-label='Menu mobilne nawigacji'
          className={`relative z-10 h-full w-80 max-w-[85vw] flex flex-col justify-between bg-slate-950/95 border-r border-white/10 p-6 shadow-2xl backdrop-blur-2xl transform transition-transform duration-300 ease-out ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* Nagłówek menu */}
          <div>
            <div className='flex items-center justify-between pb-6 border-b border-white/10'>
              <Link
                href='/'
                onClick={() => setMobileMenuOpen(false)}
                className='flex items-center gap-2 text-white'
              >
                <AppleLogo className='w-5 h-5 text-white' />
                <span className='text-sm font-semibold tracking-tight'>
                  iPhone Duo
                </span>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                aria-label='Zamknij menu'
                className='p-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors'
              >
                <X className='w-5 h-5' />
              </button>
            </div>

            {/* Linki nawigacyjne */}
            <nav className='mt-6 flex flex-col space-y-1'>
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='flex items-center justify-between py-3 px-3 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 transition-colors'
                >
                  <span>{item.label}</span>
                  <ChevronRight className='w-4 h-4 text-slate-500' />
                </a>
              ))}
            </nav>
          </div>

          {/* Dolne elementy menu: Przełącznik motywu + CTA */}
          <div className='pt-6 border-t border-white/10 space-y-3'>
            <ThemeToggle variant='mobile' />

            <button
              onClick={() => {
                setMobileMenuOpen(false)
                setOrderModalOpen(true)
              }}
              className='w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 active:scale-95 transition-all'
            >
              <ShoppingBag className='w-4 h-4' />
              <span>Zamów w przedsprzedaży</span>
            </button>
          </div>
        </aside>
      </div>

      {/* Modal konfiguratora / zamówienia */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </>
  )
}
