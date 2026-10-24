"use client";

import React, { useState } from "react";
import {
  Layers,
  Sparkles,
  Shield,
  Eye,
  Maximize,
  Cpu,
  Flame,
  Magnet,
  CheckCircle,
} from "lucide-react";

interface DisplayLayer {
  number: number;
  title: string;
  subtitle: string;
  thickness: string;
  description: string;
  icon: React.ElementType;
  gradient: string;
}

const layers: DisplayLayer[] = [
  {
    number: 1,
    title: "Szkło Nanostrukturalne",
    subtitle: "Mikro-trawiona powłoka antyodblaskowa",
    thickness: "0,05 mm",
    description:
      "Trawiona na poziomie nanometrycznym powierzchnia rozprasza padające światło pod dowolnym kątem, redukując odblaski o 94% bez utraty wyrazistości i głębokiej czerni OLED.",
    icon: Sparkles,
    gradient: "from-sky-500/20 to-blue-600/30",
  },
  {
    number: 2,
    title: "Ultra-Thin Glass 3.0 (UTG)",
    subtitle: "Elastyczne szkło o wysokiej gęstości",
    thickness: "0,03 mm",
    description:
      "Superelastyczne chemicznie hartowane szkło wytrzymujące ponad 500 000 cykli składania i rozkładania bez powstawania trwałego zagięcia czy mikropęknięć.",
    icon: Shield,
    gradient: "from-blue-500/20 to-indigo-600/30",
  },
  {
    number: 3,
    title: "Elastomer Amortyzujący",
    subtitle: "Poliuretanowa warstwa pochłaniająca nacisk",
    thickness: "0,04 mm",
    description:
      "Samonaprawiający się żel polimerowy absorbuje uderzenia punktowe i punktowy nacisk rysika oraz palców, zabezpieczając matrycę przed uszkodzeniem mechanicznym.",
    icon: Layers,
    gradient: "from-indigo-500/20 to-purple-600/30",
  },
  {
    number: 4,
    title: "Czuła Matryca Dotykowa 240 Hz",
    subtitle: "Dwuwarstwowy kontroler pojemnościowy",
    thickness: "0,02 mm",
    description:
      "Rejestruje gesty z dwukrotnie wyższą częstotliwością niż standardowe ekrany, eliminując opóźnienia sterowania w dynamicznych grach mobilnych.",
    icon: Maximize,
    gradient: "from-purple-500/20 to-pink-600/30",
  },
  {
    number: 5,
    title: "Tandem OLED LTPO 1–120 Hz",
    subtitle: "Dwie ułożone kaskadowo warstwy emiterów pikseli",
    thickness: "0,06 mm",
    description:
      "Podwójna architektura emisyjna zapewnia rekordową jasność 3000 nitów oraz płynne, adaptacyjne odświeżanie od 1 Hz dla Always-On do 120 Hz dla ProMotion.",
    icon: Cpu,
    gradient: "from-pink-500/20 to-rose-600/30",
  },
  {
    number: 6,
    title: "Aparat FaceTime Under-Display",
    subtitle: "Transparentna siatka subpikseli",
    thickness: "0,01 mm",
    description:
      "Zoptymalizowany układ pikseli przepuszcza 92% światła do schowanego sensora aparatu, stając się w 100% niewidocznym podczas oglądania filmów i grania.",
    icon: Eye,
    gradient: "from-emerald-500/20 to-teal-600/30",
  },
  {
    number: 7,
    title: "Kompozyt Włókna Węglowego",
    subtitle: "Wzmocnienie sprężyste strefy zawiasu",
    thickness: "0,08 mm",
    description:
      "Aerokosmiczny splot włókien węglowych zapewnia idealnie gładką i płaską powierzchnię po całkowitym otwarciu urządzenia pod kątem 180 stopni.",
    icon: Shield,
    gradient: "from-cyan-500/20 to-blue-600/30",
  },
  {
    number: 8,
    title: "Grafitowy Radiator Cieplny",
    subtitle: "Równomierne rozpraszanie ciepła procesora",
    thickness: "0,05 mm",
    description:
      "Odprowadza ciepło generowane przez układ A20 Pro równomiernie na obie połówki urządzenia, zapobiegając spadkom wydajności (throttlingowi) w długich sesjach.",
    icon: Flame,
    gradient: "from-amber-500/20 to-orange-600/30",
  },
  {
    number: 9,
    title: "Pierścień MagSafe & Magnesy Hinge",
    subtitle: "Precyzyjne domykanie magnetyczne",
    thickness: "0,12 mm",
    description:
      "Neodymowe magnesy o dużej gęstości strumienia gwarantują satysfakcjonujący dźwięk zatrzaśnięcia i pewne utrzymanie urządzenia w pozycji złożonej.",
    icon: Magnet,
    gradient: "from-teal-500/20 to-sky-600/30",
  },
  {
    number: 10,
    title: "Tytanowa Płyta Nośna Klasy 5",
    subtitle: "Ultralekki i niezniszczalny pancerz",
    thickness: "0,15 mm",
    description:
      "Baza konstrukcyjna z tytanu Grade 5 chroni całą strukturę przed skręcaniem, zachowując piórkową wagę całego smartfona.",
    icon: Shield,
    gradient: "from-slate-500/20 to-zinc-600/30",
  },
];

