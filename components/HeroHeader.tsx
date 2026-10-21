import React from "react";
import AppleLogo from "./AppleLogo";

export default function HeroHeader() {
  return (
    <section className="relative z-10 mx-auto max-w-5xl px-4 pt-8 sm:pt-12 md:pt-16 pb-2 text-center">
      {/*  iPhone Duo Logo & Nazwa */}
      <div className="inline-flex items-center justify-center gap-2.5 mb-3 sm:mb-5">
        <AppleLogo className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        <span className="text-base sm:text-lg font-semibold tracking-wide text-slate-100">
          iPhone Duo
        </span>
      </div>

      {/* A NEW DIMENSION OF / NOWY WYMIAR */}
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-light uppercase tracking-[0.26em] text-slate-200">
        Nowy wymiar
      </h2>

      {/* iPHONE - Gigantyczny z gradientem i podświetleniem */}
      <div className="relative my-1 sm:my-2 flex items-center justify-center">
        {/* Poświata kinowa za napisem */}
        <div
          aria-hidden="true"
          className="absolute -inset-4 bg-sky-500/25 blur-3xl rounded-full opacity-65 pointer-events-none"
        />

        <h1 className="relative text-7xl sm:text-9xl md:text-[130px] lg:text-[148px] font-extrabold tracking-tight leading-none select-none">
          <span className="bg-linear-to-b from-white via-sky-100 to-sky-400 bg-clip-text text-transparent drop-shadow-[0_2px_28px_rgba(56,189,248,0.45)]">
            <span className="font-semibold lowercase">i</span>PHONE
          </span>
        </h1>
      </div>

      {/* FOLD. OPEN. EXPERIENCE MORE. / ZŁÓŻ. OTWÓRZ. ODKRYJ WIĘCEJ. */}
      <p className="mt-2 sm:mt-4 text-[11px] sm:text-xs md:text-sm font-medium uppercase tracking-[0.34em] text-slate-400">
        Złóż. Otwórz. Odkryj więcej.
      </p>
    </section>
  );
}
