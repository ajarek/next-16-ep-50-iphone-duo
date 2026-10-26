import React from "react";
import type { Metadata } from "next";
import DuoVideoShowcase from "@/components/DuoVideoShowcase";
import {
  Cpu,
  BatteryCharging,
  Camera,
  ShieldCheck,
  Layers,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Szczegółowy opis — iPhone Duo | Apple (Polska)",
  description:
    "Poznaj rewolucyjny iPhone Duo – pierwszy składany iPhone z wewnętrznym ekranem 7.6 cala, procesorem A20 Pro, potężną baterią i tytanowym zawiasem.",
};

export default function OpisPage() {
  const highlights = [
    {
      icon: Layers,
      title: "Dwa ekrany, nieskończone możliwości",
      text: "Po rozłożeniu to najsmuklejszy iPhone z największym wyświetlaczem w historii – aż o 50% większym niż w iPhonie 18 Pro Max. Zewnętrzny 5,4-calowy ekran zapewnia aż 90% powierzchni ekranu iPhone’a 18 Pro w kompaktowej, kieszonkowej formie.",
    },
    {
      icon: Cpu,
      title: "Moc układu A20 Pro i komory parowej",
      text: "Procesor wykonany w technologii 2-nanometrowej z 6-rdzeniowym CPU szybszym o 20%, 7-rdzeniowym GPU i nowym 16-rdzeniowym Neural Engine. Nowatorska komora parowa utrzymuje optymalną temperaturę podczas intensywnej pracy wielozadaniowej Split View.",
    },
    {
      icon: Camera,
      title: "Aparat Fusion 48 MP & 4K 120 kl./s",
      text: "Rejestracja wideo 4K z prędkością 120 kl./s w formacie Dolby Vision z możliwością spowolnienia do kinowego slow motion. Składana konstrukcja pozwala na nagrywanie poklatkowe i autoportrety bez konieczności używania statywu.",
    },
    {
      icon: BatteryCharging,
      title: "Architektura podwójnej baterii",
      text: "Niezależne ogniwa o dużej pojemności po obu stronach zawiasu zapewniają do 31 godzin odtwarzania wideo. Szybkie ładowanie do 50% w około 20 minut lub bezprzewodowo w 30 minut za pomocą MagSafe / Qi2.",
    },
    {
      icon: ShieldCheck,
      title: "Tytan klasy 5 i Ceramic Shield 2",
      text: "Obudowa z tytanu klasy 5 o lustrzanym wykończeniu oraz precyzyjny zawias z ponad 100 komponentów z mikropiaskowaną osłoną 3D. Szkło Ceramic Shield 2 oferuje 3-krotnie większą odporność na zarysowania przy zachowaniu normy wodoszczelności IP68.",
    },
    {
      icon: Sparkles,
      title: "Projektowane akcesoria Folio & Duo Case",
      text: "Etui iPhone Duo Folio ze zintegrowaną podpórką umożliwiającą wygodną pracę w dowolnym kącie oraz dwuczęściowe etui Duo Case w kolorach piaskowym i granatowym z pełną obsługą ładowania MagSafe 25 W.",
    },
  ];

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Tło gradientowe i radialne refleksy świetlne */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_15%_10%,rgba(59,130,246,0.28),transparent_42%),radial-gradient(ellipse_at_85%_45%,rgba(14,165,233,0.18),transparent_40%),radial-gradient(ellipse_at_50%_100%,rgba(37,99,235,0.2),transparent_48%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#020617_0%,#071426_48%,#020617_100%)] opacity-90"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Nagłówek i wstęp */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] font-semibold text-sky-400">
            iPhone Duo
          </p>

          <h1 className="mt-4 text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
            Nowy wymiar.{" "}
            <span className="block bg-linear-to-b from-white via-sky-200 to-blue-500 bg-clip-text text-transparent">
              Złóż. Otwórz. Odkryj więcej.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-slate-300">
            Przedstawiamy Duo – pierwszego składanego iPhone’a. Po rozłożeniu to najsmuklejszy
            iPhone z największym wyświetlaczem w historii – aż o 50% większym niż w iPhonie 18 Pro Max.
            Zewnętrzny wyświetlacz jest równie zachwycający, a nowe wcielenie iOS zapewnia Duo niebywałą
            wszechstronność w każdym możliwym ułożeniu.
          </p>
        </div>

        {/* Kreatywna prezentacja wideo zastępująca dawny obrazek png */}
        <div className="mt-10 sm:mt-12">
          <DuoVideoShowcase />
        </div>

        {/* Siatka innowacji i funkcji z czytelnym podziałem */}
        <div className="mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
              Inżynieria przyszłości w każdym detalu
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-400">
              Odkryj przełomowe rozwiązania technologiczne, które tworzą iPhone Duo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-white/10 hover:border-sky-500/40 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/10 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 mb-5">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dolne hasło podsumowujące */}
        <div className="mt-20 sm:mt-28 text-center border-t border-white/10 pt-12">
          <p className="text-sm sm:text-base tracking-[0.3em] font-semibold uppercase bg-linear-to-r from-sky-300 via-blue-200 to-sky-400 bg-clip-text text-transparent">
            FOLD. OPEN. EXPERIENCE MORE.
          </p>
          <p className="mt-2 text-xs text-slate-500">
            iPhone Duo — Zaprojektowany przez Apple w Kalifornii.
          </p>
        </div>
      </div>
    </div>
  );
}