"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Sparkles,
  Maximize2,
} from "lucide-react";

interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  lens: string;
  specs: {
    iso: string;
    exposure: string;
    aperture: string;
    focal: string;
    resolution: string;
  };
  description: string;
  src: string;
}

const galleryPhotos: GalleryPhoto[] = [
  {
    id: "macro",
    title: "Mikroskopijna struktura liścia tropikalnego",
    category: "Makro 48 MP",
    lens: "Aparat ultraszerokokątny Fusion",
    specs: {
      iso: "ISO 50",
      exposure: "1/400 s",
      aperture: "f/2.2",
      focal: "13 mm (2 cm od obiektu)",
      resolution: "8064 × 6048 (48 MP ProRAW)",
    },
    description:
      "Fotografia makro wykonana z odległości zaledwie 2 centymetrów. Obiektyw ultraszerokokątny z autofokusem ujawnia pojedyncze komórki roślinne i mikroskopijne kropelki rosy z chirurgiczną ostrością.",
    src: "/images/camera-macro.jpg",
  },
  {
    id: "portrait",
    title: "Nocny portret w deszczowym Tokio",
    category: "Portret Nocny 48 MP",
    lens: "Aparat główny Fusion 24 mm",
    specs: {
      iso: "ISO 320",
      exposure: "1/60 s",
      aperture: "f/1.6",
      focal: "24 mm",
      resolution: "8064 × 6048 (48 MP HEIF)",
    },
    description:
      "Wyjątkowa plastyka i naturalne rozmycie tła bez konieczności stosowania sztucznych filtrów. Matryca 48 MP i fotodiody 2,44 µm rejestrują każdy kosmyk mokrych włosów i odbicia neonów w kroplach deszczu.",
    src: "/images/camera-portrait.jpg",
  },
];

export default function CameraGalleryShowcase() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto>(
    galleryPhotos[0]
  );
  const [zoomCompare, setZoomCompare] = useState<boolean>(false);

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Nagłówek sekcji */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Galeria próbek fotograficznych</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
            Niewiarygodna ostrość. W każdym pikselu.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 font-light">
            Zobacz rzeczywiste zdjęcia wykonane aparatem iPhone Duo w pełnej
            rozdzielczości 48 megapikseli.
          </p>
        </div>

        {/* Selektor zdjęć */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {galleryPhotos.map((photo) => (
            <button
              key={photo.id}
              onClick={() => {
                setSelectedPhoto(photo);
                setZoomCompare(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                selectedPhoto.id === photo.id
                  ? "bg-sky-500 text-white border-sky-400 shadow-lg shadow-sky-500/25"
                  : "bg-slate-900 border-white/10 text-slate-300 hover:bg-slate-800"
              }`}
            >
              {photo.category}
            </button>
          ))}
        </div>

        {/* Główna ekspozycja wybranego zdjęcia */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl">
          <div className="relative aspect-16/10 sm:aspect-video w-full overflow-hidden bg-black">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              fill
              className={`object-cover transition-transform duration-700 ${
                zoomCompare ? "scale-250 cursor-zoom-out" : "scale-100 cursor-zoom-in"
              }`}
              onClick={() => setZoomCompare(!zoomCompare)}
            />

            {/* Winieta i kontrolki */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-xs font-semibold text-white">
                {selectedPhoto.category}
              </span>
              <button
                onClick={() => setZoomCompare(!zoomCompare)}
                className="px-3 py-1.5 rounded-lg bg-sky-500/80 backdrop-blur-md border border-sky-400 text-xs font-bold text-white hover:bg-sky-500 transition-colors flex items-center gap-1.5"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>{zoomCompare ? "Oddal widok" : "Powiększ detal 48 MP"}</span>
              </button>
            </div>

            {zoomCompare && (
              <div className="absolute bottom-4 left-4 z-20 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-sky-400/50 text-xs text-sky-300 font-mono">
                Powiększenie 250% • Pełny wycinek piksel w piksel (100% Crop)
              </div>
            )}
          </div>

          {/* Dane EXIF i opis */}
          <div className="p-6 sm:p-8 bg-slate-900/90 border-t border-white/10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-sm text-sky-400 font-medium mt-1">
                  {selectedPhoto.lens}
                </p>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {selectedPhoto.description}
                </p>
              </div>

              {/* Tabela danych EXIF */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-black/40 border border-white/10 text-xs font-mono">
                <div>
                  <span className="text-slate-400 block text-[10px]">CZAS</span>
                  <span className="text-white font-bold">
                    {selectedPhoto.specs.exposure}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">PRZYSŁONA</span>
                  <span className="text-white font-bold">
                    {selectedPhoto.specs.aperture}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">CZUŁOŚĆ</span>
                  <span className="text-white font-bold">
                    {selectedPhoto.specs.iso}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">OGNISKOWA</span>
                  <span className="text-white font-bold">
                    {selectedPhoto.specs.focal}
                  </span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-400 block text-[10px]">ROZDZIELCZOŚĆ</span>
                  <span className="text-sky-300 font-bold">
                    {selectedPhoto.specs.resolution}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
