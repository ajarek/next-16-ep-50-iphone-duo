"use client";

import React, { useState } from "react";
import OrderModal from "./OrderModal";

export default function HeroBottom() {
  const [activeColor, setActiveColor] = useState<"night-sky" | "star-white">("night-sky");
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  return (
    <section className="relative z-10 w-full pt-10 pb-16 text-center overflow-hidden">
      {/* Tło z subtelną linią horyzontu i odbiciem jeziora */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-linear-to-b from-transparent via-[#06101c]/80 to-[#02060e]"
      />

      <div className="mx-auto max-w-4xl px-4 flex flex-col items-center">
        {/* THE BIGGEST iPHONE DISPLAY. NOW IN YOUR POCKET. */}
        <div className="space-y-1 sm:space-y-2">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light uppercase tracking-[0.28em] text-slate-200">
            Największy wyświetlacz{" "}
            <span className="font-bold text-white tracking-normal">
              <span className="lowercase font-bold">i</span>PHONE
            </span>
            .
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light uppercase tracking-[0.28em] text-slate-200">
            Teraz w Twojej kieszeni.
          </p>
        </div>

        {/* Niebieska świetlna linia akcentująca */}
        <div
          aria-hidden="true"
          className="my-6 sm:my-8 w-12 sm:w-16 h-[2.5px] rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.9)]"
        />

        {/* Przełącznik / wskaźnik wykończeń: iPhone Duo • Night Sky / Star White */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium tracking-wide text-slate-300">
          <span className="text-slate-100 font-semibold">iPhone Duo</span>
          <span className="text-sky-500/60">•</span>
          
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full backdrop-blur-md">
            {/* Przycisk Gwiezdna czerń */}
            <button
              onClick={() => setActiveColor("night-sky")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all ${
                activeColor === "night-sky"
                  ? "bg-slate-800 text-white shadow-sm ring-1 ring-sky-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-600 shadow-inner" />
              <span>Gwiezdna czerń / Night Sky</span>
            </button>

            <span className="text-slate-600">|</span>

            {/* Przycisk Gwiezdna biel */}
            <button
              onClick={() => setActiveColor("star-white")}
              className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs transition-all ${
                activeColor === "star-white"
                  ? "bg-slate-700/80 text-white shadow-sm ring-1 ring-sky-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <span className="w-2.5 h-2.5 rounded-full bg-neutral-200 border border-white/60 shadow-inner" />
              <span>Gwiezdna biel / Star White</span>
            </button>
          </div>
        </div>

        {/* Dodatkowy szybki przycisk CTA w stopce */}
        <div className="mt-8">
          <button
            onClick={() => setOrderModalOpen(true)}
            className="px-6 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40 backdrop-blur-md transition-all active:scale-95 shadow-lg shadow-sky-500/10"
          >
            Sprawdź dostępność i zamów
          </button>
        </div>
      </div>

      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
        initialColor={activeColor}
      />
    </section>
  );
}
