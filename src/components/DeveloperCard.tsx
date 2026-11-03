"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Laptop, Sparkles, User, Terminal, Code2 } from "lucide-react";

interface DeveloperCardProps {
  imageSrc?: string;
  altText?: string;
  className?: string;
}

export function DeveloperCard({
  imageSrc = "/profile-pic.jpeg",
  altText = "Muhammad Junaid - Frontend Developer",
  className,
}: DeveloperCardProps) {
  const [activeView, setActiveView] = React.useState<"photo" | "illustration">("photo");

  return (
    <div className="w-full max-w-sm flex flex-col items-center">
      {/* Switcher Pills */}
      <div className="flex items-center gap-1.5 p-1 bg-palette-light rounded-full mb-3 text-xs font-medium border border-brand-200 shadow-2xs">
        <button
          type="button"
          onClick={() => setActiveView("photo")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
            activeView === "photo"
              ? "bg-palette-pine text-white shadow-xs"
              : "text-zinc-600 hover:text-palette-pine"
          }`}
        >
          <User className="w-3.5 h-3.5" />
          <span>Real Portrait</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveView("illustration")}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
            activeView === "illustration"
              ? "bg-palette-pine text-white shadow-xs"
              : "text-zinc-600 hover:text-palette-pine"
          }`}
        >
          <Laptop className="w-3.5 h-3.5" />
          <span>Vector Studio</span>
        </button>
      </div>

      {/* Main High-Contrast Card */}
      <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-white border border-brand-200 shadow-sm flex items-end justify-center group transition-all duration-300 hover:border-palette-jade hover:shadow-lg">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#C6E9D9 1.2px, transparent 1.2px)`,
            backgroundSize: "16px 16px",
          }}
        />

        <AnimatePresence mode="wait">
          {activeView === "photo" ? (
            <motion.div
              key="photo-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center overflow-hidden"
            >
              {/* Photo */}
              <div className="relative w-full h-full">
                <Image
                  src={imageSrc}
                  alt={altText}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-top filter contrast-105 brightness-100 group-hover:scale-105 transition-all duration-500"
                  priority
                />
                {/* Vignette gradient overlay tinted with deep pine */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/85 via-transparent to-transparent pointer-events-none" />
                
                {/* Live status badge on photo */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none">
                  <div>
                    <p className="text-xs font-mono uppercase tracking-widest text-white">Muhammad Junaid</p>
                    {/* <p className="text-sm font-semibold tracking-tight text-white flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-palette-mint animate-pulse" />
                      Lahore · Tech Event 2026
                    </p> */}
                  </div>
                  <span className="px-2.5 py-1 text-[11px] font-mono bg-palette-pine/80 backdrop-blur-md rounded-md border border-palette-mint/40 text-white font-semibold shadow-xs">
                    REACT.JS
                  </span>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="illustration-view"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex flex-col items-center justify-end p-6 select-none"
            >
              {/* Vector Developer Illustration styled with Palette */}
              <div className="relative w-full h-full flex flex-col items-center justify-end">
                {/* Floating Code Snippets */}
                <motion.div
                  initial={{ y: -6, opacity: 0.9 }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-5 left-3 bg-palette-pine text-white px-3 py-1.5 rounded-lg text-xs font-mono shadow-md border border-brand-700 flex items-center gap-1.5"
                >
                  <Terminal className="w-3.5 h-3.5 text-palette-mint" />
                  <span>const dev = true;</span>
                </motion.div>

                <motion.div
                  initial={{ y: 6, opacity: 0.9 }}
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-12 right-3 bg-white text-palette-pine px-3 py-1.5 rounded-lg text-xs font-mono shadow-md border border-brand-200 flex items-center gap-1.5"
                >
                  <Code2 className="w-3.5 h-3.5 text-palette-jade" />
                  <span>&lt;React.Strict /&gt;</span>
                </motion.div>

                {/* SVG Vector Developer */}
                <svg
                  viewBox="0 0 320 280"
                  className="w-full h-auto max-h-[230px]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Ambient Glow using Palette Light Mint/Jade */}
                  <circle cx="160" cy="140" r="100" fill="#E2F4EC" />
                  
                  {/* Desk Surface */}
                  <rect x="20" y="240" width="280" height="8" rx="4" fill="#1F6F5F" />
                  
                  {/* Laptop Base */}
                  <rect x="100" y="234" width="120" height="6" rx="2" fill="#17564A" />
                  {/* Laptop Screen */}
                  <path
                    d="M110 165H210C212.2 165 214 166.8 214 169V230C214 232.2 212.2 234 210 234H110C107.8 234 106 232.2 106 230V169C106 166.8 107.8 165 110 165Z"
                    fill="#0D352E"
                  />
                  {/* Screen Display */}
                  <rect x="112" y="171" width="96" height="57" rx="2" fill="#112421" />
                  {/* Screen Content Lines with Mint & Jade Palette */}
                  <rect x="118" y="178" width="30" height="3" rx="1.5" fill="#6FCF97" />
                  <rect x="118" y="185" width="55" height="3" rx="1.5" fill="#2FA084" />
                  <rect x="126" y="192" width="40" height="3" rx="1.5" fill="#EEEEEE" />
                  <rect x="126" y="199" width="60" height="3" rx="1.5" fill="#6FCF97" />
                  <rect x="118" y="206" width="45" height="3" rx="1.5" fill="#2FA084" />
                  <circle cx="198" cy="216" r="3" fill="#6FCF97" />

                  {/* Developer Silhouette */}
                  <path
                    d="M105 240C105 210 120 185 160 185C200 185 215 210 215 240H105Z"
                    fill="#1F6F5F"
                  />
                  {/* Collar Accent */}
                  <path
                    d="M145 186L160 205L175 186C170 190 150 190 145 186Z"
                    fill="#17564A"
                  />
                  {/* Head */}
                  <ellipse cx="160" cy="148" rx="24" ry="28" fill="#F2F9F6" stroke="#1F6F5F" strokeWidth="3.5" />
                  {/* Hair */}
                  <path
                    d="M136 142C136 122 144 114 160 114C176 114 186 124 186 140C184 130 174 122 160 122C146 122 138 132 136 142Z"
                    fill="#0D352E"
                  />
                  {/* Glasses */}
                  <rect x="144" y="142" width="13" height="9" rx="2" stroke="#1F6F5F" strokeWidth="2.5" fill="none" />
                  <rect x="163" y="142" width="13" height="9" rx="2" stroke="#1F6F5F" strokeWidth="2.5" fill="none" />
                  <line x1="157" y1="146" x2="163" y2="146" stroke="#1F6F5F" strokeWidth="2" />
                  
                  {/* Headphones */}
                  <path
                    d="M132 148C132 130 142 120 160 120C178 120 188 130 188 148"
                    stroke="#1F6F5F"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <rect x="129" y="143" width="7" height="15" rx="3.5" fill="#2FA084" />
                  <rect x="184" y="143" width="7" height="15" rx="3.5" fill="#2FA084" />

                  {/* Coffee Mug on Desk */}
                  <rect x="68" y="222" width="16" height="18" rx="2" fill="#2FA084" />
                  <path d="M84 226H87C88.6 226 90 227.4 90 229V231C90 232.6 88.6 234 87 234H84" stroke="#2FA084" strokeWidth="2" />
                  <path d="M72 216Q76 211 72 206" stroke="#6FCF97" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M77 217Q81 212 77 207" stroke="#6FCF97" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {/* Bottom Card Caption */}
                <div className="w-full flex items-center justify-between pt-2 border-t border-brand-100 text-[11px] text-zinc-500 font-mono">
                  <span className="flex items-center gap-1.5 text-palette-pine font-medium">
                    <Sparkles className="w-3 h-3 text-palette-jade" />
                    Jerry Codes
                  </span>
                  <span className="text-palette-jade">M. Junaid</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Under-card metadata chip */}
      {/* <div className="flex items-center justify-between w-full mt-3 px-1 text-xs text-zinc-500 font-mono">
        <span className="inline-flex items-center gap-1.5 text-zinc-600">
          <span className="w-1.5 h-1.5 rounded-full bg-palette-jade"></span>
          Sabzazar, Lahore
        </span>
        <span className="text-palette-pine font-medium">BSCS · 2023-2027</span>
      </div> */}
    </div>
  );
}
