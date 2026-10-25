"use client";

import React, { useState } from "react";
import Image from "next/image";
import AppleLogo from "./AppleLogo";
import {
  Sparkles,
  Camera,
  Zap,
  Layers,
} from "lucide-react";

interface LensHotspot {
  id: string;
  name: string;
  specs: string;
  description: string;
  top: string;
  left: string;
}

const hotspots: LensHotspot[] = [
  {
    id: "main-lens",
    name: "48 MP Aparat główny Fusion",
    specs: "24 mm • f/1.6 • Sensor-shift OIS 2. gen",
    description:
      "Matryca quad-pixel 2,44 µm łącząca 4 piksele w jeden superpiksel. Zdjęcia 24 MP i 48 MP w formacie HEIF lub Apple ProRAW o niespotykanej plastyce.",
    top: "31%",
    left: "36%",
  },
  {
    id: "ultra-lens",
    name: "48 MP Aparat ultraszerokokątny",
    specs: "13 mm • f/2.2 • Pole widzenia 120° • Makro od 2 cm",
    description:
      "Nowy sensor 48 MP z autofokusem i 100% Focus Pixels. Niezwykła ostrość od mikroskopijnych kropel rosy po monumentalne krajobrazy bez dystorsji krawędzi.",
    top: "31%",
    left: "43%",
  },
  {
    id: "lidar",
    name: "Skaner LiDAR i czujnik spektralny",
    specs: "Skanowanie głębi 3D • Pomiar światła otoczenia",
    description:
      "6-krotnie szybszy autofokus w słabym oświetleniu i natychmiastowa separacja tła w trybie nocnych portretów.",
    top: "32%",
    left: "48%",
  },
  {
    id: "flash",
    name: "Lampa błyskowa True Tone",
    specs: "Adaptacyjna 9-diodowa matryca LED",
    description:
      "Dostosowuje wzór i natężenie błysku do ogniskowej obiektywu, zapewniając do 2 razy bardziej jednolite oświetlenie.",
    top: "29%",
    left: "46%",
  },
];

export default function CameraHero() {
  const [activeHotspot, setActiveHotspot] = useState<string>("main-lens");

  const selectedLens =
    hotspots.find((h) => h.id === activeHotspot) || hotspots[0];

  return (
    <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Górna etykieta i tytuł */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/25 mb-6 backdrop-blur-md">
            <AppleLogo className="w-3.5 h-3.5 text-sky-400" />
            <span className="text-xs uppercase tracking-[0.28em] font-semibold text-sky-300">
              System aparatów Fusion 48 MP
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.04]">
            Aparat.{" "}
            <span className="block bg-linear-to-r from-sky-200 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Zdjęcia i filmy bez trzymanki.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
            W iPhonie Duo Twój ulubiony system aparatów został wzbogacony o
            zachwycające nowe funkcje. Dzięki{" "}
            <span className="text-white font-medium">Duo Preview</span> i{" "}
            <span className="text-white font-medium">Animacji dla dziecka</span>{" "}
            każdy pokaże się z najlepszej strony. Z funkcją{" "}
            <span className="text-sky-300 font-medium">Inteligentna migawka</span>{" "}
            możesz być częścią chwili, a olśniewające wideo nagrasz w{" "}
            <span className="text-white font-medium">4K przy 120 kl./s</span>.
          </p>

          {/* Szybkie wskaźniki specyfikacji */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-200 shadow-sm">
              <Camera className="w-4 h-4 text-sky-400" />
              <span>48 MP Główny Fusion</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>48 MP Ultraszerokokątny Makro</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-200 shadow-sm">
              <Zap className="w-4 h-4 text-sky-400" />
              <span>4K 120 kl./s Dolby Vision</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/80 border border-white/10 text-slate-200 shadow-sm">
              <Layers className="w-4 h-4 text-sky-400" />
              <span>Duo Preview & FlexCam</span>
            </div>
          </div>
        </div>

        {/* Główna ekspozycja wizualna z interaktywnymi punktami soczewek */}
        <div className="relative max-w-4xl mx-auto rounded-3xl overflow-hidden border border-white/15 bg-slate-950/70 shadow-2xl shadow-sky-950/50 backdrop-blur-xl">
          {/* Poświata wokół modułu */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-sky-500/20 blur-[100px] rounded-full" />

          <div className="relative aspect-4/3 sm:aspect-16/10 w-full overflow-hidden">
            <Image
              src="/images/camera.jpg"
              alt="System podwójnego aparatu Fusion 48 MP w iPhonie Duo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Gradientowa winieta */}
            <div className="absolute inset-0 bg-radial-[circle_at_center,transparent_30%,rgba(2,6,16,0.85)_100%]" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#020610] via-[#020610]/80 to-transparent" />

            {/* Interaktywne punkty soczewek */}
            {hotspots.map((h) => {
              const isActive = h.id === activeHotspot;
              return (
                <button
                  key={h.id}
                  onClick={() => setActiveHotspot(h.id)}
                  style={{ top: h.top, left: h.left }}
                  aria-label={`Pokaż informacje: ${h.name}`}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 group z-20 flex items-center justify-center transition-all duration-300 focus:outline-hidden ${
                    isActive ? "scale-110" : "hover:scale-105"
                  }`}
                >
                  <span
                    className={`absolute -inset-2 rounded-full animate-ping opacity-40 ${
                      isActive ? "bg-sky-400" : "bg-white/40"
                    }`}
                  />
                  <span
                    className={`relative flex h-7 w-7 items-center justify-center rounded-full border text-xs font-bold transition-colors ${
                      isActive
                        ? "bg-sky-500 border-white text-white shadow-lg shadow-sky-500/50"
                        : "bg-slate-950/80 border-sky-400/60 text-sky-200 group-hover:border-sky-300"
                    }`}
                  >
                    +
                  </span>
                </button>
              );
            })}
          </div>

          {/* Karta informacyjna aktualnie wybranego elementu optycznego */}
          <div className="p-6 sm:p-8 bg-slate-900/90 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-sky-400">
                    Inspekcja optyki
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  {selectedLens.name}
                </h3>
                <p className="text-sm font-medium text-sky-300/90 mt-0.5">
                  {selectedLens.specs}
                </p>
              </div>

              <div className="flex items-center gap-2">
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspot(h.id)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                      h.id === activeHotspot
                        ? "bg-sky-500 text-white shadow-md shadow-sky-500/30"
                        : "bg-white/5 text-slate-300 hover:bg-white/10"
                    }`}
                  >
                    {h.name.split(" ")[1] || h.name}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
              {selectedLens.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
