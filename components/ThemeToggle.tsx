"use client";

import React, { useSyncExternalStore } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  variant?: "navbar" | "floating" | "mobile";
}

const emptySubscribe = () => () => {};

export default function ThemeToggle({ className = "", variant = "navbar" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!isClient) {
    return (
      <div
        className={
          variant === "floating"
            ? "fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-slate-900/80 border border-white/10"
            : "w-9 h-9 rounded-full bg-white/5 border border-white/10"
        }
      />
    );
  }

  const isDark = theme === "dark";

  if (variant === "floating") {
    return (
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
        title={isDark ? "Tryb jasny" : "Tryb ciemny"}
        className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full backdrop-blur-xl border transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-sky-400 ${
          isDark
            ? "bg-slate-900/80 text-amber-300 border-white/15 hover:bg-slate-800 hover:border-white/30"
            : "bg-white/90 text-slate-800 border-slate-300/80 hover:bg-white shadow-slate-900/10"
        } ${className}`}
      >
        {isDark ? (
          <Sun className="w-5 h-5 transition-transform duration-300 rotate-0 hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 transition-transform duration-300 -rotate-12 hover:rotate-0" />
        )}
      </button>
    );
  }

  if (variant === "mobile") {
    return (
      <button
        onClick={toggleTheme}
        aria-label={isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
        className={`w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-colors ${
          isDark
            ? "bg-white/5 border-white/10 text-slate-200 hover:bg-white/10"
            : "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
        } ${className}`}
      >
        <span className="flex items-center gap-2.5">
          {isDark ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-600" />}
          <span>{isDark ? "Tryb jasny" : "Tryb ciemny"}</span>
        </span>
        <span className="text-xs text-slate-400 font-normal">
          {isDark ? "Aktywny ciemny" : "Aktywny jasny"}
        </span>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? "Przełącz na tryb jasny" : "Przełącz na tryb ciemny"}
      title={isDark ? "Włącz tryb jasny" : "Włącz tryb ciemny"}
      className={`relative inline-flex items-center justify-center w-9 h-9 rounded-full backdrop-blur-md border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400/50 ${
        isDark
          ? "bg-white/5 border-white/10 text-slate-300 hover:text-white hover:bg-white/10"
          : "bg-slate-200/80 border-slate-300 text-slate-700 hover:text-slate-900 hover:bg-slate-200"
      } ${className}`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-300/90 transition-transform duration-200" />
      ) : (
        <Moon className="w-4 h-4 text-sky-600 transition-transform duration-200" />
      )}
    </button>
  );
}