export default function DisplayLayers() {
  const [selectedLayerIndex, setSelectedLayerIndex] = useState(0);
  const activeLayer = layers[selectedLayerIndex];
  const IconComponent = activeLayer.icon;

  return (
    <section className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      {/* Tytuł sekcji */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] text-sky-400">
          Inżynieria mikroskopowa
        </p>
        <h2 className="mt-3 text-3xl sm:text-5xl font-bold tracking-tight text-white">
          10 ultracienkich warstw.{" "}
          <span className="block bg-linear-to-r from-sky-300 via-blue-200 to-indigo-300 bg-clip-text text-transparent">
            Jeden perfekcyjnie gładki ekran.
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          Wewnętrzny wyświetlacz iPhone’a Duo to szczyt inżynierii materiałowej. Złożony z dziesięciu
          mikroskopijnych warstw o łącznej grubości poniżej milimetra, łączy trwałość szkła ze sprężystością
          elastycznych polimerów i nanopowłoką antyodblaskową.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Lewa kolumna: Interaktywna lista 10 warstw */}
        <div className="lg:col-span-5 space-y-2">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 px-2 flex justify-between">
            <span>Warstwa wyświetlacza</span>
            <span>Grubość</span>
          </div>

          <div className="space-y-1.5 max-h-[520px] overflow-y-auto pr-1">
            {layers.map((layer, index) => {
              const isSelected = index === selectedLayerIndex;
              return (
                <button
                  key={layer.number}
                  onClick={() => setSelectedLayerIndex(index)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all duration-200 border ${
                    isSelected
                      ? "bg-sky-500/20 border-sky-400/80 text-white shadow-lg shadow-sky-500/10 scale-[1.02]"
                      : "bg-slate-900/50 hover:bg-slate-800/60 border-white/5 hover:border-white/15 text-slate-300"
                  }`}
                  aria-label={`Wybierz warstwę ${layer.number}: ${layer.title}`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                        isSelected
                          ? "bg-sky-400 text-slate-950"
                          : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {layer.number}
                    </span>
                    <div>
                      <div className="text-xs sm:text-sm font-semibold truncate max-w-[210px] sm:max-w-xs">
                        {layer.title}
                      </div>
                      <div className="text-[11px] text-slate-400 truncate max-w-[210px]">
                        {layer.subtitle}
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-sky-400 shrink-0 ml-2">
                    {layer.thickness}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Prawa kolumna: Szczegółowa karta wybranej warstwy z wizualizacją */}
        <div className="lg:col-span-7">
          <div className="relative p-6 sm:p-10 rounded-3xl sm:rounded-4xl bg-slate-900/60 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden min-h-[460px] flex flex-col justify-between">
            {/* Tło gradientowe powiązane z warstwą */}
            <div
              aria-hidden="true"
              className={`absolute inset-0 bg-linear-to-br ${activeLayer.gradient} opacity-40 -z-10`}
            />

            <div>
              {/* Odznaka numeru i grubości */}
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Warstwa #{activeLayer.number} z 10
                </span>
                <span className="text-xs font-mono text-slate-300 bg-white/10 px-3 py-1.5 rounded-full">
                  Grubość: {activeLayer.thickness}
                </span>
              </div>

              {/* Ikona i Tytuł */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300 shadow-inner">
                  <IconComponent className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {activeLayer.title}
                  </h3>
                  <p className="text-sm font-medium text-sky-300/80">
                    {activeLayer.subtitle}
                  </p>
                </div>
              </div>

              {/* Opis działania warstwy */}
              <p className="text-sm sm:text-base leading-relaxed text-slate-200 mt-6">
                {activeLayer.description}
              </p>
            </div>

            {/* Symulacja przekroju wielowarstwowego (3D Layer Stacking Bar) */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                <span>Stos warstw wyświetlacza Super Retina XDR</span>
                <span className="font-mono text-sky-400">Suma: &lt; 0,55 mm</span>
              </div>

              {/* Pasek warstw */}
              <div className="w-full h-3 rounded-full bg-slate-950 flex overflow-hidden p-0.5 border border-white/10">
                {layers.map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedLayerIndex(i)}
                    className={`flex-1 h-full mx-0.5 rounded-sm transition-all cursor-pointer ${
                      i === selectedLayerIndex
                        ? "bg-sky-400 shadow-sm shadow-sky-400 scale-y-125"
                        : "bg-white/20 hover:bg-white/40"
                    }`}
                    title={`Przejdź do warstwy ${i + 1}`}
                  />
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-sky-400" />
                  Odporność na 500k zgięć
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  Redukcja odblasków o 94%
                </span>
                <span className="flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-emerald-400" />
                  100% niewidoczna kamera FaceTime
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
