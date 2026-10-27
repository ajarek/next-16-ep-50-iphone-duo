import { Sparkles, Users, Mic, Cpu, ShieldCheck, Zap } from "lucide-react"

export default function CameraBentoGrid() {
  const bentoItems = [
    {
      title: "Duo FaceTime",
      subtitle: "Wszyscy wokół uczestniczą w rozmowie",
      description:
        "Wykorzystaj symultaniczny strumień z dwóch kamer. Pokaż rozmówcom siebie oraz przyjaciół siedzących po przeciwnej stronie stołu, bez konieczności obracania urządzenia.",
      icon: Users,
      badge: "Podwójny strumień",
      gradient: "from-sky-500/20 via-blue-500/10 to-transparent",
      colSpan: "lg:col-span-8",
    },
    {
      title: "Inteligentna migawka",
      subtitle: "Bądź częścią wyjątkowej chwili",
      description:
        "Zamiast bezustannie wciskać spust migawki, ciesz się momentem. Aparat rejestruje bufor klatek i z pomocą Neural Engine wybiera idealne ujęcie z otwartymi oczami i szczerym uśmiechem.",
      icon: Zap,
      badge: "Zero Shutter Lag",
      gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
      colSpan: "lg:col-span-4",
    },
    {
      title: "Photonic Engine & Deep Fusion",
      subtitle: "Magia obliczeniowa układu A20 Pro",
      description:
        "Wieloklatkowe łączenie ekspozycji na poziomie nieskompresowanych pikseli zachowuje niesamowitą fakturę ubrań, skóry i subtelne cienie w głębokim zmierzchu.",
      icon: Cpu,
      badge: "Neural Engine A20 Pro",
      gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
      colSpan: "lg:col-span-4",
    },
    {
      title: "Dźwięk przestrzenny Audio Mix",
      subtitle: "Studyjne audio z redukcją wiatru",
      description:
        "Układ trzech mikrofonów klasy studyjnej precyzyjnie rejestruje dźwięk przestrzenny. Funkcja Audio Mix pozwala jednym dotknięciem wyizolować głos osoby mówiącej w kadrze od miejskiego zgiełku.",
      icon: Mic,
      badge: "3 Mikrofony Studyjne",
      gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
      colSpan: "lg:col-span-4",
    },
    {
      title: "Tytanowa wyspa i szafirowe szkło",
      subtitle: "Maksymalna trwałość i odporność IP68",
      description:
        "Krystaliczny szafir chroni każdą z soczewek przed zarysowaniami kluczami czy piaskiem. Uszczelniona tytanowa obudowa klasy 5 gwarantuje odporność na zachlapania i zanurzenia.",
      icon: ShieldCheck,
      badge: "Klasa IP68",
      gradient: "from-slate-500/20 via-slate-700/10 to-transparent",
      colSpan: "lg:col-span-4",
    },
  ]

  return (
    <section className='relative py-16 sm:py-24 overflow-hidden'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Nagłówek sekcji */}
        <div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3'>
            <Sparkles className='w-3.5 h-3.5' />
            <span>Zaawansowane technologie</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight'>
            Rewolucja w każdym detalu konstrukcji
          </h2>
          <p className='mt-4 text-base sm:text-lg text-slate-300 font-light'>
            Innowacje sprzętowe i potężne algorytmy uczenia maszynowego
            połączone w jeden bezkompromisowy ekosystem.
          </p>
        </div>

        {/* Siatka Bento */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6'>
          {bentoItems.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className={`group relative rounded-3xl p-6 sm:p-8 border border-white/10 bg-slate-950/70 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-sky-400/30 hover:shadow-xl hover:shadow-sky-950/30 flex flex-col justify-between ${item.colSpan}`}
              >
                {/* Tło gradientowe karty */}
                <div
                  aria-hidden='true'
                  className={`pointer-events-none absolute inset-0 bg-linear-to-br ${item.gradient} opacity-50 group-hover:opacity-80 transition-opacity`}
                />

                <div className='relative z-10'>
                  <div className='flex items-center justify-between gap-4 mb-6'>
                    <div className='w-10 h-10 rounded-2xl bg-sky-500/10 border border-sky-400/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform'>
                      <Icon className='w-5 h-5' />
                    </div>
                    <span className='px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono font-medium text-slate-300'>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className='text-xl sm:text-2xl font-bold text-white tracking-tight'>
                    {item.title}
                  </h3>
                  <p className='text-sm font-medium text-sky-300/90 mt-1'>
                    {item.subtitle}
                  </p>
                  <p className='mt-4 text-sm text-slate-300 leading-relaxed font-light'>
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
