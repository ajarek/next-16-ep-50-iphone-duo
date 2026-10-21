import React from "react";
import Image from "next/image";

export default function HeroVisual() {
  return (
    <section
      id="przeglad"
      className="relative z-10 mx-auto max-w-6xl px-2 sm:px-6 flex flex-col items-center justify-center my-0 sm:my-2"
    >
      <div className="relative w-full max-w-5xl flex items-center justify-center">
        {/* Subtelne światło odbite na podłodze pod zawiasem telefonu */}
        <div
          aria-hidden="true"
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-28 bg-linear-to-r from-transparent via-sky-500/20 to-transparent blur-2xl pointer-events-none"
        />

        {/* Trzy ujęcia iPhone Duo: Tył Space Black, Rozłożony ekran 7.6", Tył Star White */}
        <div className="relative w-full overflow-hidden flex justify-center group">
          <Image
            src="/ui/phones-hero-clean2.png"
            alt="iPhone Duo w ujęciu potrójnym: Gwiezdna Czerń, główny elastyczny ekran 7.6 cala oraz Gwiezdna Biel"
            width={1024}
            height={630}
            priority
            quality={95}
            className="w-full h-auto max-w-5xl object-contain transition-transform duration-700 ease-out group-hover:scale-[1.01]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1024px"
          />
        </div>
      </div>
    </section>
  );
}
