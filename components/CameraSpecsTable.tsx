import React from "react"
import Link from "next/link"
import AppleLogo from "./AppleLogo"
import { ChevronRight, Sparkles } from "lucide-react"

export default function CameraSpecsTable() {
  const specs = [
    {
      feature: "Rozdzielczość matrycy",
      main: "48 MP Quad-Pixel",
      ultra: "48 MP Quad-Pixel",
      front: "12 MP Pod ekranem (UDC)",
    },
    {
      feature: "Ogniskowa i światłosiła",
      main: "24 mm (opcje 28/35/48 mm) • f/1.6",
      ultra: "13 mm (pole widzenia 120°) • f/2.2",
      front: "23 mm • f/1.9",
    },
    {
      feature: "Stabilizacja obrazu",
      main: "Sensor-shift OIS 2. generacji",
      ultra: "Elektroniczna + korekta optyki",
      front: "Cyfrowa Cinematic Video",
    },
    {
      feature: "Tryb Makro",
      main: "—",
      ultra: "Ostrość od 2 cm z autofokusem",
      front: "—",
    },
    {
      feature: "Wideo 4K",
      main: "Do 120 kl./s w formacie Dolby Vision",
      ultra: "Do 60 kl./s w formacie Dolby Vision",
      front: "Do 60 kl./s w formacie Dolby Vision",
    },
    {
      feature: "Formaty profesjonalne",
      main: "Apple ProRAW, ProRes 4K, Log",
      ultra: "Apple ProRAW, ProRes 4K, Log",
      front: "Dolby Vision HDR",
    },
    {
      feature: "Duo Preview (2 Ekrany)",
      main: "Pełna obsługa na ekranie 5,4″",
      ultra: "Pełna obsługa na ekranie 5,4″",
      front: "Duo FaceTime Dual-Stream",
    },
    {
      feature: "FlexCam (Tryb statywowy)",
      main: "Kąt 45°–135° bez akcesoriów",
      ultra: "Kąt 45°–135° bez akcesoriów",
      front: "Idealny kąt do wideokonferencji",
    },
  ]

  return (
    <section
      id='specyfikacja-aparatu'
      className='relative py-16 sm:py-24 overflow-hidden'
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Nagłówek */}
        <div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3'>
            <Sparkles className='w-3.5 h-3.5' />
            <span>Pełna specyfikacja optyczna</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight'>
            Porównaj parametry aparatów iPhone Duo
          </h2>
          <p className='mt-4 text-base sm:text-lg text-slate-300 font-light'>
            Trzy wyspecjalizowane sensory pracujące w idealnej harmonii.
          </p>
        </div>

        {/* Tabela specyfikacji */}
        <div className='max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-white/10 bg-slate-950/80 backdrop-blur-xl shadow-2xl'>
          <table className='w-full text-left text-xs sm:text-sm'>
            <thead>
              <tr className='border-b border-white/15 bg-white/5'>
                <th className='p-4 sm:p-5 font-semibold text-slate-400'>
                  Parametr
                </th>
                <th className='p-4 sm:p-5 font-bold text-sky-400'>
                  Główny Fusion 48 MP
                </th>
                <th className='p-4 sm:p-5 font-bold text-sky-400'>
                  Ultraszerokokątny 48 MP
                </th>
                <th className='p-4 sm:p-5 font-bold text-slate-200'>
                  FaceTime UDC 12 MP
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-white/5'>
              {specs.map((row) => (
                <tr
                  key={row.feature}
                  className='hover:bg-white/5 transition-colors'
                >
                  <td className='p-4 sm:p-5 font-medium text-slate-300'>
                    {row.feature}
                  </td>
                  <td className='p-4 sm:p-5 font-semibold text-white'>
                    {row.main}
                  </td>
                  <td className='p-4 sm:p-5 text-slate-200'>{row.ultra}</td>
                  <td className='p-4 sm:p-5 text-slate-400'>{row.front}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sekcja przejścia / CTA */}
        <div className='mt-16 sm:mt-24 p-8 sm:p-12 rounded-3xl bg-linear-to-r from-sky-950/60 via-slate-900 to-indigo-950/60 border border-sky-400/20 text-center max-w-4xl mx-auto shadow-2xl'>
          <div className='inline-flex items-center gap-2 mb-4'>
            <AppleLogo className='w-5 h-5 text-white' />
            <span className='text-lg font-bold text-white tracking-tight'>
              iPhone Duo
            </span>
          </div>

          <h3 className='text-2xl sm:text-3xl font-extrabold text-white'>
            Gotowy doświadczyć nowej ery fotografii mobilnej?
          </h3>

          <p className='mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto'>
            Odkryj także niesamowity elastyczny wyświetlacz Super Retina XDR lub
            przeczytaj pełny opis konstrukcji tytanowej i procesora A20 Pro.
          </p>

          <div className='mt-8 flex flex-wrap items-center justify-center gap-4'>
            <Link
              href='/display'
              className='px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-slate-200 transition-all shadow-lg shadow-white/10 flex items-center gap-2'
            >
              <span>Poznaj Wyświetlacz 7,6″</span>
              <ChevronRight className='w-4 h-4' />
            </Link>

            <Link
              href='/description'
              className='px-6 py-3 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/15 transition-all border border-white/20 flex items-center gap-2'
            >
              <span>Szczegółowy opis techniczny</span>
              <ChevronRight className='w-4 h-4' />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
