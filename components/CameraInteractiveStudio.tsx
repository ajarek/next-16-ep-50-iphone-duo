"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Sparkles,
  Smartphone,
  Smile,
  Video,
  Aperture,
  RotateCw,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Check,
  Compass,
  Clock,
  Camera,
} from "lucide-react"

type StudioTab = "duo-preview" | "flexcam" | "kids" | "focal" | "video"

export default function CameraInteractiveStudio() {
  const [activeTab, setActiveTab] = useState<StudioTab>("duo-preview")

  // Stan dla Duo Preview
  const [previewEnabled, setPreviewEnabled] = useState(true)
  const [photoFlash, setPhotoFlash] = useState(false)
  const [capturedCount, setCapturedCount] = useState(0)

  // Stan dla FlexCam
  const [flexAngle, setFlexAngle] = useState<number>(90)
  const [timerSeconds, setTimerSeconds] = useState<number>(3)
  const [timerActive, setTimerActive] = useState<boolean>(false)
  const [countdown, setCountdown] = useState<number | null>(null)

  // Stan dla Animacji dla dziecka
  const [activeMascot, setActiveMascot] = useState<"fox" | "star" | "robot">(
    "fox",
  )
  const [soundEnabled, setSoundEnabled] = useState(false)

  // Stan dla Ogniskowych
  const [focalLength, setFocalLength] = useState<string>("24mm")

  // Stan dla Wideo 4K 120 kl./s
  const [videoSpeed, setVideoSpeed] = useState<number>(24)
  const [audioMix, setAudioMix] = useState<"in-frame" | "studio" | "cinematic">(
    "cinematic",
  )
  const [isPlaying, setIsPlaying] = useState(true)

  // Dźwięk dzwoneczka przez Web Audio API (bezpieczny dla przeglądarki)
  const playChime = () => {
    if (!soundEnabled) return
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext })
          .webkitAudioContext
      if (!AudioCtx) return
      const ctx = new AudioCtx()
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = "sine"
      osc.frequency.setValueAtTime(587.33, ctx.currentTime) // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15) // A5
      gain.gain.setValueAtTime(0.2, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4)
      osc.connect(gain)
      gain.connect(ctx.destination)
      osc.start()
      osc.stop(ctx.currentTime + 0.45)
    } catch {
      // Ignoruj błędy audio
    }
  }

  const handleCapture = () => {
    setPhotoFlash(true)
    setCapturedCount((prev) => prev + 1)
    setTimeout(() => setPhotoFlash(false), 200)
  }

  const handleStartTimer = () => {
    if (timerActive) return
    setTimerActive(true)
    setCountdown(timerSeconds)

    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev === null || prev <= 1) {
          clearInterval(interval)
          setTimerActive(false)
          handleCapture()
          return null
        }
        return prev - 1
      })
    }, 1000)
  }

  return (
    <section className='relative py-16 sm:py-24 bg-slate-950/60 border-y border-white/10 overflow-hidden'>
      {/* Tło świetlne */}
      <div
        aria-hidden='true'
        className='pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.12),transparent_70%)]'
      />

      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Nagłówek sekcji */}
        <div className='text-center max-w-3xl mx-auto mb-10 sm:mb-14'>
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3'>
            <Sparkles className='w-3.5 h-3.5' />
            <span>Interaktywne Studio iPhone Duo</span>
          </div>
          <h2 className='text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight'>
            Poznaj możliwości, jakich nie ma żaden inny aparat
          </h2>
          <p className='mt-4 text-base sm:text-lg text-slate-300 font-light'>
            Przełączaj tryby poniżej i przetestuj na żywo, jak składana
            konstrukcja redefiniuje fotografowanie i nagrywanie wideo.
          </p>
        </div>

        {/* Nawigacja po zakładkach studia */}
        <div className='flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-4xl mx-auto mb-10 rounded-2xl bg-slate-900/90 border border-white/10 backdrop-blur-md'>
          <button
            onClick={() => setActiveTab("duo-preview")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "duo-preview"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Smartphone className='w-4 h-4' />
            <span>Duo Preview (2 Ekrany)</span>
          </button>

          <button
            onClick={() => setActiveTab("flexcam")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "flexcam"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <RotateCw className='w-4 h-4' />
            <span>FlexCam Bez trzymanki</span>
          </button>

          <button
            onClick={() => setActiveTab("kids")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "kids"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Smile className='w-4 h-4' />
            <span>Animacja dla dziecka</span>
          </button>

          <button
            onClick={() => setActiveTab("focal")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "focal"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Aperture className='w-4 h-4' />
            <span>Ogniskowe Fusion</span>
          </button>

          <button
            onClick={() => setActiveTab("video")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === "video"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-500/30"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            }`}
          >
            <Video className='w-4 h-4' />
            <span>Wideo 4K 120 kl./s</span>
          </button>
        </div>

        {/* ========================================================
            ZAKŁADKA 1: DUO PREVIEW
        ======================================================== */}
        {activeTab === "duo-preview" && (
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto'>
            {/* Opis po lewej */}
            <div className='lg:col-span-5 space-y-6'>
              <div className='inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 text-xs font-semibold'>
                Rewolucja w pozowaniu
              </div>
              <h3 className='text-2xl sm:text-3xl font-bold text-white'>
                Duo Preview. Koniec ze zdjęciami, na których „źle wyszłam”.
              </h3>
              <p className='text-slate-300 leading-relaxed'>
                Gdy rozłożysz iPhone Duo i robisz komuś zdjęcie, zewnętrzny
                ekran 5,4 cala wyświetla fotografowanej osobie podgląd kadru w
                czasie rzeczywistym.
              </p>
              <ul className='space-y-3 text-sm text-slate-300'>
                <li className='flex items-center gap-2'>
                  <Check className='w-4 h-4 text-sky-400 shrink-0' />
                  <span>
                    Model natychmiast widzi swoją fryzurę, uśmiech i pozę
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <Check className='w-4 h-4 text-sky-400 shrink-0' />
                  <span>
                    Ty komponujesz kadr na rozległym wyświetlaczu 7,6″
                  </span>
                </li>
                <li className='flex items-center gap-2'>
                  <Check className='w-4 h-4 text-sky-400 shrink-0' />
                  <span>
                    Inteligentna detekcja uśmiechu i podpowiedzi kadrowania
                  </span>
                </li>
              </ul>

              <div className='pt-2 flex items-center gap-4'>
                <button
                  onClick={() => setPreviewEnabled(!previewEnabled)}
                  className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                    previewEnabled
                      ? "bg-sky-500/20 border-sky-400 text-sky-300"
                      : "bg-slate-800 border-white/10 text-slate-400"
                  }`}
                >
                  Ekran zewnętrzny modela:{" "}
                  {previewEnabled ? "Włączony" : "Wyłączony"}
                </button>

                <button
                  onClick={handleCapture}
                  className='px-5 py-2.5 rounded-xl bg-white text-slate-950 font-bold text-xs sm:text-sm hover:bg-slate-200 transition-colors shadow-lg shadow-white/10 flex items-center gap-2'
                >
                  <Camera className='w-4 h-4' />
                  <span>Zrób zdjęcie ({capturedCount})</span>
                </button>
              </div>
            </div>

            {/* Symulacja dwóch ekranów po prawej */}
            <div className='lg:col-span-7 relative'>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {/* Ekran 1: Główny 7,6" (Dla Ciebie - fotografa) */}
                <div className='relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-xl'>
                  <div className='bg-slate-950 px-3 py-2 border-b border-white/10 flex items-center justify-between text-[11px] text-slate-400'>
                    <span className='font-semibold text-white'>
                      Ekran główny 7,6″
                    </span>
                    <span className='text-sky-400'>Widok fotografa</span>
                  </div>
                  <div className='relative aspect-3/4 overflow-hidden'>
                    <Image
                      src='/images/camera-portrait.jpg'
                      alt='Widok aparatu fotografa'
                      fill
                      sizes='(max-width: 768px) 50vw, 320px'
                      className='object-cover'
                    />
                    {/* Błysk migawki */}
                    {photoFlash && (
                      <div className='absolute inset-0 bg-white z-50 animate-fade-in' />
                    )}

                    {/* Wizjer aparatu */}
                    <div className='absolute inset-4 border border-white/30 pointer-events-none rounded-lg'>
                      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-2 border-yellow-400/80 rounded-sm'>
                        <div className='absolute -top-5 left-1/2 -translate-x-1/2 bg-black/60 px-1.5 py-0.5 rounded text-[9px] text-yellow-300 font-mono'>
                          Twarz 48MP
                        </div>
                      </div>
                    </div>

                    {/* HUD aparatu */}
                    <div className='absolute bottom-3 inset-x-3 bg-black/60 backdrop-blur-md p-2 rounded-xl border border-white/10 flex items-center justify-between text-xs text-white'>
                      <span className='text-[10px] font-mono text-slate-300'>
                        1x 24mm • f/1.6 • 1/250s
                      </span>
                      <span className='px-2 py-0.5 rounded bg-sky-500/30 text-sky-300 text-[10px] font-bold'>
                        RAW 48 MP
                      </span>
                    </div>
                  </div>
                </div>

                {/* Ekran 2: Zewnętrzny 5,4" (Dla pozującej osoby) */}
                <div className='relative rounded-2xl overflow-hidden border border-sky-400/40 bg-slate-900 shadow-xl shadow-sky-950/40'>
                  <div className='bg-slate-950 px-3 py-2 border-b border-sky-500/20 flex items-center justify-between text-[11px] text-sky-300'>
                    <span className='font-semibold text-white'>
                      Ekran zewnętrzny 5,4″
                    </span>
                    <span className='flex items-center gap-1'>
                      <span className='w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse' />
                      Widok modela
                    </span>
                  </div>
                  <div className='relative aspect-3/4 overflow-hidden bg-black flex items-center justify-center'>
                    {previewEnabled ? (
                      <>
                        <Image
                          src='/images/camera-portrait.jpg'
                          alt='Podgląd modela na zewnętrznym ekranie'
                          fill
                          sizes='(max-width: 768px) 50vw, 320px'
                          className='object-cover scale-x-[-1]' /* Lustrzane odbicie jak w lustrze */
                        />
                        {photoFlash && (
                          <div className='absolute inset-0 bg-white z-50 animate-fade-in' />
                        )}
                        <div className='absolute top-3 left-3 px-2 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] text-emerald-300 flex items-center gap-1.5'>
                          <Smile className='w-3 h-3 text-emerald-400' />
                          <span>Uśmiech wykryty!</span>
                        </div>
                        <div className='absolute bottom-3 inset-x-3 text-center bg-black/70 backdrop-blur-md py-1 px-2 rounded-lg border border-white/10 text-[10px] text-slate-200'>
                          Cyfrowe lustro w czasie rzeczywistym
                        </div>
                      </>
                    ) : (
                      <div className='p-6 text-center text-slate-500 text-xs'>
                        <Smartphone className='w-8 h-8 mx-auto mb-2 opacity-40' />
                        Ekran zewnętrzny wyłączony
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            ZAKŁADKA 2: FLEXCAM BEZ TRZYMANKI
        ======================================================== */}
        {activeTab === "flexcam" && (
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto'>
            <div className='lg:col-span-5 space-y-6'>
              <div className='inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-xs font-semibold'>
                Statyw zawsze przy sobie
              </div>
              <h3 className='text-2xl sm:text-3xl font-bold text-white'>
                Zdjęcia i filmy bez trzymanki. Pod dowolnym kątem.
              </h3>
              <p className='text-slate-300 leading-relaxed'>
                Po prostu zagnij iPhone Duo pod kątem 90° i postaw go na stole,
                ławce czy kamieniu. Interfejs automatycznie podzieli się na
                wizjer w górnej części i pełny panel sterowania na leżącej
                podstawie.
              </p>

              {/* Wybór kąta zgięcia */}
              <div className='space-y-2'>
                <label className='text-xs text-slate-400 font-semibold uppercase tracking-wider block'>
                  Kąt zawiasu: {flexAngle}°
                </label>
                <div className='grid grid-cols-3 gap-2'>
                  {[
                    { label: "Płasko 180°", angle: 180 },
                    { label: "Statyw 90°", angle: 90 },
                    { label: "Żabi 60°", angle: 60 },
                  ].map((item) => (
                    <button
                      key={item.angle}
                      onClick={() => setFlexAngle(item.angle)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                        flexAngle === item.angle
                          ? "bg-sky-500 text-white border-sky-400 shadow-md"
                          : "bg-slate-900 text-slate-300 border-white/10 hover:bg-slate-800"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Samowyzwalacz */}
              <div className='p-4 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <Clock className='w-5 h-5 text-sky-400' />
                  <div>
                    <div className='text-xs font-bold text-white'>
                      Samowyzwalacz
                    </div>
                    <div className='text-[11px] text-slate-400'>
                      Uruchom i dołącz do zdjęcia grupowego
                    </div>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <button
                    onClick={() => setTimerSeconds(3)}
                    className={`px-2.5 py-1 text-xs rounded-lg ${
                      timerSeconds === 3
                        ? "bg-sky-500 text-white"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    3s
                  </button>
                  <button
                    onClick={() => setTimerSeconds(10)}
                    className={`px-2.5 py-1 text-xs rounded-lg ${
                      timerSeconds === 10
                        ? "bg-sky-500 text-white"
                        : "bg-slate-800 text-slate-300"
                    }`}
                  >
                    10s
                  </button>
                </div>
              </div>

              <button
                onClick={handleStartTimer}
                disabled={timerActive}
                className='w-full py-3 rounded-xl bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20 disabled:opacity-50'
              >
                {timerActive
                  ? `Odliczanie: ${countdown}s...`
                  : "Wyzwól migawkę bez dotykania"}
              </button>
            </div>

            {/* Symulacja składanego urządzenia w trybie FlexCam */}
            <div className='lg:col-span-7 flex justify-center'>
              <div className='w-full max-w-sm rounded-3xl overflow-hidden border-2 border-white/20 bg-slate-950 shadow-2xl shadow-sky-950/60 p-2'>
                {/* Górna połówka - Wizjer */}
                <div className='relative aspect-4/3 rounded-2xl overflow-hidden border border-white/10 mb-2'>
                  <Image
                    src='/images/camera-portrait.jpg'
                    alt='Podgląd FlexCam'
                    fill
                    sizes='(max-width: 768px) 90vw, 384px'
                    className='object-cover'
                  />
                  {photoFlash && (
                    <div className='absolute inset-0 bg-white z-50 animate-fade-in' />
                  )}

                  {countdown !== null && (
                    <div className='absolute inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-40'>
                      <span className='text-6xl font-black text-white animate-ping'>
                        {countdown}
                      </span>
                    </div>
                  )}

                  <div className='absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 text-[10px] text-emerald-400 font-mono'>
                    FLEXCAM {flexAngle}°
                  </div>
                  <div className='absolute top-2 right-2 px-2 py-0.5 rounded bg-black/60 text-[10px] text-white flex items-center gap-1 font-mono'>
                    <Compass className='w-3 h-3 text-sky-400' />
                    <span>0.0° POZIOM</span>
                  </div>
                </div>

                {/* Zagięcie / Zawias */}
                <div className='h-2 bg-linear-to-r from-slate-800 via-slate-700 to-slate-800 rounded-full my-1.5 shadow-inner' />

                {/* Dolna połówka - Panel sterowania leżący na płaszczyźnie */}
                <div className='p-4 rounded-2xl bg-slate-900 border border-white/10 space-y-4'>
                  <div className='flex items-center justify-between text-xs text-slate-300'>
                    <span className='font-semibold text-white'>
                      Sterowanie dotykowe
                    </span>
                    <span className='text-emerald-400 text-[10px] font-mono'>
                      BEZ WIBRACJI
                    </span>
                  </div>

                  {/* Koło ekspozycji */}
                  <div className='flex items-center justify-around py-2 border-y border-white/10 font-mono text-xs text-slate-300'>
                    <span className='text-slate-500'>-1.0 EV</span>
                    <span className='px-2 py-0.5 bg-sky-500/20 text-sky-300 rounded border border-sky-400/30 font-bold'>
                      0.0 EV
                    </span>
                    <span className='text-slate-500'>+1.0 EV</span>
                  </div>

                  {/* Duży przycisk migawki */}
                  <div className='flex items-center justify-center pt-1'>
                    <button
                      onClick={handleCapture}
                      className='w-14 h-14 rounded-full border-4 border-white p-1 hover:scale-105 transition-transform'
                    >
                      <div className='w-full h-full rounded-full bg-white active:bg-slate-300' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            ZAKŁADKA 3: ANIMACJA DLA DZIECKA
        ======================================================== */}
        {activeTab === "kids" && (
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto'>
            <div className='lg:col-span-5 space-y-6'>
              <div className='inline-block px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold'>
                Uśmiech w kadrze
              </div>
              <h3 className='text-2xl sm:text-3xl font-bold text-white'>
                Animacja dla dziecka. Maluch patrzy prosto w obiektyw.
              </h3>
              <p className='text-slate-300 leading-relaxed'>
                Każdy rodzic wie, jak trudno skłonić małe dziecko do spojrzenia
                w stronę aparatu. W iPhonie Duo zewnętrzny ekran wyświetla
                interaktywne, wesołe maskotki reagujące ruchem, co sprawia, że
                dziecko z zaciekawieniem kieruje wzrok prosto na soczewki
                aparatu.
              </p>

              {/* Wybór maskotki */}
              <div className='space-y-2'>
                <label className='text-xs text-slate-400 font-semibold uppercase tracking-wider block'>
                  Wybierz postać:
                </label>
                <div className='grid grid-cols-3 gap-2'>
                  {[
                    { id: "fox", label: "🦊 Lisek", desc: "Mruga i macha" },
                    {
                      id: "star",
                      label: "✨ Gwiazdka",
                      desc: "Tańczy w blasku",
                    },
                    { id: "robot", label: "🤖 Robocik", desc: "Śle serduszka" },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => {
                        setActiveMascot(m.id as "fox" | "star" | "robot")
                        playChime()
                      }}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        activeMascot === m.id
                          ? "bg-amber-500/20 border-amber-400 text-white shadow-md shadow-amber-500/10"
                          : "bg-slate-900 border-white/10 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className='text-sm font-bold'>{m.label}</div>
                      <div className='text-[10px] text-slate-400 mt-0.5'>
                        {m.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Opcja dźwięku */}
              <div className='p-3.5 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-between'>
                <div className='flex items-center gap-2.5'>
                  {soundEnabled ? (
                    <Volume2 className='w-5 h-5 text-amber-400' />
                  ) : (
                    <VolumeX className='w-5 h-5 text-slate-400' />
                  )}
                  <div className='text-xs text-slate-300'>
                    <span className='font-semibold text-white block'>
                      Dźwięk dzwoneczka przyciągający uwagę
                    </span>
                    Subtelny ton aktywujący ciekawość malucha
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSoundEnabled(!soundEnabled)
                    if (!soundEnabled) playChime()
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    soundEnabled
                      ? "bg-amber-500 text-slate-950"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {soundEnabled ? "Włączony" : "Wyłączony"}
                </button>
              </div>

              <button
                onClick={() => {
                  playChime()
                  handleCapture()
                }}
                className='w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2'
              >
                <Camera className='w-4 h-4' />
                <span>Przechwyć idealny uśmiech</span>
              </button>
            </div>

            {/* Symulacja zewnętrznego ekranu 5,4" z animacją */}
            <div className='lg:col-span-7 flex justify-center'>
              <div className='relative w-full max-w-sm aspect-9/16 rounded-3xl overflow-hidden border-4 border-slate-700 bg-linear-to-b from-slate-900 via-indigo-950 to-slate-900 shadow-2xl flex flex-col justify-between p-6'>
                {/* Górny pasek z obiektywami */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-2'>
                    <div className='w-3.5 h-3.5 rounded-full bg-slate-800 border border-sky-400/60' />
                    <div className='w-3.5 h-3.5 rounded-full bg-slate-800 border border-sky-400/60' />
                  </div>
                  <span className='text-[11px] font-mono text-amber-300 px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-400/30'>
                    KIDS ATTENTION MODE
                  </span>
                </div>

                {/* Centralna animacja maskotki */}
                <div className='my-auto text-center py-8'>
                  {activeMascot === "fox" && (
                    <div className='space-y-4 animate-bounce'>
                      <div className='text-7xl filter drop-shadow-[0_10px_20px_rgba(245,158,11,0.5)]'>
                        🦊
                      </div>
                      <div className='text-xl font-black text-amber-300'>
                        Hej! Spójrz tutaj! 👀
                      </div>
                      <div className='flex justify-center gap-1.5'>
                        <span className='w-2 h-2 rounded-full bg-amber-400 animate-ping' />
                        <span className='w-2 h-2 rounded-full bg-amber-400' />
                        <span className='w-2 h-2 rounded-full bg-amber-400 animate-ping' />
                      </div>
                    </div>
                  )}

                  {activeMascot === "star" && (
                    <div className='space-y-4 animate-pulse'>
                      <div className='text-7xl filter drop-shadow-[0_10px_20px_rgba(56,189,248,0.5)]'>
                        ⭐
                      </div>
                      <div className='text-xl font-black text-sky-300'>
                        Błyszcząca Gwiazdka! ✨
                      </div>
                      <div className='text-xs text-sky-200'>
                        Uśmiechnij się do gwiazdki!
                      </div>
                    </div>
                  )}

                  {activeMascot === "robot" && (
                    <div className='space-y-4'>
                      <div className='text-7xl animate-pulse'>🤖</div>
                      <div className='text-xl font-black text-pink-300'>
                        Bip-bip! Uśmiech! 💖
                      </div>
                      <div className='text-xs text-pink-200'>
                        Robocik robi zdjęcie!
                      </div>
                    </div>
                  )}
                </div>

                {/* Błysk */}
                {photoFlash && (
                  <div className='absolute inset-0 bg-white z-50 animate-fade-in' />
                )}

                {/* Dolny opis */}
                <div className='text-center text-[11px] text-slate-400 bg-black/40 py-2 rounded-xl border border-white/10'>
                  Wzrok dziecka skierowany dokładnie 2 cm od obiektywu Fusion 48
                  MP
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            ZAKŁADKA 4: OGNISKOWE FUSION
        ======================================================== */}
        {activeTab === "focal" && (
          <div className='max-w-5xl mx-auto space-y-8'>
            <div className='text-center max-w-2xl mx-auto'>
              <h3 className='text-2xl sm:text-3xl font-bold text-white'>
                Siedem profesjonalnych obiektywów w jednej kieszeni
              </h3>
              <p className='mt-2 text-sm sm:text-base text-slate-300'>
                Wybieraj między popularnymi ogniskowymi fotograficznymi. Dzięki
                matrycy 48 MP i quad-pixel otrzymujesz natywną jakość optyczną
                na każdym kroku.
              </p>
            </div>

            {/* Wybór ogniskowej */}
            <div className='flex flex-wrap items-center justify-center gap-3'>
              {[
                {
                  id: "13mm",
                  label: "0.5x 13 mm",
                  title: "Ultraszeroki & Makro",
                  desc: "Pole widzenia 120°",
                },
                {
                  id: "24mm",
                  label: "1x 24 mm",
                  title: "Główny Fusion",
                  desc: "Maksymalna światłosiła f/1.6",
                },
                {
                  id: "28mm",
                  label: "1.2x 28 mm",
                  title: "Klasyczny szeroki",
                  desc: "Znakomity do reportażu",
                },
                {
                  id: "35mm",
                  label: "1.5x 35 mm",
                  title: "Fotografia uliczna",
                  desc: "Ulubiona ogniskowa artystów",
                },
                {
                  id: "48mm",
                  label: "2x 48 mm",
                  title: "Teleobiektyw 2x",
                  desc: "Jakość optyczna z matrycy 48 MP",
                },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setFocalLength(item.id)}
                  className={`px-4 py-3 rounded-2xl border text-center transition-all ${
                    focalLength === item.id
                      ? "bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/25 scale-105"
                      : "bg-slate-900 border-white/10 text-slate-300 hover:bg-slate-800"
                  }`}
                >
                  <div className='text-sm font-bold'>{item.label}</div>
                  <div className='text-[10px] text-slate-300/80 mt-0.5'>
                    {item.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Wizualizacja kadrowania */}
            <div className='relative rounded-3xl overflow-hidden border border-white/15 bg-black aspect-video sm:aspect-21/9 max-w-4xl mx-auto shadow-2xl'>
              <Image
                src={
                  focalLength === "13mm"
                    ? "/images/camera-macro.jpg"
                    : "/images/camera-portrait.jpg"
                }
                alt='Symulacja ogniskowej'
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 960px'
                className={`object-cover transition-all duration-700 ease-out ${
                  focalLength === "13mm"
                    ? "scale-100"
                    : focalLength === "24mm"
                      ? "scale-100"
                      : focalLength === "28mm"
                        ? "scale-115"
                        : focalLength === "35mm"
                          ? "scale-130"
                          : "scale-160"
                }`}
              />

              {/* Informacje o aktualnej ogniskowej */}
              <div className='absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15 text-xs text-white'>
                <span className='font-bold text-sky-400 mr-2'>
                  {focalLength}
                </span>
                {focalLength === "13mm" && "Ultraszeroki kąt 120° • f/2.2"}
                {focalLength === "24mm" && "Główny Fusion • f/1.6 • 48 MP"}
                {focalLength === "28mm" && "Ogniskowa 28 mm • f/1.6 • 24 MP"}
                {focalLength === "35mm" && "Ogniskowa 35 mm • f/1.6 • 24 MP"}
                {focalLength === "48mm" &&
                  "Teleobiektyw 2x • f/1.6 • Jakość optyczna 12 MP"}
              </div>

              <div className='absolute bottom-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[11px] text-slate-300'>
                Płynne przełączanie bez utraty ostrości
              </div>
            </div>
          </div>
        )}

        {/* ========================================================
            ZAKŁADKA 5: WIDEO 4K 120 KL./S
        ======================================================== */}
        {activeTab === "video" && (
          <div className='grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto'>
            <div className='lg:col-span-5 space-y-6'>
              <div className='inline-block px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-xs font-semibold'>
                Kinowe możliwości
              </div>
              <h3 className='text-2xl sm:text-3xl font-bold text-white'>
                Wideo 4K przy 120 kl./s w formacie Dolby Vision
              </h3>
              <p className='text-slate-300 leading-relaxed'>
                Niezrównane połączenie 4K i 120 kl./s pozwala rejestrować ujęcia
                akcji o krystalicznej płynności, a potem spowalniać je do 24
                kl./s, tworząc zapierający dech w piersiach efekt kinowego slow
                motion.
              </p>

              {/* Wybór prędkości odtwarzania */}
              <div className='space-y-2'>
                <label className='text-xs text-slate-400 font-semibold uppercase tracking-wider block'>
                  Regulacja prędkości w postprodukcji:
                </label>
                <div className='grid grid-cols-3 gap-2'>
                  {[
                    { fps: 120, label: "120 kl./s", sub: "100% czasu" },
                    { fps: 60, label: "60 kl./s", sub: "Zwolnienie 2x" },
                    { fps: 24, label: "24 kl./s", sub: "Kinowe 5x" },
                  ].map((s) => (
                    <button
                      key={s.fps}
                      onClick={() => setVideoSpeed(s.fps)}
                      className={`py-2 px-3 rounded-xl text-center border transition-all ${
                        videoSpeed === s.fps
                          ? "bg-purple-500 text-white border-purple-400 shadow-md"
                          : "bg-slate-900 border-white/10 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className='text-xs font-bold'>{s.label}</div>
                      <div className='text-[10px] text-slate-400'>{s.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Audio Mix */}
              <div className='space-y-2'>
                <label className='text-xs text-slate-400 font-semibold uppercase tracking-wider block'>
                  Audio Mix (Redukcja wiatru i mikrofony studyjne):
                </label>
                <div className='grid grid-cols-3 gap-2'>
                  {[
                    {
                      id: "in-frame",
                      label: "W kadrze",
                      desc: "Izolacja głosu",
                    },
                    { id: "studio", label: "Studyjny", desc: "Jak w kabinie" },
                    { id: "cinematic", label: "Kinowy", desc: "Dolby Atmos" },
                  ].map((a) => (
                    <button
                      key={a.id}
                      onClick={() => setAudioMix(a.id as typeof audioMix)}
                      className={`p-2.5 rounded-xl border text-left transition-all ${
                        audioMix === a.id
                          ? "bg-sky-500/20 border-sky-400 text-white"
                          : "bg-slate-900 border-white/10 text-slate-400 hover:text-slate-200"
                      }`}
                    >
                      <div className='text-xs font-bold'>{a.label}</div>
                      <div className='text-[10px] text-slate-400'>{a.desc}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Symulator wideo */}
            <div className='lg:col-span-7'>
              <div className='relative rounded-3xl overflow-hidden border border-white/20 bg-black aspect-16/10 shadow-2xl'>
                <Image
                  src='/images/camera-portrait.jpg'
                  alt='Wideo 4K 120fps'
                  fill
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 760px'
                  className='object-cover'
                />

                {/* Nakładka wideo w toku */}
                <div className='absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/40 p-5 flex flex-col justify-between'>
                  <div className='flex items-center justify-between text-xs text-white'>
                    <div className='flex items-center gap-2'>
                      <span className='w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse' />
                      <span className='font-mono font-bold'>REC 00:04:18</span>
                    </div>
                    <div className='px-2.5 py-1 rounded bg-black/60 border border-white/20 font-mono text-[11px] text-purple-300'>
                      4K • {videoSpeed} FPS • DOLBY VISION
                    </div>
                  </div>

                  {/* Panel dolny z kontrolkami audio */}
                  <div className='p-3 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between'>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className='flex items-center gap-2 text-xs font-bold text-white hover:text-sky-300'
                    >
                      {isPlaying ? (
                        <>
                          <Pause className='w-4 h-4 text-purple-400' />
                          <span>Pauza</span>
                        </>
                      ) : (
                        <>
                          <Play className='w-4 h-4 text-purple-400' />
                          <span>Odtwórz w {videoSpeed} kl./s</span>
                        </>
                      )}
                    </button>

                    <div className='text-[11px] text-slate-300 font-mono flex items-center gap-2'>
                      <Volume2 className='w-3.5 h-3.5 text-sky-400' />
                      <span>
                        Audio Mix:{" "}
                        {audioMix === "in-frame"
                          ? "W kadrze"
                          : audioMix === "studio"
                            ? "Studyjny"
                            : "Kinowy"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
