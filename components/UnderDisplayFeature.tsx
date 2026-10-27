"use client"

import { useState } from "react"
import { Eye, EyeOff, Sparkles, Video, ShieldCheck, Film } from "lucide-react"

export default function UnderDisplayFeature() {
  const [cameraActive, setCameraActive] = useState(false)

  return (
    <section className='relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24'>
      {/* Tło poświaty */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.15),transparent_70%)]'
      />

      <div className='p-8 sm:p-12 md:p-16 rounded-3xl sm:rounded-4xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl shadow-2xl'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-10 items-center'>
          {/* Lewa kolumna: Tekst i objaśnienie technologii */}
          <div className='lg:col-span-6 space-y-5'>
            <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25'>
              <EyeOff className='w-3.5 h-3.5' />
              Niewidoczna technologia Under-Display
            </div>

            <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight'>
              Aparat FaceTime ukryty pod ekranem.{" "}
              <span className='block bg-linear-to-r from-emerald-300 via-sky-200 to-blue-400 bg-clip-text text-transparent'>
                Widzisz tylko obraz. Nic więcej.
              </span>
            </h2>

            <p className='text-sm sm:text-base text-slate-300 leading-relaxed'>
              Koniec z wcięciami, otworami i odwracającymi uwagę ramkami. W
              iPhone Duo aparat FaceTime HD zintegrowano bezpośrednio pod
              matrycą OLED. Specjalnie ułożona siatka subpikseli zachowuje
              identyczną ostrość i jasność co reszta ekranu. Aparat budzi się do
              życia tylko wtedy, gdy uruchamiasz FaceTime lub odblokowujesz
              telefon Face ID.
            </p>

            <div className='pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4'>
              <button
                onClick={() => setCameraActive(false)}
                className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                  !cameraActive
                    ? "bg-sky-500/20 border-sky-400 text-sky-200 shadow-lg shadow-sky-500/20"
                    : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                <Film className='w-4 h-4 text-sky-400' />
                <span>Tryb pełnoekranowy (Gry / Filmy)</span>
              </button>

              <button
                onClick={() => setCameraActive(true)}
                className={`flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all border ${
                  cameraActive
                    ? "bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-lg shadow-emerald-500/20"
                    : "bg-white/5 border-white/10 text-slate-400 hover:text-white"
                }`}
              >
                <Video className='w-4 h-4 text-emerald-400' />
                <span>Aktywuj aparat FaceTime</span>
              </button>
            </div>

            <div className='grid grid-cols-2 gap-4 pt-4 border-t border-white/10 text-xs text-slate-400'>
              <div className='flex items-center gap-2'>
                <ShieldCheck className='w-4 h-4 text-sky-400' />
                <span>Face ID działa przez piksele</span>
              </div>
              <div className='flex items-center gap-2'>
                <Sparkles className='w-4 h-4 text-emerald-400' />
                <span>Algorytmy korekcji Photonic Engine</span>
              </div>
            </div>
          </div>

          {/* Prawa kolumna: Interaktywna wizualizacja ekranu i kamery */}
          <div className='lg:col-span-6 flex flex-col items-center'>
            <div className='relative w-full max-w-110 aspect-4/3 rounded-3xl bg-black border-2 border-slate-700 shadow-2xl overflow-hidden p-6 flex flex-col items-center justify-between'>
              {/* Górna krawędź z soczewką Under-Display */}
              <div className='relative flex flex-col items-center'>
                {/* Wskaźnik stanu diody kamery */}
                <div
                  className={`transition-all duration-500 flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-medium ${
                    cameraActive
                      ? "bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 shadow-md shadow-emerald-500/30"
                      : "bg-slate-900/40 text-slate-500 border border-white/5"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      cameraActive
                        ? "bg-emerald-400 animate-ping"
                        : "bg-slate-600"
                    }`}
                  />
                  <span>
                    {cameraActive ? "FaceTime HD Aktywny" : "Ekran gładki 100%"}
                  </span>
                </div>

                {/* Punkt kamery pod ekranem */}
                <div className='relative mt-4 flex items-center justify-center'>
                  <div
                    className={`w-16 h-16 rounded-full border transition-all duration-500 flex items-center justify-center ${
                      cameraActive
                        ? "bg-emerald-950/90 border-emerald-400 shadow-xl shadow-emerald-500/40 scale-110"
                        : "bg-slate-950/90 border-white/10 opacity-30"
                    }`}
                  >
                    {cameraActive ? (
                      <Eye className='w-7 h-7 text-emerald-300 transition-transform duration-300' />
                    ) : (
                      <div className='w-8 h-8 rounded-full bg-linear-to-tr from-sky-400/20 to-blue-500/20 border border-white/10 flex items-center justify-center'>
                        <span className='text-[9px] text-sky-400 font-mono'>
                          OLED
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Poświata promieniowa podczas aktywności */}
                  {cameraActive && (
                    <div
                      aria-hidden='true'
                      className='absolute inset-0 -m-4 bg-emerald-500/20 rounded-full blur-xl pointer-events-none animate-pulse'
                    />
                  )}
                </div>
              </div>

              {/* Środek symulujący wyświetlaną treść */}
              <div className='w-full text-center py-4'>
                <div
                  className={`text-sm sm:text-base font-semibold transition-all duration-300 ${
                    cameraActive ? "text-emerald-300" : "text-sky-300"
                  }`}
                >
                  {cameraActive
                    ? "Transmisja wideo 1080p FaceTime z Center Stage"
                    : "Zero martwych punktów. 100% powierzchni dla Twojej gry."}
                </div>
                <p className='text-xs text-slate-400 mt-1 max-w-xs mx-auto'>
                  {cameraActive
                    ? "Piksele powyżej kamery stają się w 92% przezroczyste, umożliwiając krystaliczny obraz."
                    : "Piksele emitują pełną gamę kolorów P3, zlewając się idealnie z otaczającą treścią."}
                </p>
              </div>

              {/* Dolny pasek symulatora */}
              <div className='w-full flex items-center justify-between text-[11px] text-slate-500 font-mono border-t border-white/10 pt-3'>
                <span>MATRYCA: 7,6″ OLED</span>
                <span>
                  STATUS: {cameraActive ? "PRZEZROCZYSTA" : "EMISYJNA"}
                </span>
                <span>ODBLASKI: 0%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
