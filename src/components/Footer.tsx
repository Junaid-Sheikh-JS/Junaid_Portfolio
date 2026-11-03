"use client";

import * as React from "react";
import { ArrowUp } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./SocialIcons";

export function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white border-t border-brand-200 py-12 text-zinc-600">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-7 h-7 rounded-full bg-palette-pine text-white font-mono font-bold text-xs flex items-center justify-center shadow-2xs">
              MJ
            </span>
            <span className="text-base font-bold text-zinc-950">
              {personal.fullName}
            </span>
          </div>
          <p className="text-xs text-palette-jade font-mono font-medium">
            Frontend Developer · Lahore, Pakistan
          </p>
        </div>

        {/* Quick Nav Links */}
        <nav
          aria-label="Footer Navigation"
          className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-zinc-600"
        >
          <a href="#home" className="hover:text-palette-pine transition-colors">
            Home
          </a>
          <a href="#about" className="hover:text-palette-pine transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-palette-pine transition-colors">
            Projects
          </a>
          <a href="#services" className="hover:text-palette-pine transition-colors">
            Services
          </a>
          <a href="#contact" className="hover:text-palette-pine transition-colors">
            Contact
          </a>
        </nav>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-palette-pine hover:bg-brand-50 transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-palette-pine hover:bg-brand-50 transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-zinc-500 hover:text-palette-pine hover:bg-brand-50 transition-colors"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg border border-brand-200 text-palette-pine hover:text-palette-jade hover:border-palette-jade hover:bg-brand-50 transition-all flex items-center gap-1.5 text-xs font-mono"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-palette-jade" />
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 pt-6 border-t border-brand-100 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 font-mono gap-2 text-center">
        <span>
          © {new Date().getFullYear()} Muhammad Junaid. All rights reserved.
        </span>
        {/* <span className="text-palette-jade">
          Emerald & Pine Palette · Production Ready
        </span> */}
      </div>
    </footer>
  );
}
