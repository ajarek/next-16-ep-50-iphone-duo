import React from "react";
import HeroHeader from "@/components/HeroHeader";
import HeroVisual from "@/components/HeroVisual";
import SpecGrid from "@/components/SpecGrid";
import HeroBottom from "@/components/HeroBottom";
import SpotlightEffect from "@/components/SpotlightEffect";

export default function HomePage() {
  return (
    <div className="relative isolate min-h-screen flex flex-col justify-between overflow-x-hidden bg-[#020610] text-slate-100">
      {/* Dynamiczny teatralny spotlight i wiązka światła */}
      <SpotlightEffect />

      {/* Górna sekcja z typografią o wiernej hierarchii i proporcjach */}
      <HeroHeader />

      {/* Centralna kompozycja produktowa z potrójnym ujęciem iPhone Duo na tafli wody */}
      <HeroVisual />

      {/* 5-kolumnowa siatka specyfikacji z dokładnymi ikonami i podświetlanymi separatorami */}
      <SpecGrid />

      {/* Dolny obszar tekstu z hasłem podsumowującym oraz przełącznikiem wykończeń */}
      <HeroBottom />
    </div>
  );
}
