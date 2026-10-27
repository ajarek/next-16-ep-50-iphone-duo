import type { Metadata } from "next"
import SpotlightEffect from "@/components/SpotlightEffect"
import SpecificationHero from "@/components/SpecificationHero"
import SpecificationViewer from "@/components/SpecificationViewer"
import specData from "@/public/data/specification-data.json"

export const metadata: Metadata = {
  title: "Specyfikacja techniczna — iPhone Duo | Apple (Polska)",
  description:
    "Kompletna specyfikacja techniczna iPhone Duo. Ekran 7,6″ Super Retina XDR 120 Hz, układ A20 Pro 2 nm, aparat Fusion 48 MP, bateria do 44 godz., tytan klasy 5 i norma IP68.",
  keywords: [
    "iPhone Duo specyfikacja",
    "dane techniczne iPhone Duo",
    "A20 Pro",
    "ekran 7.6 cala",
    "Super Retina XDR",
    "aparat 48MP Dual Fusion",
    "wymiary iPhone Duo",
    "bateria iPhone Duo",
    "Apple Polska",
  ],
  openGraph: {
    title: "Specyfikacja techniczna — iPhone Duo",
    description:
      "Potęga w każdym milimetrze. Poznaj wszystkie parametry techniczne pierwszego składanego iPhone’a.",
    url: "https://www.apple.com/pl/iphone-duo/specification",
    siteName: "Apple (Polska)",
    images: [
      {
        url: "/images/specyfikacja.png",
        width: 677,
        height: 369,
        alt: "iPhone Duo - Pełna specyfikacja techniczna",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
}

export default function SpecificationPage() {
  return (
    <div className='relative isolate min-h-screen overflow-x-hidden bg-[#020610] text-slate-100'>
      {/* Subtelny ambient spotlight podążający za ruchem */}
      <SpotlightEffect />

      {/* Tło gradientowe i teatralne refleksy świetlne */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.18),transparent_50%),radial-gradient(ellipse_at_80%_35%,rgba(99,102,241,0.14),transparent_45%),radial-gradient(ellipse_at_20%_80%,rgba(14,165,233,0.12),transparent_48%)]'
      />
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,#020610_0%,#051124_45%,#020610_100%)] opacity-95'
      />

      <main className='flex flex-col'>
        {/* Sekcja Hero z prezentacją obrazu /images/specyfikacja.png, interaktywnymi punktami i wymiarami */}
        <SpecificationHero />

        {/* Interaktywna przeglądarka specyfikacji z kalkulatorem pojemności, wyszukiwarką i pełną tabelą parametrów */}
        <SpecificationViewer
          initialSections={specData.sections}
          capacities={specData.capacities}
        />
      </main>
    </div>
  )
}
