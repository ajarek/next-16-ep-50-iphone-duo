import type { Metadata } from "next"
import Link from "next/link"
import DisplayCarousel from "@/components/DisplayCarousel"
import DisplayLayers from "@/components/DisplayLayers"
import UnderDisplayFeature from "@/components/UnderDisplayFeature"
import DisplayComparison from "@/components/DisplayComparison"
import AppleLogo from "@/components/AppleLogo"
import {
  Sparkles,
  Layers,
  Sun,
  Zap,
  Eye,
  Tv,
  Gamepad2,
  ChevronRight,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Wyświetlacz Super Retina XDR — iPhone Duo | Apple (Polska)",
  description:
    "Poznaj rewolucyjny wyświetlacz iPhone Duo. 7,6 cala Super Retina XDR z 10 ultracienkimi warstwami, wykończeniem nanostrukturalnym i niewidocznym aparatem FaceTime pod ekranem.",
  openGraph: {
    title: "Wyświetlacz Super Retina XDR — iPhone Duo",
    description:
      "Treści wyświetlane na ekranie iPhone’a Duo pochłaniają bez reszty. 7,6 cala, nanostruktura, aparat ukryty pod ekranem.",
    images: [
      {
        url: "/images/games-1.png",
        width: 1200,
        height: 800,
        alt: "Wyświetlacz iPhone Duo - Gry i multimedia",
      },
    ],
  },
}

