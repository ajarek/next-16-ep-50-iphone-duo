"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  X,
  Sparkles,
  Zap,
  Sun,
  Gamepad2,
  CheckCircle2,
} from "lucide-react";

interface GameSlide {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
  badge: string;
  glowColor1: string;
  glowColor2: string;
  accentBorder: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

const slides: GameSlide[] = [
  {
    id: "action-combat",
    title: "Zenith Arena: Starcie Tytanów",
    category: "Intensywna gra akcji AAA",
    image: "/images/games-1.png",
    alt: "Gra akcji z walką w czasie rzeczywistym na rozłożonym ekranie iPhone Duo",
    badge: "120 kl./s ProMotion",
    glowColor1: "rgba(56, 189, 248, 0.45)",
    glowColor2: "rgba(244, 63, 94, 0.35)",
    accentBorder: "border-sky-500/40",
    description:
      "Błyskawiczne uniki i chirurgiczna precyzja dotyku. Wyświetlacz Super Retina XDR rejestruje dotyk z częstotliwością 240 Hz, dając Ci przewagę w każdej ułamkowej sekundzie pojedynku bez żadnych opóźnień.",
    specs: [
      { label: "Częstotliwość odświeżania", value: "Adaptacyjne 1–120 Hz" },
      { label: "Czas reakcji piksela", value: "< 1 ms OLED" },
      { label: "Próbkowanie dotyku", value: "240 Hz Touch Pro" },
      { label: "Układ graficzny", value: "A20 Pro Metal 4" },
    ],
  },
  {
    id: "open-world-rpg",
    title: "Aethelgard: Kroniki Zmierzchu",
    category: "Otwarty świat i eksploracja",
    image: "/images/games-2.png",
    alt: "Malowniczy zachód słońca i górski krajobraz RPG na ekranie 7,6 cala",
    badge: "3000 nitów szczytowo",
    glowColor1: "rgba(245, 158, 11, 0.42)",
    glowColor2: "rgba(16, 185, 129, 0.32)",
    accentBorder: "border-amber-500/40",
    description:
      "Nieskończona głębia pejzażu. Wykończenie nanostrukturalne rozprasza światło otoczenia bez degradacji kontrastu, a szczytowa jasność 3000 nitów wydobywa najdelikatniejsze promienie zachodzącego słońca.",
    specs: [
      { label: "Jasność szczytowa plener", value: "3000 nitów (HDR)" },
      { label: "Przestrzeń barw", value: "Szeroka gama P3" },
      { label: "Współczynnik kontrastu", value: "2 000 000:1" },
      { label: "Powłoka optyczna", value: "Szkło nanostrukturalne" },
    ],
  },
  {
    id: "high-speed-racing",
    title: "Apex Velocity: Granica Prędkości",
    category: "Hiperrealistyczny symulator wyścigów",
    image: "/images/games-3.png",
    alt: "Wyścigi samochodowe z pełnym polem widzenia i wskaźnikami telemetrii",
    badge: "Format 7,6″ Immersive",
    glowColor1: "rgba(6, 182, 212, 0.45)",
    glowColor2: "rgba(139, 92, 246, 0.38)",
    accentBorder: "border-cyan-500/40",
    description:
      "Poczuj prędkość 230 km/h w kinowym formacie. Proporcje wyświetlacza 7,6 cala nie ucinają boków toru, ukazując rywali w lusterkach i zbliżające się serpentyny z bezkompromisową ostrością.",
    specs: [
      { label: "Rozdzielczość matrycy", value: "2156 × 1680 (380 ppi)" },
      { label: "Format proporcji", value: "Panoramiczne 7,6 cala" },
      { label: "Wierność odwzorowania", value: "Dolby Vision & HDR10" },
      { label: "FaceTime Camera", value: "Ukryty pod ekranem" },
    ],
  },
];

export default function DisplayCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeTabMode, setActiveTabMode] = useState<"standard" | "nanotexture" | "promotion">("nanotexture");
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const activeSlide = slides[currentIndex];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  // Autoodtwarzanie karuzeli
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        nextSlide();
      }, 5500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, nextSlide]);

  // Nawigacja klawiaturą
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "Escape" && lightboxOpen) setLightboxOpen(false);
      if (e.key === " " && !lightboxOpen) {
        e.preventDefault();
        setIsPlaying((p) => !p);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide, lightboxOpen]);

  // Obsługa gestów dotykowych (Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();

    setTouchStartX(null);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
      {/* Dynamiczne poświaty tła zsynchronizowane z wybraną grą */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 transition-all duration-700 blur-3xl opacity-60"
        style={{
          background: `radial-gradient(circle at 50% 45%, ${activeSlide.glowColor1} 0%, ${activeSlide.glowColor2} 35%, transparent 70%)`,
        }}
      />

      {/* Przełącznik kategorii gier na górze */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
        {slides.map((slide, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => {
                setCurrentIndex(index);
                setIsPlaying(false);
              }}
              className={`group inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                isActive
                  ? "bg-sky-500/15 border-sky-400 text-sky-200 shadow-lg shadow-sky-500/20 scale-105"
                  : "bg-slate-900/40 dark:bg-slate-900/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20 hover:bg-slate-800/40"
              }`}
              aria-label={`Przejdź do slajdu: ${slide.title}`}
            >
              <Gamepad2 className={`w-3.5 h-3.5 ${isActive ? "text-sky-300" : "text-slate-500"}`} />
              <span>{slide.title.split(":")[0]}</span>
              {isActive && (
                <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              )}
            </button>
          );
        })}
      </div>

      {/* Centralna scena z 3D Cover-Flow i obudową iPhone Duo */}
      <div
        className="relative flex items-center justify-center min-h-[360px] sm:min-h-[480px] md:min-h-[540px] select-none"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Lewy slajd podglądowy (Desktop) */}
        <button
          onClick={prevSlide}
          aria-label="Poprzednia gra"
          className="hidden lg:block absolute left-0 z-10 w-72 h-[380px] -translate-x-12 opacity-30 hover:opacity-75 transition-all duration-500 scale-90 blur-[1px] hover:blur-none cursor-pointer"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={slides[(currentIndex - 1 + slides.length) % slides.length].image}
              alt="Poprzednia gra"
              fill
              className="object-contain"
              sizes="320px"
            />
          </div>
        </button>

        {/* Główny aktywny slajd */}
        <div className="relative z-20 w-full max-w-[760px] group">
          {/* Subtelny cień i odbicie pod urządzeniem */}
          <div
            aria-hidden="true"
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-sky-500/20 blur-2xl rounded-full pointer-events-none transition-all duration-500 group-hover:bg-sky-400/30"
          />

          {/* Ramka ekranu z nanostrukturą */}
          <div
            className={`relative rounded-3xl sm:rounded-4xl p-2 sm:p-3 bg-linear-to-b from-white/15 via-white/5 to-white/10 backdrop-blur-2xl border ${activeSlide.accentBorder} shadow-2xl transition-all duration-500`}
          >
            {/* Nakładka symulacji nanostruktury i 120 Hz */}
            <div
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl bg-black ${
                activeTabMode === "nanotexture"
                  ? "contrast-105 saturate-110"
                  : activeTabMode === "promotion"
                  ? "brightness-105"
                  : ""
              }`}
            >
              {/* Główny obraz iPhone Duo z grą */}
              <div className="relative w-full aspect-3/2 max-h-[500px]">
                <Image
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  fill
                  priority
                  className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 760px"
                />

                {/* Znacznik ukrytego FaceTime'a na górnej krawędzi */}
                <div
                  title="Ukryty aparat FaceTime pod pikselami wyświetlacza"
                  className="absolute top-2.5 sm:top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 opacity-40 hover:opacity-100 transition-opacity cursor-help"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                  <span className="text-[10px] text-slate-300 font-mono tracking-wider">
                    FaceTime UDC
                  </span>
                </div>

                {/* Odznaka technologiczna w prawym górnym rogu */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-slate-950/80 text-sky-300 border border-sky-400/30 backdrop-blur-md shadow-lg">
                    <Sparkles className="w-3 h-3 text-sky-400 animate-pulse" />
                    {activeSlide.badge}
                  </span>
                </div>

                {/* Przycisk powiększenia / pełnego widoku w lewym dolnym rogu */}
                <button
                  onClick={() => setLightboxOpen(true)}
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 backdrop-blur-md transition-all active:scale-95 shadow-md"
                  aria-label="Powiększ widok ekranu"
                  title="Powiększ widok ekranu"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Prawy slajd podglądowy (Desktop) */}
        <button
          onClick={nextSlide}
          aria-label="Następna gra"
          className="hidden lg:block absolute right-0 z-10 w-72 h-[380px] translate-x-12 opacity-30 hover:opacity-75 transition-all duration-500 scale-90 blur-[1px] hover:blur-none cursor-pointer"
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Image
              src={slides[(currentIndex + 1) % slides.length].image}
              alt="Następna gra"
              fill
              className="object-contain"
              sizes="320px"
            />
          </div>
        </button>
      </div>

      {/* Pasek sterowania: Strzałki, Play/Pause, Wskaźniki postępu */}
      <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900/50 dark:bg-slate-900/80 border border-white/10 backdrop-blur-xl">
        {/* Lewe przyciski nawigacyjne */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Poprzedni slajd"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Wstrzymaj autoodtwarzanie" : "Uruchom autoodtwarzanie"}
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95"
            title={isPlaying ? "Wstrzymaj pokaz" : "Wznów pokaz"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>

          <button
            onClick={nextSlide}
            aria-label="Następny slajd"
            className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="ml-2 text-xs text-slate-400 font-mono">
            {currentIndex + 1} / {slides.length}
          </div>
        </div>

        {/* Wskaźniki kropek slajdów */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentIndex(idx);
                setIsPlaying(false);
              }}
              aria-label={`Przejdź do gry numer ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-sky-400"
                  : "w-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Tryby symulatora wyświetlacza */}
        <div className="flex items-center gap-1.5 bg-slate-950/60 p-1 rounded-xl border border-white/10 text-xs">
          <button
            onClick={() => setActiveTabMode("standard")}
            className={`px-2.5 py-1 rounded-lg transition-colors ${
              activeTabMode === "standard"
                ? "bg-white/15 text-white font-medium"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            Standard
          </button>
          <button
            onClick={() => setActiveTabMode("nanotexture")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors ${
              activeTabMode === "nanotexture"
                ? "bg-sky-500/20 text-sky-300 font-medium border border-sky-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Sun className="w-3 h-3 text-amber-400" />
            Nanostruktura
          </button>
          <button
            onClick={() => setActiveTabMode("promotion")}
            className={`px-2.5 py-1 rounded-lg flex items-center gap-1 transition-colors ${
              activeTabMode === "promotion"
                ? "bg-blue-500/20 text-blue-300 font-medium border border-blue-500/30"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            <Zap className="w-3 h-3 text-sky-400" />
            ProMotion 120Hz
          </button>
        </div>
      </div>

      {/* Karta informacyjna o aktualnie prezentowanej grze i parametrach */}
      <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900/40 dark:bg-slate-900/70 border border-white/10 backdrop-blur-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Opis lewy */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase font-semibold tracking-wider text-sky-400">
                {activeSlide.category}
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-xs text-slate-400">Ekran 7,6″ OLED Super Retina XDR</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              {activeSlide.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeSlide.description}
            </p>
          </div>

          {/* Mini-siatka parametrów prawy */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {activeSlide.specs.map((spec, sIdx) => (
              <div
                key={sIdx}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
              >
                <div className="text-[11px] text-slate-400 font-medium">
                  {spec.label}
                </div>
                <div className="mt-1 text-sm sm:text-base font-semibold text-slate-100 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span className="truncate">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Lightbox pełnego powiększenia ekranu */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Podgląd pełnoekranowy gry na iPhone Duo"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-2xl"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Przycisk zamknięcia */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 sm:right-2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Zamknij podgląd"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Obraz w dużej rozdzielczości */}
            <div className="relative w-full aspect-3/2 max-h-[80vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black">
              <Image
                src={activeSlide.image}
                alt={activeSlide.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            {/* Podpis pod obrazem */}
            <div className="mt-4 text-center">
              <h4 className="text-lg font-semibold text-white">{activeSlide.title}</h4>
              <p className="text-xs text-slate-400 mt-1">
                7,6-calowy składany wyświetlacz Super Retina XDR z powłoką nanostrukturalną
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
