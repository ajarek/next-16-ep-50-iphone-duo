import React from "react";
import type { Metadata } from "next";
import CameraHero from "@/components/CameraHero";
import CameraInteractiveStudio from "@/components/CameraInteractiveStudio";
import CameraGalleryShowcase from "@/components/CameraGalleryShowcase";
import CameraBentoGrid from "@/components/CameraBentoGrid";
import CameraSpecsTable from "@/components/CameraSpecsTable";

export const metadata: Metadata = {
  title: "Aparat Fusion 48 MP — iPhone Duo | Apple (Polska)",
  description:
    "Poznaj przełomowy system aparatów 48 MP Dual Fusion w iPhonie Duo. Duo Preview na zewnętrznym ekranie, zdjęcia bez trzymanki FlexCam, Animacja dla dziecka oraz wideo 4K 120 kl./s Dolby Vision.",
  keywords: [
    "iPhone Duo aparat",
    "Aparat Fusion 48 MP",
    "Duo Preview",
    "FlexCam",
    "Animacja dla dziecka",
    "Wideo 4K 120 fps",
    "Apple Polska",
  ],
  openGraph: {
    title: "System aparatów Fusion 48 MP — iPhone Duo",
    description:
      "Zdjęcia i filmy bez trzymanki. Odkryj Duo Preview, FlexCam 90° i profesjonalne wideo 4K 120 kl./s w składanym iPhonie Duo.",
    images: [
      {
        url: "/images/camera.jpg",
        width: 1200,
        height: 800,
        alt: "System aparatów iPhone Duo",
      },
    ],
  },
};

export default function CameraPage() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#020610] text-slate-100">
      {/* Tło gradientowe i teatralne refleksy świetlne */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.2),transparent_50%),radial-gradient(ellipse_at_80%_25%,rgba(99,102,241,0.15),transparent_45%),radial-gradient(ellipse_at_20%_70%,rgba(14,165,233,0.12),transparent_50%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#020610_0%,#040d1e_40%,#020610_100%)] opacity-95"
      />

      <main className="flex flex-col">
        {/* Sekcja Hero z inspekcją soczewek */}
        <CameraHero />

        {/* Interaktywne studio aparatów (Duo Preview, FlexCam, Animacja dla dziecka, Ogniskowe, Wideo) */}
        <CameraInteractiveStudio />

        {/* Galeria zdjęć wysokiej rozdzielczości z lupą 48 MP */}
        <CameraGalleryShowcase />

        {/* Siatka Bento z kluczowymi technologiami */}
        <CameraBentoGrid />

        {/* Tabela specyfikacji technicznej i sekcja CTA */}
        <CameraSpecsTable />
      </main>
    </div>
  );
}