export default function DisplayPage() {
  const specHighlights = [
    {
      value: "7,6″",
      label: "Ekran wewnętrzny",
      subtext: "OLED Super Retina XDR",
      icon: Tv,
    },
    {
      value: "3000 nitów",
      label: "Jasność szczytowa",
      subtext: "Doskonała czytelność w słońcu",
      icon: Sun,
    },
    {
      value: "1–120 Hz",
      label: "Adaptacyjne ProMotion",
      subtext: "Z próbkowaniem dotyku 240 Hz",
      icon: Zap,
    },
    {
      value: "10 warstw",
      label: "Ultracienka struktura",
      subtext: "Ze szkłem nanostrukturalnym",
      icon: Layers,
    },
    {
      value: "FaceTime UDC",
      label: "Ukryty aparat",
      subtext: "100% powierzchni bez notcha",
      icon: Eye,
    },
  ]

  return (
    <div className='relative isolate min-h-screen overflow-x-hidden bg-[#020610] text-slate-100'>
      {/* Tło gradientowe i teatralne refleksy świetlne */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.22),transparent_50%),radial-gradient(ellipse_at_80%_35%,rgba(99,102,241,0.18),transparent_45%),radial-gradient(ellipse_at_20%_80%,rgba(14,165,233,0.15),transparent_48%)]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#020610_0%,#051124_45%,#020610_100%)] opacity-95'
      />

      {/* Główny kontener strony */}
      <main className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-20 sm:pb-32'>
        {/* Sekcja Hero: Tytuł i edytorialna prezentacja */}
        <section className='text-center max-w-4xl mx-auto'>
          {/* Logo i etykieta */}
          <div className='inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 mb-6'>
            <AppleLogo className='w-3.5 h-3.5 text-sky-400' />
            <span className='text-xs uppercase tracking-[0.3em] font-semibold text-sky-300'>
              Super Retina XDR 7,6″
            </span>
          </div>

          {/* Główny nagłówek strony */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]'>
            Wyświetlacz.{" "}
            <span className='block bg-linear-to-b from-white via-sky-200 to-sky-500 bg-clip-text text-transparent'>
              Pochłania bez reszty.
            </span>
          </h1>

          {/* Autentyczny, pełny opis ze specyfikacji iPhone Duo */}
          <p className='mt-8 text-base sm:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto font-normal'>
            Treści wyświetlane na ekranie iPhone’a Duo pochłaniają bez reszty.
            Proporcje wyświetlacza Super Retina XDR 7,6 cala są takie same w
            przypadku obu ekranów – wewnętrznego i zewnętrznego. Wyświetlacz
            wewnętrzny składa się z{" "}
            <strong className='text-white font-semibold'>
              10 ultracienkich warstw
            </strong>{" "}
            i ma specjalne wykończenie nanostrukturalne, które redukuje
            odblaski. A aparat FaceTime pozostaje ukryty pod ekranem do momentu,
            gdy go potrzebujesz. W rezultacie nic nie odwraca Twojej uwagi od
            treści wyświetlanych na idealnie gładkim ekranie. Obrazowo mówiąc,
            to{" "}
            <strong className='text-white font-semibold'>
              najlepszy iPhone do oglądania filmów i seriali oraz grania w gry
            </strong>
            .
          </p>
        </section>

        {/* Pasek kluczowych parametrów technicznych (5 filarów wyświetlacza) */}
        <section
          aria-label='Kluczowe parametry wyświetlacza'
          className='mt-14 sm:mt-18 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4'
        >
          {specHighlights.map((spec, i) => {
            const Icon = spec.icon
            return (
              <div
                key={i}
                className='group relative p-4 sm:p-5 rounded-2xl bg-slate-900/50 hover:bg-slate-900/80 border border-white/10 hover:border-sky-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:-translate-y-0.5'
              >
                <div className='w-8 h-8 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors mb-3'>
                  <Icon className='w-4 h-4' />
                </div>
                <div className='text-xl sm:text-2xl font-bold text-white tracking-tight'>
                  {spec.value}
                </div>
                <div className='text-xs font-semibold text-slate-300 mt-0.5'>
                  {spec.label}
                </div>
                <div className='text-[11px] text-slate-400 mt-1 leading-snug'>
                  {spec.subtext}
                </div>
              </div>
            )
          })}
        </section>

        {/* Sekcja 1: Kreatywna, interaktywna karuzela gier (public/images) */}
        <section className='mt-16 sm:mt-24'>
          <div className='text-center max-w-3xl mx-auto mb-6'>
            <div className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-400/20 mb-3'>
              <Gamepad2 className='w-3.5 h-3.5' />
              <span>Gry i multimedia w kinowym formacie</span>
            </div>
            <h2 className='text-3xl sm:text-5xl font-bold tracking-tight text-white'>
              Epicki świat gier na 7,6 cala
            </h2>
            <p className='mt-3 text-sm sm:text-base text-slate-300'>
              Przeglądaj najnowsze tytuły AAA na elastycznym ekranie Super
              Retina XDR. Wybierz grę, zmień tryb wyświetlania lub powiększ
              podgląd.
            </p>
          </div>

          <DisplayCarousel />
        </section>

        {/* Sekcja 2: Architektura 10 ultracienkich warstw */}
        <DisplayLayers />

        {/* Sekcja 3: Aparat FaceTime ukryty pod ekranem (Under-Display) */}
        <UnderDisplayFeature />

        {/* Sekcja 4: Interaktywne porównanie właściwości wyświetlacza */}
        <DisplayComparison />

        {/* Dolna sekcja podsumowująca i CTA */}
        <section className='mt-16 sm:mt-28 border-t border-white/10 pt-16 text-center'>
          <p className='text-xs sm:text-sm tracking-[0.4em] font-semibold uppercase bg-linear-to-r from-sky-300 via-blue-200 to-sky-400 bg-clip-text text-transparent'>
            FOLD. OPEN. EXPERIENCE MORE.
          </p>

          <h3 className='mt-4 text-3xl sm:text-5xl font-bold tracking-tight text-white'>
            Poczuj różnicę iPhone Duo
          </h3>

          <p className='mt-4 text-sm sm:text-base text-slate-400 max-w-xl mx-auto'>
            Większy niż kiedykolwiek. Smuklejszy niż myślisz. Odkryj pełnię
            możliwości dwóch zsynchronizowanych ekranów Super Retina XDR.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/description'
              className='inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all hover:scale-105'
            >
              <span>Zobacz pełny opis Duo</span>
              <ChevronRight className='w-4 h-4 text-slate-400' />
            </Link>

            <Link
              href='/'
              className='inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105'
            >
              <Sparkles className='w-4 h-4 text-sky-200' />
              <span>Poznaj stronę główną</span>
            </Link>
          </div>

          <div className='mt-12 text-xs text-slate-500'>
            iPhone Duo — Zaprojektowany przez Apple w Kalifornii. Wyświetlacz
            Super Retina XDR.
          </div>
        </section>
      </main>
    </div>
  )
}
