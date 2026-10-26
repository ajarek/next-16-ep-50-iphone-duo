"use client"

import React, { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Copy,
  Check,
  Printer,
  Tv,
  Cpu,
  Camera,
  Video,
  BatteryCharging,
  Wifi,
  Sliders,
  Shield,
  Fingerprint,
  Sparkles,
  HardDrive,
  Eye,
  Layers,
  ChevronRight,
  Info,
} from "lucide-react"

interface SpecItem {
  name: string
  value: string
  details?: string
}

interface SpecSection {
  id: string
  title: string
  category: string
  icon: string
  summary: string
  items: SpecItem[]
}

interface Capacity {
  id: string
  size: string
  approxPhotos: string
  approxVideo: string
  recommended: string
}

interface SpecificationViewerProps {
  initialSections: SpecSection[]
  capacities: Capacity[]
}

export default function SpecificationViewer({
  initialSections,
  capacities,
}: SpecificationViewerProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<string>("all")
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(() => {
    // Rozwiń pierwsze 3 sekcje domyślnie
    const initial: Record<string, boolean> = {}
    initialSections.forEach((s, idx) => {
      initial[s.id] = idx < 4
    })
    return initial
  })
  const [selectedStorage, setSelectedStorage] = useState<string>("512gb")
  const [copied, setCopied] = useState(false)

  // Kategorie nawigacji
  const categories = [
    { id: "all", label: "Wszystkie kategorie" },
    { id: "display", label: "Wyświetlacze", icon: Tv },
    { id: "performance", label: "A20 Pro & AI", icon: Cpu },
    { id: "camera", label: "Aparaty i Wideo", icon: Camera },
    { id: "battery", label: "Bateria i Zasilanie", icon: BatteryCharging },
    { id: "connectivity", label: "Łączność i Sieci", icon: Wifi },
    { id: "ports", label: "Złącza i Dźwięk", icon: Sliders },
    { id: "design", label: "Konstrukcja i Wymiary", icon: Shield },
    { id: "software", label: "iOS 27 i Aplikacje", icon: Sparkles },
  ]

  // Mapowanie ikon dla sekcji
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Tv":
        return <Tv className="w-5 h-5 text-sky-400" />
      case "Cpu":
        return <Cpu className="w-5 h-5 text-indigo-400" />
      case "Camera":
        return <Camera className="w-5 h-5 text-emerald-400" />
      case "Video":
        return <Video className="w-5 h-5 text-purple-400" />
      case "Eye":
        return <Eye className="w-5 h-5 text-sky-300" />
      case "BatteryCharging":
        return <BatteryCharging className="w-5 h-5 text-amber-400" />
      case "Wifi":
        return <Wifi className="w-5 h-5 text-cyan-400" />
      case "Sliders":
        return <Sliders className="w-5 h-5 text-rose-400" />
      case "Fingerprint":
        return <Fingerprint className="w-5 h-5 text-sky-400" />
      case "Shield":
        return <Shield className="w-5 h-5 text-blue-400" />
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-amber-300" />
      default:
        return <Layers className="w-5 h-5 text-sky-400" />
    }
  }

  // Filtracja sekcji na podstawie wyszukiwania i aktywnej kategorii
  const filteredSections = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return initialSections
      .filter((section) => {
        if (activeCategory !== "all" && section.category !== activeCategory) {
          return false
        }
        return true
      })
      .map((section) => {
        if (!query) return section

        // Sprawdź, czy tytuł lub opis sekcji pasuje
        const sectionMatch =
          section.title.toLowerCase().includes(query) ||
          section.summary.toLowerCase().includes(query)

        // Sprawdź, które elementy pasują
        const matchingItems = section.items.filter(
          (item) =>
            item.name.toLowerCase().includes(query) ||
            item.value.toLowerCase().includes(query) ||
            (item.details && item.details.toLowerCase().includes(query))
        )

        if (sectionMatch || matchingItems.length > 0) {
          return {
            ...section,
            items: sectionMatch ? section.items : matchingItems,
          }
        }

        return null
      })
      .filter((section): section is SpecSection => section !== null)
  }, [initialSections, activeCategory, searchQuery])

  // Obsługa zwijania/rozwijania pojedynczej sekcji
  const toggleSection = (id: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Rozwiń wszystkie / zwiń wszystkie
  const expandAll = () => {
    const allExpanded: Record<string, boolean> = {}
    initialSections.forEach((s) => {
      allExpanded[s.id] = true
    })
    setExpandedSections(allExpanded)
  }

  const collapseAll = () => {
    setExpandedSections({})
  }

  // Kopiowanie skróconej specyfikacji do schowka
  const handleCopySpecs = () => {
    const summaryText = `iPhone Duo — Kluczowa Specyfikacja Techniczna
• Ekrany: 7,6″ OLED Super Retina XDR (1878×2670, 430 ppi) + zewn. 5,4″ OLED (1398×2034, 460 ppi), 1–120Hz ProMotion, do 3000 nitów.
• Wymiary: Otwarty 164,6 × 117,8 × 5,2 mm (254 g) | Zamknięty 84,1 × 117,8 × 11,3 mm.
• Czip: A20 Pro (2nm, 6-core CPU, 7-core GPU, Hardware Ray Tracing, podwójny 16-core Neural Engine).
• Aparat: System Fusion 48 MP (26mm f/1.6 OIS) + 48 MP Ultra-Wide (13mm f/2.2 120° makro) + 2x zoom 12 MP (52mm).
• Wideo: 4K Dolby Vision 120 kl./s, 1080p do 240 kl./s, tryb Filmowe 4K 60 kl./s, tryb Akcja 2.8K.
• Aparaty przednie: Center Stage 12 MP (zewn.) + FaceTime pod ekranem UDC (wewn.).
• Bateria: do 44h wideo, szybkie ładowanie USB-C 60W (50% w 20 min), MagSafe/Qi2 do 25W.
• Obudowa: Tytan klasy 5, Ceramic Shield 2, klasa szczelności IP68 (do 6m).
• Łączność: 5G mmWave + sub-6 GHz (modem Apple C2), Wi-Fi 7 (czip N1), Bluetooth 6, Thread, Dual eSIM.`

    navigator.clipboard.writeText(summaryText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print()
    }
  }

  // Aktywna pojemność dla kalkulatora
  const currentCapacity = capacities.find((c) => c.id === selectedStorage) || capacities[1]

  return (
    <section id="spec-explorer" className="relative w-full pb-24 sm:pb-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Kreatywny selektor pojemności z kalkulatorem zastosowań */}
        <div className="mb-14 rounded-3xl bg-slate-900/40 border border-white/10 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-sky-400">
                <HardDrive className="w-3.5 h-3.5" />
                <span>Pojemność pamięci masowej</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                Wybierz pojemność dopasowaną do Twoich pasji
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
                Sprawdź, ile zdjęć 48 MP w formacie ProRAW i godzin filmów 4K Dolby Vision pomieści Twój iPhone Duo.
              </p>
            </div>

            {/* Przyciski wariantów pamięci */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {capacities.map((cap) => {
                const isSelected = selectedStorage === cap.id
                return (
                  <button
                    key={cap.id}
                    type="button"
                    onClick={() => setSelectedStorage(cap.id)}
                    className={`px-4 py-3 rounded-2xl border text-center transition-all ${
                      isSelected
                        ? "bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/25 ring-1 ring-sky-300 scale-102"
                        : "bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <div className="text-lg font-bold">{cap.size}</div>
                    <div
                      className={`text-[10px] mt-0.5 ${
                        isSelected ? "text-sky-100" : "text-slate-400"
                      }`}
                    >
                      Pamięć NVMe
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Podsumowanie wybranej pojemności */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-white/3 border border-white/5">
              <span className="text-xs text-slate-400">Szacowana liczba zdjęć</span>
              <div className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentCapacity.approxPhotos}
              </div>
              <span className="text-[11px] text-slate-400">W formacie HEIF / ProRAW</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/3 border border-white/5">
              <span className="text-xs text-slate-400">Szacowana długość wideo 4K</span>
              <div className="text-xl sm:text-2xl font-bold text-sky-300 mt-1">
                {currentCapacity.approxVideo}
              </div>
              <span className="text-[11px] text-slate-400">Nagrywanie 4K 120 kl./s Dolby Vision</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/3 border border-white/5">
              <span className="text-xs text-slate-400">Dla kogo ta pojemność?</span>
              <div className="text-sm font-semibold text-slate-200 mt-1 leading-snug">
                {currentCapacity.recommended}
              </div>
            </div>
          </div>
        </div>

        {/* Wyszukiwarka i filtry kategorii */}
        <div className="sticky top-16 z-30 mb-8 py-3 bg-slate-950/85 backdrop-blur-2xl border-y border-white/10 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 shadow-xl">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Pole wyszukiwania */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Szukaj parametru (np. bateria, zoom, nitów, eSIM, A20)..."
                aria-label="Wyszukaj parametr w specyfikacji"
                className="w-full pl-10 pr-9 py-2 rounded-full bg-slate-900/90 border border-white/15 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Wyczyść wyszukiwanie"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Przyciski akcji: Kopiuj specyfikację / Drukuj / Rozwiń wszystko */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0">
              <button
                type="button"
                onClick={handleCopySpecs}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-300">Skopiowano!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-sky-400" />
                    <span>Kopiuj skrót</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-all shrink-0"
              >
                <Printer className="w-3.5 h-3.5 text-slate-400" />
                <span>Drukuj</span>
              </button>

              <button
                type="button"
                onClick={expandAll}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors shrink-0"
              >
                <span>Rozwiń wszystkie</span>
              </button>

              <button
                type="button"
                onClick={collapseAll}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium text-slate-400 hover:text-slate-300 transition-colors shrink-0"
              >
                <span>Zwiń</span>
              </button>
            </div>
          </div>

          {/* Karuzela pigułek kategorii */}
          <div className="mt-3 flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 text-xs">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all font-medium shrink-0 ${
                    isActive
                      ? "bg-sky-500 text-white shadow-sm shadow-sky-500/30"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
                  }`}
                >
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>

        {/* Wyniki wyszukiwania - informacja o liczbie */}
        {searchQuery && (
          <div className="mb-6 flex items-center justify-between text-xs text-slate-400">
            <span>
              Wyniki wyszukiwania dla: <strong className="text-white">&quot;{searchQuery}&quot;</strong> (znaleziono sekcji: {filteredSections.length})
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="text-sky-400 hover:underline"
            >
              Wyczyść filtr
            </button>
          </div>
        )}

        {/* Brak wyników */}
        {filteredSections.length === 0 && (
          <div className="rounded-3xl bg-slate-900/30 border border-white/10 p-12 text-center my-10">
            <Info className="w-10 h-10 text-slate-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">Nie znaleziono parametru</h3>
            <p className="text-sm text-slate-400 mt-1 max-w-md mx-auto">
              Nie udało się odnaleźć &quot;{searchQuery}&quot;. Spróbuj użyć innego hasła, np. &quot;ekran&quot;, &quot;aparat&quot;, &quot;ładowanie&quot; lub zresetuj wyszukiwanie.
            </p>
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-sky-500 text-white hover:bg-sky-400 transition-all"
            >
              Pokaż całą specyfikację
            </button>
          </div>
        )}

        {/* Lista szczegółowych sekcji specyfikacji */}
        <div className="space-y-6">
          {filteredSections.map((section) => {
            const isExpanded = expandedSections[section.id] ?? true
            return (
              <div
                key={section.id}
                id={section.id}
                className="rounded-3xl bg-slate-900/40 border border-white/10 backdrop-blur-xl transition-all overflow-hidden"
              >
                {/* Nagłówek sekcji z przyciskiem rozwijania */}
                <button
                  type="button"
                  onClick={() => toggleSection(section.id)}
                  aria-expanded={isExpanded}
                  className="w-full flex items-center justify-between p-6 sm:p-7 text-left hover:bg-white/3 transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      {renderIcon(section.icon)}
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                        {section.title}
                      </h2>
                      <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                        {section.summary}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                      {section.items.length} {section.items.length === 1 ? "pozycja" : "pozycji"}
                    </span>
                    <div className="p-2 rounded-full bg-white/5 text-slate-400">
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-300" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-300" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Rozwijana zawartość tabeli specyfikacji */}
                {isExpanded && (
                  <div className="border-t border-white/10 px-6 sm:px-8 py-4 sm:py-6 animate-fade-in">
                    <dl className="divide-y divide-white/5">
                      {section.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="py-4 first:pt-2 last:pb-2 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-baseline"
                        >
                          {/* Nazwa parametru */}
                          <dt className="md:col-span-4 text-sm font-semibold text-slate-200">
                            {item.name}
                          </dt>

                          {/* Wartość parametru i szczegóły */}
                          <dd className="md:col-span-8 space-y-1">
                            <div className="text-sm font-medium text-white leading-relaxed">
                              {item.value}
                            </div>
                            {item.details && (
                              <p className="text-xs text-slate-400 leading-relaxed">
                                {item.details}
                              </p>
                            )}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Oficjalne przypisy prawne i techniczne (odpowiadające indeksom 1 do 16) */}
        <div className="mt-16 sm:mt-20 rounded-3xl bg-slate-950/70 border border-white/10 p-6 sm:p-8 text-[11px] text-slate-400 space-y-2.5 leading-relaxed">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
            <Info className="w-4 h-4 text-sky-400" />
            <span>Przypisy prawne i objaśnienia do specyfikacji</span>
          </h3>
          <p>
            <strong>1. Dostępna pamięć:</strong> Faktyczna dostępna pojemność jest mniejsza i zależy od konfiguracji systemu operacyjnego oraz preinstalowanych aplikacji.
          </p>
          <p>
            <strong>2. Wymiary i masa:</strong> Rzeczywisty rozmiar i waga urządzenia zależą od konfiguracji oraz procesu produkcyjnego.
          </p>
          <p>
            <strong>3. Apple Pencil:</strong> Zgodny z modelem Apple Pencil (USB‑C). Sprzedawany oddzielnie.
          </p>
          <p>
            <strong>4. Odporność na ciecze i pył:</strong> iPhone Duo jest odporny na zachlapania, wodę oraz pył. Został przetestowany w kontrolowanych warunkach laboratoryjnych i uzyskał klasę IP68 zgodnie z normą IEC 60529 (maksymalna głębokość 6 m do 30 minut).
          </p>
          <p>
            <strong>5. Apple Intelligence:</strong> Wymaga pobrania odpowiednich pakietów językowych. Dostępność funkcji i języków zależy od regionu i przepisów prawa.
          </p>
          <p>
            <strong>6. Bateria:</strong> Deklarowane czasy pracy na baterii zależą od konfiguracji sieci i wielu innych czynników; rzeczywiste wyniki mogą być odmienne.
          </p>
          <p>
            <strong>7. Odtwarzanie wideo:</strong> Pomiary zrealizowano przez odtwarzanie filmu o rozdzielczości 4K HDR ze standardową głośnością i jasnością ekranu.
          </p>
          <p>
            <strong>8. Ładowanie:</strong> Czas ładowania zależy od użytego zasilacza i warunków termicznych otoczenia.
          </p>
          <p>
            <strong>9. Funkcje bezpieczeństwa:</strong> Funkcje Alarmowe SOS i Wykrywanie wypadków korzystają z połączeń komórkowych lub Wi-Fi Calling.
          </p>
          <p>
            <strong>10. Sieci komórkowe:</strong> Wymagany plan taryfowy z obsługą 5G. Prędkości transferu zależą od warunków sieciowych i operatora.
          </p>
          <p>
            <strong>11. Wi-Fi 7:</strong> Wymaga routera zgodnego z Wi-Fi 7 oraz systemu iOS 27.
          </p>
          <p>
            <strong>12. Ultra Wideband:</strong> Dostępność technologii ultraszerokopasmowej zależy od przepisów lokalnych w danym kraju.
          </p>
          <p>
            <strong>13. USB 3:</strong> Prędkość 10 Gb/s wymaga przewodu USB 3 o przepustowości 10 Gb/s (sprzedawanego oddzielnie).
          </p>
          <p>
            <strong>14. eSIM:</strong> Korzystanie z eSIM wymaga planu taryfowego operatora komórkowego obsługującego tę technologię.
          </p>
          <p>
            <strong>15. FaceTime:</strong> Wideorozmowy FaceTime wymagają urządzenia z obsługą FaceTime u obu rozmówców oraz stabilnego połączenia internetowego.
          </p>
          <p>
            <strong>16. Wyjście wideo:</strong> Klonowanie obrazu 4K HDR wymaga zgodnego monitora lub przejściówki USB-C na cyfrowe AV.
          </p>
        </div>

        {/* Dolna sekcja CTA do zamówienia i podsumowania */}
        <div className="mt-16 text-center border-t border-white/10 pt-16">
          <p className="text-xs sm:text-sm tracking-[0.3em] font-semibold uppercase bg-linear-to-r from-sky-300 via-blue-200 to-sky-400 bg-clip-text text-transparent">
            IPHONE DUO • SPECYFIKACJA TECHNICZNA
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Gotowy na przełomowe doświadczenie?
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-xl mx-auto">
            Wybierz swój kolor, pamięć i złóż zamówienie w oficjalnej przedsprzedaży Apple.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/description"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all hover:scale-105"
            >
              <span>Poznaj szczegółowy opis</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/camera"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all hover:scale-105"
            >
              <span>System aparatów 48 MP</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 transition-all hover:scale-105"
            >
              <Sparkles className="w-4 h-4 text-sky-200" />
              <span>Strona główna</span>
            </Link>
          </div>

          <div className="mt-12 text-xs text-slate-500">
            iPhone Duo — Zaprojektowany przez Apple w Kalifornii. Wszystkie prawa zastrzeżone.
          </div>
        </div>
      </div>
    </section>
  )
}
