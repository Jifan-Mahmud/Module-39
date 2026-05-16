import { useState, useEffect } from "react";

const ErrorPage = () => {
  const [glitch, setGlitch] = useState(false);
  const [count, setCount] = useState(3);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const mountTimer = window.setTimeout(() => setMounted(true), 0);
    let glitchTimeout;
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      clearTimeout(glitchTimeout);
      glitchTimeout = setTimeout(() => setGlitch(false), 150);
    }, 3000);
    return () => {
      clearTimeout(mountTimer);
      clearTimeout(glitchTimeout);
      clearInterval(glitchInterval);
    };
  }, []);

  useEffect(() => {
    if (count <= 0) return;
    const timer = setTimeout(() => setCount((c) => c - 1), 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center overflow-hidden relative font-mono">
      {/* Grid background */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#e55 1px, transparent 1px), linear-gradient(90deg, #e55 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-red-900/20 blur-[120px]" />
      </div>

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, #fff 2px, #fff 4px)",
        }}
      />

      {/* Main content */}
      <div
        className={`relative z-10 text-center px-8 max-w-2xl mx-auto transition-all duration-75 ${
          mounted ? "opacity-100" : "opacity-0"
        } ${glitch ? "translate-x-[2px]" : ""}`}
      >
        {/* Error badge */}
        <div className="inline-flex items-center gap-2 bg-red-950/60 border border-red-800/50 text-red-400 text-xs tracking-[0.2em] uppercase px-4 py-2 rounded-full mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
          System Failure
        </div>

        {/* Giant 404 */}
        <div className="relative mb-4 select-none">
          <h1
            className={`text-[clamp(8rem,20vw,14rem)] font-black leading-none tracking-tighter text-transparent bg-clip-text ${
              glitch ? "translate-x-[3px] opacity-80" : ""
            }`}
            style={{
              backgroundImage:
                "linear-gradient(135deg, #ff4444 0%, #ff6b6b 40%, #ff9999 70%, #ffcccc 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: glitch
                ? "3px 0 0 rgba(0,255,255,0.4), -3px 0 0 rgba(255,0,255,0.4)"
                : "none",
              filter: "drop-shadow(0 0 40px rgba(239,68,68,0.3))",
            }}
          >
            404
          </h1>

          {/* Ghost echo */}
          <h1
            className="absolute inset-0 text-[clamp(8rem,20vw,14rem)] font-black leading-none tracking-tighter text-red-900/20 pointer-events-none"
            style={{ transform: "translate(4px, 4px)" }}
          >
            404
          </h1>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-red-800/60" />
          <span className="text-red-700 text-xs tracking-[0.3em]">
            ERR_NOT_FOUND
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-red-800/60" />
        </div>

        {/* Message */}
        <h2 className="text-white text-2xl font-semibold mb-3 tracking-tight">
          Page not found
        </h2>
        <p className="text-zinc-500 text-base leading-relaxed mb-10 max-w-md mx-auto">
          The resource you're looking for has been moved, deleted, or never
          existed. Double-check the URL or navigate back to safety.
        </p>

        {/* Terminal block */}
        <div className="bg-zinc-950 border border-zinc-800/80 rounded-xl p-4 mb-10 text-left text-xs text-zinc-500 leading-6">
          <div className="flex items-center gap-2 mb-3 pb-3 border-b border-zinc-800/60">
            <div className="w-3 h-3 rounded-full bg-red-600/70" />
            <div className="w-3 h-3 rounded-full bg-yellow-600/70" />
            <div className="w-3 h-3 rounded-full bg-green-600/70" />
            <span className="ml-auto text-zinc-700 text-[10px] tracking-widest">
              terminal
            </span>
          </div>
          <div className="space-y-1">
            <p>
              <span className="text-red-500">✗</span>{" "}
              <span className="text-zinc-400">GET</span>{" "}
              <span className="text-zinc-200">/unknown-path</span>
            </p>
            <p>
              <span className="text-zinc-600">→</span>{" "}
              <span className="text-red-400">404</span>{" "}
              <span className="text-zinc-500">Resource not found</span>
            </p>
            <p>
              <span className="text-zinc-600">→</span>{" "}
              <span className="text-zinc-500">Timestamp:</span>{" "}
              <span className="text-zinc-400">{new Date().toISOString()}</span>
            </p>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => window.history.back()}
            className="group flex items-center gap-2 bg-white text-zinc-900 font-semibold text-sm px-6 py-3 rounded-lg hover:bg-zinc-100 active:scale-95 transition-all duration-150 w-full sm:w-auto justify-center"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Go back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="group flex items-center gap-2 bg-transparent text-zinc-300 font-semibold text-sm px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-500 hover:text-white active:scale-95 transition-all duration-150 w-full sm:w-auto justify-center"
          >
            <svg
              className="w-4 h-4 transition-transform group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </button>

          <button
            onClick={() => window.location.reload()}
            className="group flex items-center gap-2 bg-transparent text-zinc-500 font-semibold text-sm px-6 py-3 rounded-lg border border-zinc-800 hover:border-zinc-600 hover:text-zinc-300 active:scale-95 transition-all duration-150 w-full sm:w-auto justify-center"
          >
            <svg
              className={`w-4 h-4 transition-transform group-hover:rotate-180 duration-500`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Retry
          </button>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-zinc-700 text-xs tracking-wide">
          Error code <span className="text-zinc-600">0x404</span> · HTTP/1.1
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
