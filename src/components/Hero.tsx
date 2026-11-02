"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { MapPin, Briefcase, Download, ArrowRight, Mail } from "lucide-react";
import { DeveloperCard } from "./DeveloperCard";
import { GithubIcon, LinkedinIcon, WhatsappIcon } from "./SocialIcons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

export function Hero() {
  const { personal } = PORTFOLIO_DATA;
  const roles = personal.typewriterRoles;

  // Typewriter effect state
  const [currentRoleIndex, setCurrentRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 90;
    const pauseTime = isDeleting ? 30 : 2000;

    if (!isDeleting && displayText === fullText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, roles]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative w-full overflow-hidden border-b border-brand-100">
      <div className="max-w-6xl mx-auto pt-32 pb-20 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column (lg:col-span-7) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start"
        >
          {/* 1. Status Pill Badge with Mint Accent */}
          <div className="bg-brand-50 text-palette-pine text-xs font-medium px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 mb-6 border border-palette-mint/60 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-palette-mint animate-pulse" />
            <span>Available for freelance work</span>
          </div>

          {/* 2. Primary Heading */}
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 leading-[1.08]">
            <span className="block">Hi, I&apos;m Muhammad</span>
            <span className="block text-palette-pine">Junaid</span>
          </h1>

          {/* 3. Typewriter Subtitle */}
          <div className="font-serif text-2xl sm:text-3xl text-palette-pine mt-4 mb-5 flex items-center min-h-[2.5rem]">
            <span>{displayText}</span>
            <span className="ml-0.5 font-sans font-light text-palette-jade animate-blink">|</span>
          </div>

          {/* 4. Bio Paragraph */}
          <p className="text-zinc-600 text-base leading-relaxed max-w-xl mb-6">
            {personal.bio}
          </p>

          {/* 5. Metadata Row */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-semibold text-zinc-800 mb-7">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-palette-jade fill-palette-mint/30" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-palette-jade" />
              <span>{personal.availability}</span>
            </div>
          </div>

          {/* 6. CTA Button Group */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <a
              href="#contact"
              onClick={scrollToContact}
              className="bg-palette-pine text-white hover:bg-palette-pineDark rounded-lg px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2 shadow-sm transition-transform active:scale-95"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-4 h-4 text-palette-mint" />
            </a>

            <a
              href={personal.cvPath}
              download="M_Junaid_CV.pdf"
              className="bg-white text-palette-pine border border-zinc-300 hover:bg-brand-50 hover:border-palette-jade rounded-lg px-5 py-2.5 text-sm font-medium inline-flex items-center gap-2 transition-colors"
            >
              <Download className="w-4 h-4 text-palette-jade" />
              <span>Download CV</span>
            </a>
          </div>

          {/* 7. Horizontal Divider */}
          <div className="border-t border-brand-200/80 w-full max-w-lg mb-6" />

          {/* 8. Social Row */}
          <div className="flex items-center gap-5 text-sm font-medium text-zinc-700">
            <span className="font-semibold text-palette-pine">Follow me:</span>
            <TooltipProvider delayDuration={150}>
              <div className="flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={personal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-brand-200 text-zinc-700 hover:text-palette-pine hover:border-palette-jade hover:bg-brand-50 transition-all duration-200"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-palette-pine text-white">GitHub Profile</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={personal.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-brand-200 text-zinc-700 hover:text-palette-pine hover:border-palette-jade hover:bg-brand-50 transition-all duration-200"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-palette-pine text-white">LinkedIn Profile</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={personal.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg border border-brand-200 text-zinc-700 hover:text-palette-pine hover:border-palette-jade hover:bg-brand-50 transition-all duration-200"
                      aria-label="Chat on WhatsApp"
                    >
                      <WhatsappIcon className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-palette-pine text-white">WhatsApp (+92 328 6993079)</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={`mailto:${personal.email}`}
                      className="p-2 rounded-lg border border-brand-200 text-zinc-700 hover:text-palette-pine hover:border-palette-jade hover:bg-brand-50 transition-all duration-200"
                      aria-label="Send Direct Email"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent className="bg-palette-pine text-white">{personal.email}</TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>
        </motion.div>

        {/* Right Column (lg:col-span-5) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <DeveloperCard imageSrc="/profile-pic.jpeg" altText="Muhammad Junaid" />
        </motion.div>
      </div>
    </section>
  );
}
