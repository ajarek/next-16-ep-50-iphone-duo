"use client"

import { useState } from "react"
import { Sun, Sparkles, Zap, Check } from "lucide-react"

export default function DisplayComparison() {
  const [activeTab, setActiveTab] = useState<
    "nanotexture" | "promotion" | "brightness"
  >("nanotexture")

  return (
    <section className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
      {/* Tytuł */}
      <div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
        <p className='text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-sky-400'>
          Bezkonkurencyjna widoczność
        </p>
        <h2 className='mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white'>
          Zobacz różnicę na własne oczy.
        </h2>
        <p className='mt-4 text-sm sm:text-base text-slate-300'>
          Przetestuj technologie, które sprawiają, że ekran iPhone’a Duo nie ma
          sobie równych w żadnych warunkach oświetleniowych.
        </p>
      </div>

      {/* Przełącznik technologii */}
      <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10'>
        <button
          onClick={() => setActiveTab("nanotexture")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
            activeTab === "nanotexture"
              ? "bg-sky-500/20 border-sky-400 text-sky-200 shadow-lg shadow-sky-500/20"
              : "bg-slate-900/40 border-white/10 text-slate-400 hover:text-white"
          }`}
        >
          <Sparkles className='w-4 h-4 text-sky-400' />
          <span>Szkło Nanostrukturalne</span>
        </button>

        <button
          onClick={() => setActiveTab("promotion")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
            activeTab === "promotion"
              ? "bg-blue-500/20 border-blue-400 text-blue-200 shadow-lg shadow-blue-500/20"
              : "bg-slate-900/40 border-white/10 text-slate-400 hover:text-white"
          }`}
        >
          <Zap className='w-4 h-4 text-sky-400' />
          <span>Adaptacyjne ProMotion 120 Hz</span>
        </button>

        <button
          onClick={() => setActiveTab("brightness")}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border ${
            activeTab === "brightness"
              ? "bg-amber-500/20 border-amber-400 text-amber-200 shadow-lg shadow-amber-500/20"
              : "bg-slate-900/40 border-white/10 text-slate-400 hover:text-white"
          }`}
        >
          <Sun className='w-4 h-4 text-amber-400' />
          <span>Jasność szczytowa 3000 nitów</span>
        </button>
      </div>

      {/* Karty porównawcze A / B */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
        {/* Lewa: Tradycyjny wyświetlacz */}
        <div className='p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl flex flex-col justify-between'>
          <div>
            <div className='flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4'>
              <span>Standardowy wyświetlacz smartfona</span>
              <span className='text-rose-400'>Konwencjonalny</span>
            </div>

            <h3 className='text-xl sm:text-2xl font-bold text-slate-300 mb-3'>
              {activeTab === "nanotexture" && "Błyszczące szkło ze smugami"}
              {activeTab === "promotion" && "Stałe odświeżanie 60 Hz"}
              {activeTab === "brightness" && "Standardowe 1000 nitów"}
            </h3>

            <p className='text-sm text-slate-400 leading-relaxed mb-6'>
              {activeTab === "nanotexture" &&
                "Światło słoneczne odbija się jak w lustrze, tworząc ostre refleksy i męcząc wzrok podczas grania na świeżym powietrzu lub w jasnym biurze."}
              {activeTab === "promotion" &&
                "Widoczne mikro-przycięcia podczas szybkiego przewijania, smużenie tekstu i ograniczenie klatek do 60 kl./s w dynamicznych grach wojennych i wyścigowych."}
              {activeTab === "brightness" &&
                "Przy pełnym słońcu ekran staje się ciemny i nieczytelny. Kolory tracą nasycenie, a detale w cieniach HDR stają się całkowicie niewidoczne."}
            </p>
          </div>

          <div className='p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2 text-xs text-slate-400'>
            <div className='flex justify-between'>
              <span>Wskaźnik odblasków</span>
              <span className='text-rose-400 font-mono font-bold'>
                18,5% odbicia
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Płynność reakcji</span>
              <span className='text-slate-400 font-mono font-bold'>
                16,6 ms (60 Hz)
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Widoczność w słońcu</span>
              <span className='text-slate-400 font-mono font-bold'>
                Ograniczona
              </span>
            </div>
          </div>
        </div>

        {/* Prawa: iPhone Duo Super Retina XDR */}
        <div className='p-6 sm:p-8 rounded-3xl bg-linear-to-br from-slate-900/80 via-sky-950/30 to-blue-900/20 border-2 border-sky-400/50 backdrop-blur-2xl flex flex-col justify-between shadow-2xl shadow-sky-500/10'>
          <div>
            <div className='flex items-center justify-between text-xs font-semibold text-sky-400 uppercase tracking-wider mb-4'>
              <span>iPhone Duo Super Retina XDR</span>
              <span className='px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 font-bold'>
                Przełom
              </span>
            </div>

            <h3 className='text-xl sm:text-2xl font-bold text-white mb-3'>
              {activeTab === "nanotexture" &&
                "Nanostruktura o 94% mniejszych odblaskach"}
              {activeTab === "promotion" && "ProMotion 1–120 Hz z Touch 240 Hz"}
              {activeTab === "brightness" && "Rekordowe 3000 nitów w plenerze"}
            </h3>

            <p className='text-sm text-slate-200 leading-relaxed mb-6'>
              {activeTab === "nanotexture" &&
                "Mikro-trawienie w szkle o wielkości nanometrów rozbija promienie słońca. Obraz pozostaje głęboki, czernie nasycone, a Ty widzisz każdy szczegół bez zasłaniania ekranu dłonią."}
              {activeTab === "promotion" &&
                "Adaptacyjna matryca LTPO automatycznie przyspiesza do 120 Hz podczas intensywnej akcji i zwalnia do 1 Hz przy czytaniu tekstu, oszczędzając baterię bez kompromisów."}
              {activeTab === "brightness" &&
                "Architektura Tandem OLED osiąga aż 3000 nitów w trybie plenerowym. Nawet w samo południe na plaży ekran wygląda tak, jakbyś stał w zacienionym studiu kinowym."}
            </p>
          </div>

          <div className='p-4 rounded-2xl bg-sky-950/40 border border-sky-400/20 space-y-2 text-xs text-slate-300'>
            <div className='flex justify-between'>
              <span>Wskaźnik odblasków</span>
              <span className='text-emerald-400 font-mono font-bold flex items-center gap-1'>
                <Check className='w-3.5 h-3.5' /> 1,1% (Redukcja o 94%)
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Płynność reakcji</span>
              <span className='text-sky-300 font-mono font-bold flex items-center gap-1'>
                <Check className='w-3.5 h-3.5' /> 8,3 ms (120 Hz) + 240 Hz Touch
              </span>
            </div>
            <div className='flex justify-between'>
              <span>Widoczność w słońcu</span>
              <span className='text-amber-300 font-mono font-bold flex items-center gap-1'>
                <Check className='w-3.5 h-3.5' /> Krystaliczna (3000 nitów)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
