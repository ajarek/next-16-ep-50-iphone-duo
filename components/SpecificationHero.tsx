"use client"

import { useState } from "react"
import Image from "next/image"
import AppleLogo from "./AppleLogo"
import {
  Maximize2,
  Minimize2,
  Sparkles,
  Layers,
  Scale,
  Ruler,
  Info,
  Check,
  Shield,
  Camera,
  Cpu,
} from "lucide-react"

interface Hotspot {
  id: string
  title: string
  category: string
  coords: { x: number; y: number } // percentage
  description: string
  stat: string
}

const hotspots: Hotspot[] = [
  {
    id: "external-display",
    title: "Ekran zewnętrzny 5,4″",
    category: "Wyświetlacz",
    coords: { x: 7, y: 48 },
    stat: "1398 × 2034 px • 460 ppi",
    description:
      "Kompaktowy format 5,4 cala z Dynamic Island i ProMotion do 120 Hz. Zawsze pod ręką, gdy telefon jest zamknięty.",
  },
  {
    id: "camera-bump",
    title: "System Fusion 48 MP",
    category: "Aparat",
    coords: { x: 20, y: 22 },
    stat: "ƒ/1,6 OIS + 48 MP Ultra-Wide",
    description:
      "Podwójny aparat z matrycową stabilizacją obrazu Sensor-shift i innowacyjnym podglądem Duo Preview dla fotografowanej osoby.",
  },
  {
    id: "internal-display",
    title: "Ekran wewnętrzny 7,6″",
    category: "Wyświetlacz",
    coords: { x: 50, y: 35 },
    stat: "Super Retina XDR • 3000 nitów",
    description:
      "Składany elastyczny panel OLED o 10 ultracienkich warstwach z wykończeniem nanostrukturalnym oraz ukrytym aparatem FaceTime UDC.",
  },
  {
    id: "titanium-hinge",
    title: "Tytanowy zawias 5,2 mm",
    category: "Konstrukcja",
    coords: { x: 65, y: 78 },
    stat: "Tytan klasy 5 • Norma IP68",
    description:
      "Ponad 100 mikroskopijnych komponentów zapewniających płynne zginanie pod dowolnym kątem w trybie FlexCam.",
  },
  {
    id: "flex-preview",
    title: "Aparat przedni Center Stage",
    category: "Wideorozmowy",
    coords: { x: 80, y: 20 },
    stat: "12 MP • 4K Dolby Vision 60 fps",
    description:
      "Zewnętrzny aparat Center Stage z funkcją Animacji dla dziecka i płynnym śledzeniem postaci.",
  },
]

