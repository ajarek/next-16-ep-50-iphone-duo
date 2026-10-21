"use client";

import React, { useState, useEffect } from "react";
import { X, Check, ShieldCheck, Truck, Sparkles } from "lucide-react";

import AppleLogo from "./AppleLogo";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialColor?: "night-sky" | "star-white";
}

export default function OrderModal({ isOpen, onClose, initialColor = "night-sky" }: OrderModalProps) {
  const [selectedColor, setSelectedColor] = useState<"night-sky" | "star-white">(initialColor);
  const [selectedStorage, setSelectedStorage] = useState<"512GB" | "1TB" | "2TB">("512GB");
  const [ordered, setOrdered] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pricing = {
    "512GB": "8 999 zł",
    "1TB": "10 299 zł",
    "2TB": "11 999 zł",
  };

  const handleClose = () => {
    setOrdered(false);
    onClose();
  };

  const handleOrder = () => {
    setOrdered(true);
    setTimeout(() => {
      handleClose();
    }, 2400);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xl animate-fade-in"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-neutral-900 border border-white/10 text-white shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow ambient background */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-sky-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <div className="flex items-center gap-2.5">
            <AppleLogo className="w-5 h-5 text-white" />
            <h2 id="modal-title" className="text-lg font-semibold tracking-tight text-white">
              iPhone Duo — Konfigurator
            </h2>
          </div>
          <button
            onClick={handleClose}
            aria-label="Zamknij okno konfiguratora"
            className="rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {ordered ? (
          <div className="p-10 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Dziękujemy za rezerwację!</h3>
            <p className="text-sm text-slate-300 max-w-md">
              Twój iPhone Duo w kolorze{" "}
              <span className="font-semibold text-white">
                {selectedColor === "night-sky" ? "Gwiezdna czerń (Night Sky)" : "Gwiezdna biel (Star White)"}
              </span>{" "}
              o pojemności <span className="font-semibold text-white">{selectedStorage}</span> został zarezerwowany w pierwszej puli premierowej.
            </p>
            <p className="text-xs text-slate-400">Potwierdzenie wraz ze szczegółami wysłaliśmy na Twój adres e-mail.</p>
          </div>
        ) : (
          <div className="p-6 space-y-6">
            {/* Wybór wykończenia */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-400 mb-3 font-medium">
                1. Wybierz wykończenie tytanu
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedColor("night-sky")}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all text-left ${
                    selectedColor === "night-sky"
                      ? "border-sky-400 bg-sky-500/10 ring-1 ring-sky-400"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-slate-900 border border-white/20 shadow-inner shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Gwiezdna czerń</p>
                    <p className="text-xs text-slate-400">Night Sky Titanium</p>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setSelectedColor("star-white")}
                  className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all text-left ${
                    selectedColor === "star-white"
                      ? "border-sky-400 bg-sky-500/10 ring-1 ring-sky-400"
                      : "border-white/10 bg-white/5 hover:border-white/20"
                  }`}
                >
                  <span className="w-6 h-6 rounded-full bg-neutral-200 border border-white/40 shadow-inner shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-white">Gwiezdna biel</p>
                    <p className="text-xs text-slate-400">Star White Titanium</p>
                  </div>
                </button>
              </div>
            </div>

            {/* Wybór pamięci */}
            <div>
              <label className="block text-xs uppercase tracking-widest text-slate-400 mb-3 font-medium">
                2. Wybierz pojemność pamięci
              </label>
              <div className="grid grid-cols-3 gap-3">
                {(["512GB", "1TB", "2TB"] as const).map((size) => (
                  <button
                    key={size}
                    type="button"
                    onClick={() => setSelectedStorage(size)}
                    className={`p-3.5 rounded-2xl border text-center transition-all ${
                      selectedStorage === size
                        ? "border-sky-400 bg-sky-500/10 ring-1 ring-sky-400"
                        : "border-white/10 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <p className="text-lg font-semibold text-white">{size}</p>
                    <p className="text-xs text-slate-400">{pricing[size]}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Główne atuty */}
            <div className="rounded-2xl bg-white/3 border border-white/5 p-4 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2 text-sky-300 font-medium">
                <Sparkles className="w-4 h-4" />
                <span>W zestawie: Przewód USB-C w oplocie (1 m) i dokumentacja</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Truck className="w-4 h-4" />
                <span>Darmowa ekspresowa dostawa ubezpieczona</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4" />
                <span>2-letnia gwarancja Apple i bezpłatne wsparcie techniczne</span>
              </div>
            </div>

            {/* Podsumowanie i CTA */}
            <div className="pt-2 flex items-center justify-between border-t border-white/10">
              <div>
                <p className="text-xs text-slate-400">Cena brutto:</p>
                <p className="text-2xl font-bold text-white tracking-tight">{pricing[selectedStorage]}</p>
              </div>
              <button
                type="button"
                onClick={handleOrder}
                className="px-7 py-3 rounded-full bg-linear-to-r from-sky-400 to-blue-600 hover:from-sky-300 hover:to-blue-500 text-white font-medium text-sm transition-all shadow-lg shadow-sky-500/25 active:scale-95"
              >
                Potwierdź rezerwację
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
