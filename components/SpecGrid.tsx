import React from "react";

export default function SpecGrid() {
  return (
    <section
      id="specyfikacja"
      className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 pt-6 sm:pt-10 pb-8"
      aria-label="Najważniejsze parametry techniczne iPhone Duo"
    >
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-sky-500/20 text-center">
        {/* Kolumna 1: 7.6" IMMERSIVE DISPLAY */}
        <div id="wyswietlacz" className="flex flex-col items-center justify-start px-2 py-4 sm:py-2 group">
          <div className="h-12 flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="w-9 h-9 stroke-current"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M23 11L10 8.5C8.3 8.5 7 9.8 7 11.5V34C7 35.7 8.3 37 10 37L23 39.5V11Z" />
              <path d="M25 11L38 8.5C39.7 8.5 41 9.8 41 11.5V34C41 35.7 39.7 37 38 37L25 39.5V11Z" />
            </svg>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            7.6&Prime;
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200">
            Wyświetlacz Immersive
          </p>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            Zewnętrzny ekran 5.4&Prime;
          </p>
          <p className="text-xs text-slate-400 leading-snug">
            120Hz ProMotion
          </p>
        </div>

        {/* Kolumna 2: A20 PRO */}
        <div id="wydajnosc" className="flex flex-col items-center justify-start px-2 py-4 sm:py-2 group">
          <div className="h-12 flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="w-9 h-9 stroke-current"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="13" y="13" width="22" height="22" rx="4" />
              <path d="M18 7V13M24 7V13M30 7V13M18 35V41M24 35V41M30 35V41M7 18H13M7 24H13M7 30H13M35 18H41M35 24H41M35 30H41" />
              <text
                x="24"
                y="26.5"
                fill="currentColor"
                stroke="none"
                fontSize="7.5"
                fontWeight="700"
                textAnchor="middle"
                letterSpacing="0.4"
              >
                A20
              </text>
            </svg>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            A20 PRO
          </p>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            Potężny. Wydajny.
          </p>
          <p className="text-xs text-slate-400 leading-snug">
            Stworzony na przyszłość.
          </p>
        </div>

        {/* Kolumna 3: 48MP DUAL FUSION */}
        <div id="aparat" className="flex flex-col items-center justify-start px-2 py-4 sm:py-2 group">
          <div className="h-12 flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="w-10 h-10 stroke-current"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="8" y="14" width="32" height="20" rx="10" />
              <circle cx="18" cy="24" r="4.5" />
              <circle cx="30" cy="24" r="4.5" />
            </svg>
          </div>
          <p className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-white">
            48MP
          </p>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200">
            Dual Fusion
          </p>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            Do 2x zbliżenie
          </p>
          <p className="text-xs text-slate-400 leading-snug">
            o jakości optycznej.
          </p>
        </div>

        {/* Kolumna 4: IP68 + TITANIUM */}
        <div className="flex flex-col items-center justify-start px-2 py-4 sm:py-2 group">
          <div className="h-12 flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="w-9 h-9 stroke-current"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M24 9C24 9 13.5 22.5 13.5 29.5C13.5 35.3 18.2 40 24 40C29.8 40 34.5 35.3 34.5 29.5C34.5 22.5 24 9 24 9Z" />
              <path d="M21 34.5C18.5 33.5 17 31 17 28" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="mt-3 text-lg sm:text-2xl font-bold tracking-tight text-white">
            IP68 + TITANIUM
          </p>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            Woda. Pył. Życie.
          </p>
          <p className="text-xs text-slate-400 leading-snug">
            Bez ograniczeń.
          </p>
        </div>

        {/* Kolumna 5: APPLE PENCIL + iOS 27 */}
        <div className="flex flex-col items-center justify-start px-2 py-4 sm:py-2 col-span-2 md:col-span-1 group">
          <div className="h-12 flex items-center justify-center text-sky-400 group-hover:text-sky-300 transition-colors drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              className="w-9 h-9 stroke-current"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M35 11L37 13C38.5 14.5 38.5 16.8 37 18.2L16 39.2L9 41L10.8 34L31.8 13C33.2 11.5 33.5 11.5 35 11Z" />
              <path d="M28.5 16.5L33.5 21.5" />
            </svg>
          </div>
          <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-200">
            Apple Pencil +
          </p>
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-white">
            iOS 27
          </p>
          <p className="mt-2 text-xs text-slate-400 leading-snug">
            Więcej sposobów tworzenia.
          </p>
          <p className="text-xs text-slate-400 leading-snug">
            Więcej możliwości działania.
          </p>
        </div>
      </div>
    </section>
  );
}