export default function SpecificationHero() {
  const [activeView, setActiveView] = useState<"all" | "open" | "closed">("all")
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(
    hotspots[2],
  )
  const [selectedDimension, setSelectedDimension] = useState<"open" | "closed">(
    "open",
  )

  return (
    <section className='relative w-full pt-10 sm:pt-16 pb-12 sm:pb-20 overflow-hidden'>
      {/* Dynamiczne oświetlenie tła */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-180 sm:w-245 h-120 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.18)_0%,rgba(14,165,233,0.08)_40%,transparent_70%)] blur-3xl -z-10'
      />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Górna etykieta i tytuł */}
        <div className='text-center max-w-3xl mx-auto'>
          <div className='inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 mb-5 shadow-sm shadow-sky-500/10'>
            <AppleLogo className='w-3.5 h-3.5 text-sky-400' />
            <span className='text-xs uppercase tracking-[0.25em] font-semibold text-sky-300'>
              Specyfikacja techniczna • iPhone Duo
            </span>
          </div>

          <h1 className='text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white leading-tight'>
            Potęga w każdym milimetrze.{" "}
            <span className='block bg-linear-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent'>
              Wszystko w najdrobniejszym szczególe.
            </span>
          </h1>

          <p className='mt-5 text-base sm:text-lg text-slate-300 font-normal leading-relaxed'>
            Poznaj każdy parametr inżynieryjny pierwszego składanego iPhone’a.
            Od tytanowej obudowy klasy 5 o grubości 5,2 mm, przez ekran 7,6 cala
            Super Retina XDR, aż po rewolucyjny układ A20 Pro i podwójny aparat
            Fusion 48 MP.
          </p>
        </div>

        {/* Centralna prezentacja wizualna z interaktywnymi punktami (Hotspots) */}
        <div className='mt-12 sm:mt-16 relative rounded-3xl bg-slate-900/40 border border-white/10 p-4 sm:p-8 backdrop-blur-2xl overflow-hidden shadow-2xl'>
          {/* Efekt ambientu wewnątrz kontenera */}
          <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-0 bg-radial from-sky-500/10 via-transparent to-transparent opacity-80'
          />

          {/* Górny pasek kontrolny widoków */}
          <div className='relative z-10 flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10'>
            <div className='flex items-center gap-2'>
              <span className='text-xs font-semibold uppercase tracking-wider text-slate-400'>
                Eksplorator urządzenia:
              </span>
              <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-sky-500/15 text-sky-300 border border-sky-400/30'>
                <Sparkles className='w-3 h-3' />
                Interaktywna inspekcja
              </span>
            </div>

            {/* Przyciski filtrowania punktów / widoków */}
            <div className='inline-flex rounded-full bg-slate-950/70 border border-white/10 p-1 text-xs'>
              <button
                type='button'
                onClick={() => setActiveView("all")}
                className={`px-3 py-1.5 rounded-full transition-all font-medium ${
                  activeView === "all"
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Wszystkie ujęcia
              </button>
              <button
                type='button'
                onClick={() => {
                  setActiveView("open")
                  setActiveHotspot(hotspots[2])
                }}
                className={`px-3 py-1.5 rounded-full transition-all font-medium ${
                  activeView === "open"
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Ekran 7,6″
              </button>
              <button
                type='button'
                onClick={() => {
                  setActiveView("closed")
                  setActiveHotspot(hotspots[0])
                }}
                className={`px-3 py-1.5 rounded-full transition-all font-medium ${
                  activeView === "closed"
                    ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                Złożony 5,4″
              </button>
            </div>
          </div>

          {/* Główny obszar obrazu z hotspotami */}
          <div className='relative z-10 my-6 sm:my-10 flex items-center justify-center min-h-80 sm:min-h-105'>
            <div className='relative max-w-4xl w-full flex items-center justify-center'>
              {/* Obraz specyfikacji z Next/Image */}
              <div className='relative w-full aspect-677/369 max-w-205 mx-auto filter drop-shadow-[0_20px_45px_rgba(0,0,0,0.7)] transition-all duration-500'>
                <Image
                  src='/images/specyfikacja.png'
                  alt='iPhone Duo — specyfikacja techniczna i widok urządzenia w pozycjach otwartej i zamkniętej'
                  fill
                  priority
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 820px'
                  className='object-contain'
                />

                {/* Hotspoty rozłożone po powierzchni grafiki */}
                {hotspots.map((spot) => {
                  const isActive = activeHotspot?.id === spot.id
                  return (
                    <button
                      key={spot.id}
                      type='button'
                      onClick={() => setActiveHotspot(spot)}
                      onMouseEnter={() => setActiveHotspot(spot)}
                      aria-label={`Punkt specyfikacji: ${spot.title}`}
                      className='absolute group -translate-x-1/2 -translate-y-1/2 focus:outline-none'
                      style={{
                        left: `${spot.coords.x}%`,
                        top: `${spot.coords.y}%`,
                      }}
                    >
                      {/* Płynny pierścień pulsacji */}
                      <span
                        className={`absolute -inset-2 rounded-full transition-transform duration-300 ${
                          isActive
                            ? "bg-sky-400/40 animate-ping"
                            : "bg-sky-400/20 group-hover:scale-150"
                        }`}
                      />
                      {/* Główny punkt */}
                      <span
                        className={`relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 transition-all duration-200 shadow-lg ${
                          isActive
                            ? "bg-sky-500 border-white text-white scale-110 shadow-sky-400/60"
                            : "bg-slate-900/90 border-sky-400/80 text-sky-300 group-hover:bg-sky-500 group-hover:text-white"
                        }`}
                      >
                        <span className='w-2 h-2 rounded-full bg-white shadow-xs' />
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Dolna karta aktywnego punktu (Hotspot details card) */}
          {activeHotspot && (
            <div className='relative z-10 mt-4 rounded-2xl bg-slate-950/80 border border-sky-500/30 p-4 sm:p-5 backdrop-blur-xl animate-fade-in transition-all'>
              <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-3'>
                <div className='flex items-start gap-3'>
                  <div className='w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5'>
                    {activeHotspot.category === "Wyświetlacz" ? (
                      <Layers className='w-5 h-5' />
                    ) : activeHotspot.category === "Aparat" ? (
                      <Camera className='w-5 h-5' />
                    ) : activeHotspot.category === "Konstrukcja" ? (
                      <Shield className='w-5 h-5' />
                    ) : (
                      <Cpu className='w-5 h-5' />
                    )}
                  </div>
                  <div>
                    <div className='flex items-center gap-2'>
                      <span className='text-[11px] font-semibold uppercase tracking-wider text-sky-400'>
                        {activeHotspot.category}
                      </span>
                      <span className='text-slate-500'>•</span>
                      <span className='text-xs font-mono text-slate-300 bg-white/5 px-2 py-0.5 rounded-md border border-white/10'>
                        {activeHotspot.stat}
                      </span>
                    </div>
                    <h2 className='text-base sm:text-lg font-bold text-white mt-0.5'>
                      {activeHotspot.title}
                    </h2>
                    <p className='text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl'>
                      {activeHotspot.description}
                    </p>
                  </div>
                </div>

                <div className='shrink-0 flex items-center gap-2'>
                  <span className='text-[11px] text-slate-400 hidden lg:inline'>
                    Dotknij dowolnego punktu na obrazie
                  </span>
                  <a
                    href='#spec-explorer'
                    className='inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all'
                  >
                    <span>Zobacz tabelę</span>
                    <Info className='w-3.5 h-3.5' />
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Sekcja: Wymiary i masa w pozycji rozłożonej vs złożonej (Interactive Dimensions) */}
        <div className='mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch'>
          {/* Lewy panel: Wymiary Otwarty / Zamknięty */}
          <div className='lg:col-span-8 rounded-3xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between'>
            <div>
              <div className='flex flex-wrap items-center justify-between gap-4 pb-5 border-b border-white/10'>
                <div>
                  <div className='inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 uppercase tracking-wider'>
                    <Ruler className='w-3.5 h-3.5' />
                    <span>Wymiary i masa</span>
                  </div>
                  <h2 className='text-xl sm:text-2xl font-bold text-white mt-1'>
                    Precyzja co do części milimetra
                  </h2>
                </div>

                {/* Przełącznik stanu: Otwarty / Zamknięty */}
                <div className='inline-flex rounded-full bg-slate-950 border border-white/10 p-1 text-xs'>
                  <button
                    type='button'
                    onClick={() => setSelectedDimension("open")}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all font-medium ${
                      selectedDimension === "open"
                        ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Maximize2 className='w-3.5 h-3.5' />
                    <span>Otwarty (7,6″)</span>
                  </button>
                  <button
                    type='button'
                    onClick={() => setSelectedDimension("closed")}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full transition-all font-medium ${
                      selectedDimension === "closed"
                        ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    <Minimize2 className='w-3.5 h-3.5' />
                    <span>Zamknięty (5,4″)</span>
                  </button>
                </div>
              </div>

              {/* Wyświetlanie wymiarów dla wybranego stanu */}
              <div className='mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4'>
                <div className='p-4 rounded-2xl bg-white/3 border border-white/5'>
                  <span className='text-xs text-slate-400'>Szerokość</span>
                  <div className='text-2xl sm:text-3xl font-extrabold text-white mt-1'>
                    {selectedDimension === "open" ? "164,6 mm" : "84,1 mm"}
                  </div>
                  <span className='text-[11px] text-slate-400'>
                    {selectedDimension === "open"
                      ? "Podwójny obszar pracy"
                      : "Pewny chwyt dłoni"}
                  </span>
                </div>

                <div className='p-4 rounded-2xl bg-white/3 border border-white/5'>
                  <span className='text-xs text-slate-400'>Wysokość</span>
                  <div className='text-2xl sm:text-3xl font-extrabold text-white mt-1'>
                    117,8 mm
                  </div>
                  <span className='text-[11px] text-slate-400'>
                    Stała wysokość obudowy
                  </span>
                </div>

                <div className='p-4 rounded-2xl bg-white/3 border border-white/5 relative overflow-hidden'>
                  <div className='absolute top-1 right-2 text-[10px] uppercase font-semibold text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded'>
                    {selectedDimension === "open" ? "Ultracienki" : "Kompakt"}
                  </div>
                  <span className='text-xs text-slate-400'>Grubość</span>
                  <div className='text-2xl sm:text-3xl font-extrabold text-sky-300 mt-1'>
                    {selectedDimension === "open" ? "5,2 mm" : "11,3 mm"}
                  </div>
                  <span className='text-[11px] text-slate-400'>
                    {selectedDimension === "open"
                      ? "Smuklejszy niż iPad Pro"
                      : "Swobodnie mieści się w kieszeni"}
                  </span>
                </div>

                <div className='p-4 rounded-2xl bg-white/3 border border-white/5'>
                  <span className='text-xs text-slate-400'>Masa całkowita</span>
                  <div className='text-2xl sm:text-3xl font-extrabold text-white mt-1'>
                    254 g
                  </div>
                  <span className='text-[11px] text-slate-400'>
                    Lekki tytan klasy 5
                  </span>
                </div>
              </div>
            </div>

            {/* Informacja o geometrii ekranu i klasie szczelności */}
            <div className='mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-slate-400'>
              <div className='flex items-center gap-2'>
                <Check className='w-4 h-4 text-emerald-400 shrink-0' />
                <span>
                  Odporność na wodę i pył klasy <strong>IP68</strong> (do 6 m
                  głębokości do 30 min wg IEC 60529).
                </span>
              </div>
              <span className='text-[11px] text-slate-400'>
                Faktyczna przekątna prostokąta: 7,58″ (otwarty) i 5,36″
                (zamknięty).
              </span>
            </div>
          </div>

          {/* Prawy panel: Wykończenia i stopy tytanu (Finishes card) */}
          <div className='lg:col-span-4 rounded-3xl bg-slate-900/50 border border-white/10 p-6 sm:p-8 backdrop-blur-xl flex flex-col justify-between'>
            <div>
              <div className='inline-flex items-center gap-1.5 text-xs font-semibold text-sky-400 uppercase tracking-wider'>
                <Shield className='w-3.5 h-3.5' />
                <span>Wykończenia</span>
              </div>
              <h2 className='text-xl sm:text-2xl font-bold text-white mt-1'>
                Tytan i Ceramic Shield 2
              </h2>
              <p className='text-xs text-slate-300 mt-2 leading-relaxed'>
                Ramka z tytanu klasy 5 z technologią Ceramic Shield z tyłu oraz
                nową powłoką Ceramic Shield 2 z przodu zapewniającą 3× wyższą
                odporność na zarysowania.
              </p>

              {/* Dwa oficjalne kolory */}
              <div className='mt-5 space-y-3'>
                <div className='flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10'>
                  <span className='w-7 h-7 rounded-full bg-[#0b1120] border-2 border-white/30 shadow-inner shrink-0' />
                  <div>
                    <h3 className='text-sm font-semibold text-white'>
                      Nocne niebo
                    </h3>
                    <p className='text-xs text-slate-400'>
                      Głęboka tytanowa czerń z powłoką PVD
                    </p>
                  </div>
                </div>

                <div className='flex items-center gap-3.5 p-3 rounded-2xl bg-white/5 border border-white/10'>
                  <span className='w-7 h-7 rounded-full bg-[#e2e8f0] border-2 border-white/40 shadow-inner shrink-0' />
                  <div>
                    <h3 className='text-sm font-semibold text-white'>
                      Gwiezdna biel
                    </h3>
                    <p className='text-xs text-slate-400'>
                      Lśniący tytan o perłowym wykończeniu
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400'>
              <span className='flex items-center gap-1.5'>
                <Scale className='w-4 h-4 text-sky-400' />
                <span>254 gramy tytanowej harmonii</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
