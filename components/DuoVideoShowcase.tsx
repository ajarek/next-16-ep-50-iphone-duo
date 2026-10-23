"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Sparkles,
  Zap,
  EyeOff,
} from "lucide-react";

export default function DuoVideoShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const ambientVideoRef = useRef<HTMLVideoElement>(null);

  const [showControls, setShowControls] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [ambientGlow, setAmbientGlow] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });

  // Płynna synchronizacja i autoplay
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Próba automatycznego startu w trybie wyciszonym
    video.play().catch(() => {
      setIsPlaying(false);
    });

    const updateTime = () => {
      if (video.duration) {
        setCurrentTime(video.currentTime);
        setDuration(video.duration);
        setProgress((video.currentTime / video.duration) * 100);
      }
    };

    const handleEnded = () => {
      // Loop z synchronizacją
      video.currentTime = 0;
      video.play().catch(() => {});
    };

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("loadedmetadata", updateTime);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadedmetadata", updateTime);
    };
  }, []);

  // Synchronizacja tła ambient z głównym wideo
  useEffect(() => {
    const video = videoRef.current;
    const ambient = ambientVideoRef.current;
    if (!video || !ambient) return;

    const syncAmbient = () => {
      if (Math.abs(ambient.currentTime - video.currentTime) > 0.25) {
        ambient.currentTime = video.currentTime;
      }
      if (video.paused && !ambient.paused) {
        ambient.pause();
      } else if (!video.paused && ambient.paused) {
        ambient.play().catch(() => {});
      }
    };

    video.addEventListener("timeupdate", syncAmbient);
    video.addEventListener("play", syncAmbient);
    video.addEventListener("pause", syncAmbient);

    return () => {
      video.removeEventListener("timeupdate", syncAmbient);
      video.removeEventListener("play", syncAmbient);
      video.removeEventListener("pause", syncAmbient);
    };
  }, []);

  // Kliknięcie w ekran urządzenia przełącza widoczność paska narzędzi
  const handleScreenClick = () => {
    setShowControls((prev) => !prev);
  };

  // Sterowanie odtwarzaniem
  const togglePlay = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
      if (ambientVideoRef.current) {
        ambientVideoRef.current.play().catch(() => {});
      }
    } else {
      video.pause();
      setIsPlaying(false);
      if (ambientVideoRef.current) {
        ambientVideoRef.current.pause();
      }
    }
  }, []);

  // Sterowanie dźwiękiem
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  // Zmiana prędkości odtwarzania (np. 0.5x zwolnione tempo do analizy zawiasu)
  const cyclePlaybackRate = (e: React.MouseEvent) => {
    e.stopPropagation();
    const rates = [1, 0.5, 1.5, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextRate = rates[(currentIndex + 1) % rates.length];
    if (videoRef.current) {
      videoRef.current.playbackRate = nextRate;
    }
    if (ambientVideoRef.current) {
      ambientVideoRef.current.playbackRate = nextRate;
    }
    setPlaybackRate(nextRate);
  };

  // Restart od początku
  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
    if (ambientVideoRef.current) {
      ambientVideoRef.current.currentTime = 0;
      ambientVideoRef.current.play().catch(() => {});
    }
  };

  // Przewijanie paska postępu
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setProgress(val);
    if (videoRef.current && duration) {
      const targetTime = (val / 100) * duration;
      videoRef.current.currentTime = targetTime;
      if (ambientVideoRef.current) {
        ambientVideoRef.current.currentTime = targetTime;
      }
    }
  };

  // Tryb pełnoekranowy
  const toggleFullscreen = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      try {
        await containerRef.current.requestFullscreen();
        setIsFullscreen(true);
      } catch {
        // Fallback jeśli API fullscreen zablokowane
      }
    } else {
      await document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Efekt perspektywicznego pochylania 3D na ruch kursora
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Ograniczony, delikatny kąt wychylenia
    const rotateX = -(y / (rect.height / 2)) * 5;
    const rotateY = (x / (rect.width / 2)) * 6;
    setTilt({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const formatTime = (timeInSeconds: number) => {
    if (isNaN(timeInSeconds)) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <section
      aria-label="Interaktywna prezentacja wideo iPhone Duo"
      className="relative my-10 w-full flex flex-col items-center select-none"
    >
      {/* Kontener główny z efektem 3D i ramką tytanową */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: isHovered
            ? "transform 0.15s ease-out"
            : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        className="relative w-full max-w-4xl group"
      >
        {/* Dynamiczny Ambilight / Kinowa poświata pod wideo */}
        {ambientGlow && (
          <div
            aria-hidden="true"
            className="absolute -inset-4 sm:-inset-8 -z-10 overflow-hidden rounded-3xl opacity-60 dark:opacity-75 blur-3xl transition-opacity duration-700 pointer-events-none"
          >
            <video
              ref={ambientVideoRef}
              src="/videos/video-phone-1.mp4"
              muted
              playsInline
              loop
              aria-hidden="true"
              className="w-full h-full object-cover scale-125 filter saturate-150"
            />
          </div>
        )}

        {/* Cień studyjny */}
        <div
          aria-hidden="true"
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-20 bg-sky-500/15 dark:bg-sky-400/20 blur-2xl rounded-full pointer-events-none"
        />

        {/* Tytanowa ramka urządzenia z zaokrąglonymi rogami i metalicznym połyskiem */}
        <div className="relative overflow-hidden rounded-[2.2rem] sm:rounded-[3rem] p-2.5 sm:p-3 bg-linear-to-b from-slate-300 via-slate-500 to-slate-700 dark:from-slate-700 dark:via-slate-800 dark:to-slate-950 shadow-2xl shadow-sky-950/40 ring-1 ring-white/20">
          
          {/* Wewnętrzna precyzyjna krawędź ekranu (OLED Bezel) - kliknięcie odkrywa narzędzia */}
          <div
            onClick={handleScreenClick}
            title={showControls ? "Kliknij, aby schować pasek narzędzi" : "Kliknij, aby wyświetlić pasek narzędzi"}
            className="relative overflow-hidden rounded-[1.7rem] sm:rounded-[2.4rem] bg-black ring-1 ring-black/40 cursor-pointer"
          >
            
            {/* Wideo prezentujące iPhone Duo - czysty pełny ekran */}
            <video
              ref={videoRef}
              src="/videos/video-phone-1.mp4"
              playsInline
              muted={isMuted}
              loop
              autoPlay
              aria-label="Prezentacja mechanizmu składania iPhone Duo"
              className="w-full h-auto max-h-[70vh] object-contain transition-transform duration-500"
            />

            {/* Subtelny szklany odblask na ekranie */}
            <div
              aria-hidden="true"
              className="absolute inset-0 pointer-events-none bg-linear-to-tr from-transparent via-white/5 to-white/10 opacity-70"
            />

            {/* Subtelna wskazówka wizualna, gdy pasek jest ukryty */}
            <div
              className={`absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-none transition-opacity duration-500 ${
                showControls ? "opacity-0" : "opacity-70 group-hover:opacity-100"
              }`}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur-md border border-white/15 shadow-lg">
                Kliknij, aby sterować
              </span>
            </div>

            {/* Górna plakietka: Apple Dynamic Showcase (widoczna po kliknięciu) */}
            <div
              className={`absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 pointer-events-none transition-all duration-300 ${
                showControls ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}
            >
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase text-slate-100 bg-slate-950/70 backdrop-blur-md border border-white/10 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
                </span>
                4K Ultra-Flex
              </span>
              {playbackRate !== 1 && (
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold text-amber-300 bg-amber-950/60 backdrop-blur-md border border-amber-500/30">
                  {playbackRate}x
                </span>
              )}
            </div>

            {/* Duży wskaźnik play/pause przy zatrzymaniu (widoczny tylko gdy narzędzia są aktywne) */}
            {showControls && !isPlaying && (
              <button
                onClick={(e) => togglePlay(e)}
                aria-label="Odtwórz wideo"
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-black/60 backdrop-blur-md border border-white/20 text-white shadow-2xl hover:scale-110 active:scale-95 transition-all z-20 cursor-pointer"
              >
                <Play className="w-8 h-8 ml-1 text-sky-400 fill-sky-400" />
              </button>
            )}

            {/* Dolny pasek kontrolny w stylu iOS Dynamic Island / Glass Capsule - pojawia się dopiero po kliknięciu */}
            <div
              onClick={(e) => e.stopPropagation()}
              className={`absolute bottom-3 inset-x-3 sm:bottom-5 sm:inset-x-6 z-30 flex flex-col gap-2 transition-all duration-300 ${
                showControls
                  ? "opacity-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              
              {/* Pasek postępu odtwarzania z podglądem */}
              <div className="relative w-full group/seek flex items-center">
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={handleSeek}
                  aria-label="Pasek postępu wideo"
                  className="w-full h-1.5 sm:h-2 bg-white/20 hover:bg-white/30 rounded-full appearance-none cursor-pointer accent-sky-400 focus:outline-none transition-all"
                  style={{
                    background: `linear-gradient(to right, #38bdf8 ${progress}%, rgba(255, 255, 255, 0.2) ${progress}%)`,
                  }}
                />
              </div>

              {/* Szklany panel przycisków */}
              <div className="flex items-center justify-between px-3 py-2 sm:px-4 sm:py-2.5 rounded-2xl bg-slate-950/80 dark:bg-black/85 backdrop-blur-xl border border-white/10 shadow-xl text-slate-200">
                
                {/* Lewa strona: Play, Restart, Czas */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={(e) => togglePlay(e)}
                    aria-label={isPlaying ? "Wstrzymaj" : "Odtwórz"}
                    className="p-1.5 rounded-xl hover:bg-white/10 text-white transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 text-sky-400" />
                    ) : (
                      <Play className="w-4 h-4 text-sky-400 fill-sky-400" />
                    )}
                  </button>

                  <button
                    onClick={handleRestart}
                    aria-label="Zacznij od nowa"
                    className="hidden sm:inline-flex p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                    title="Odtwórz od początku"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <span className="text-xs font-mono text-slate-300 tracking-tight">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                {/* Prawa strona: Szybkość, Poświata kinowa, Dźwięk, Pełny ekran, Schowaj pasek */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  
                  {/* Przełącznik prędkości (np. slow motion dla zawiasu) */}
                  <button
                    onClick={cyclePlaybackRate}
                    aria-label={`Prędkość odtwarzania: ${playbackRate}x`}
                    className="px-2 py-1 rounded-lg text-xs font-semibold hover:bg-white/10 text-slate-200 transition-colors cursor-pointer"
                    title="Zmień prędkość (Slow-Motion 0.5x / Normal 1x)"
                  >
                    {playbackRate}x
                  </button>

                  {/* Przełącznik efektu Ambient Glow */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setAmbientGlow(!ambientGlow);
                    }}
                    aria-label={ambientGlow ? "Wyłącz kinową poświatę" : "Włącz kinową poświatę"}
                    className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                      ambientGlow
                        ? "bg-sky-500/20 text-sky-300 border border-sky-500/30"
                        : "hover:bg-white/10 text-slate-400 hover:text-white"
                    }`}
                    title="Kinowa poświata światła (Ambilight)"
                  >
                    <Sparkles className="w-4 h-4" />
                  </button>

                  {/* Przełącznik wyciszenia */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Wyłącz wyciszenie" : "Wycisz dźwięk"}
                    className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-slate-400" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-sky-400" />
                    )}
                  </button>

                  {/* Pełny ekran */}
                  <button
                    onClick={toggleFullscreen}
                    aria-label={isFullscreen ? "Opuść pełny ekran" : "Tryb pełnoekranowy"}
                    className="p-1.5 rounded-xl hover:bg-white/10 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  >
                    {isFullscreen ? (
                      <Minimize className="w-4 h-4" />
                    ) : (
                      <Maximize className="w-4 h-4" />
                    )}
                  </button>

                  {/* Przycisk schowania paska narzędzi */}
                  <button
                    onClick={() => setShowControls(false)}
                    aria-label="Ukryj pasek narzędzi"
                    className="p-1.5 rounded-xl hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer border-l border-white/10 ml-0.5 pl-2"
                    title="Ukryj pasek narzędzi"
                  >
                    <EyeOff className="w-4 h-4" />
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Podpis z interaktywnymi wyróżnikami technologicznymi */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-400 dark:text-slate-400">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 dark:bg-white/5 border border-white/10">
          <Zap className="w-3.5 h-3.5 text-sky-400" />
          Zawias tytanowy z mikropiaskowaniem
        </span>
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 dark:bg-white/5 border border-white/10">
          <Sparkles className="w-3.5 h-3.5 text-sky-400" />
          7.6″ Elastyczny panel Super Retina XDR
        </span>
        <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900/60 dark:bg-white/5 border border-white/10">
          Dolby Vision 4K 120 kl./s
        </span>
      </div>
    </section>
  );
}
