"use client";

import * as React from "react";
import { Home, UserSquare2, Folder, Code2, Mail, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", href: "#home", icon: Home },
  { id: "about", label: "About", href: "#about", icon: UserSquare2 },
  { id: "projects", label: "Projects", href: "#projects", icon: Folder },
  { id: "services", label: "Services", href: "#services", icon: Code2 },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [activeSection, setActiveSection] = React.useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState<boolean>(false);

  // Scroll spy effect
  React.useEffect(() => {
    const sectionIds = ["home", "about", "projects", "services", "contact"];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    id: string
  ) => {
    e.preventDefault();
    setActiveSection(id);
    setMobileMenuOpen(false);

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", href);
    }
  };

  return (
    <>
      {/* Desktop Floating Pill Navbar */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto max-w-[95vw]">
        <nav
          aria-label="Main Navigation"
          className="bg-white/95 backdrop-blur-md border border-brand-200/80 shadow-xs rounded-full px-2 sm:px-3 py-1.5 flex items-center gap-1 sm:gap-2 md:gap-4 transition-all duration-200"
        >
          {/* Logo / Monogram badge on the far left */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home", "home")}
            className="w-8 h-8 rounded-full bg-palette-pine text-white flex items-center justify-center font-bold text-xs font-mono mr-1 hover:bg-palette-jade hover:scale-105 transition-all shadow-2xs"
            title="Muhammad Junaid"
          >
            MJ
          </a>

          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-1 md:gap-2">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, item.id)}
                  className={cn(
                    "relative inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-all duration-200 select-none py-1.5",
                    isActive
                      ? "bg-palette-pine text-white rounded-full px-3.5 sm:px-4 py-1.5 shadow-2xs"
                      : "text-zinc-700 hover:text-palette-pine px-3 py-1.5 rounded-full hover:bg-brand-50"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-3.5 h-3.5",
                      isActive ? "text-palette-mint" : "text-zinc-500"
                    )}
                  />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Mobile active indicator text + hamburger trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <span className="text-xs font-semibold text-palette-pine px-2 uppercase tracking-wider font-mono">
              {activeSection}
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-full text-zinc-700 hover:text-palette-pine hover:bg-brand-50 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-palette-pineDark/40 backdrop-blur-xs sm:hidden"
            />
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed top-20 left-4 right-4 z-50 bg-white border border-brand-200 rounded-2xl shadow-xl p-4 sm:hidden"
            >
              <div className="flex flex-col gap-1.5">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, item.id)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-all",
                        isActive
                          ? "bg-palette-pine text-white font-semibold"
                          : "text-zinc-700 hover:bg-brand-50 hover:text-palette-pine"
                      )}
                    >
                      <Icon className={cn("w-4 h-4", isActive ? "text-palette-mint" : "text-zinc-500")} />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
