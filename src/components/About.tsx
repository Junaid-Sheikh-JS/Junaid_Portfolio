"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Terminal,
  Layers,
  Sparkles,
  MapPin,
  ChevronRight,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";

export function About() {
  const { personal, skills, timeline } = PORTFOLIO_DATA;
  const [timelineTab, setTimelineTab] = React.useState<"all" | "experience" | "education">("all");

  const filteredTimeline = timeline.filter((item) => {
    if (timelineTab === "all") return true;
    return item.type === timelineTab;
  });

  return (
    <section id="about" className="py-24 bg-surface border-b border-brand-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-palette-pine text-xs font-mono font-medium mb-3 border border-palette-mint/50">
            <span className="w-1.5 h-1.5 rounded-full bg-palette-mint" />
            <span>01 // PROFILE & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            About, Tech Stack & Experience
          </h2>
          <p className="text-zinc-600 text-base max-w-2xl mt-2">
            Engineering resilient user interfaces with modern React paradigms, performance-first styling, and community-driven curiosity.
          </p>
        </div>

        {/* Bento Grid Top Layer: Narrative & Community */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Narrative Card (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-white rounded-2xl border border-brand-200 p-8 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-palette-jade uppercase tracking-wider mb-4 font-semibold">
                <Terminal className="w-4 h-4 text-palette-pine" />
                <span>Developer Biography</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-950 mb-4">
                Architecting intuitive frontend interfaces from Sabzazar, Lahore.
              </h3>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed mb-4">
                {personal.aboutNarrative}
              </p>
              <p className="text-zinc-600 text-sm leading-relaxed">
                I bridge the gap between Figma mockups and production-grade software by writing modular, accessible code with clean component boundaries. From asynchronous API state to fluid 60fps micro-animations, every interaction is crafted with purpose.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-100 flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-zinc-600">
              <div className="flex items-center gap-1.5 text-palette-pine">
                <MapPin className="w-3.5 h-3.5 text-palette-jade" />
                <span>{personal.address}</span>
              </div>
              <div className="flex items-center gap-1.5 text-palette-pine">
                <span className="w-2 h-2 rounded-full bg-palette-mint" />
                <span>Languages: English, Urdu, Punjabi</span>
              </div>
            </div>
          </motion.div>

          {/* Community & AI Exploration Card (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 bg-gradient-to-br from-palette-pine to-palette-pineDark text-white rounded-2xl p-8 shadow-md flex flex-col justify-between relative overflow-hidden border border-brand-700"
          >
            {/* Background subtle glowing pattern */}
            <div className="absolute -right-10 -bottom-10 w-44 h-44 rounded-full bg-palette-mint/20 blur-3xl pointer-events-none" />

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-palette-mint text-xs font-mono mb-4 border border-palette-mint/30">
                <Sparkles className="w-3.5 h-3.5 text-palette-mint" />
                <span>GDG LAHORE COMMUNITY</span>
              </div>
              <h3 className="text-xl font-bold tracking-tight text-white mb-3">
                Google Developer Group (GDG) Lahore
              </h3>
              <p className="text-brand-100 text-sm leading-relaxed mb-4">
                Actively engaged in Lahore&apos;s tech ecosystem, attending developer meetups and specialized hands-on workshops on:
              </p>
              <ul className="space-y-2 text-xs font-mono text-brand-100">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-palette-mint" />
                  <span>Generative AI & Gemini API Applications</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-palette-mint" />
                  <span>Modern Frontend Architecture & Web Performance</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-palette-mint" />
                  <span>Open Source Collaboration & Tech Networking</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-700/80 flex items-center justify-between text-xs text-brand-200 font-mono">
              <span>Lahore, Pakistan</span>
              <span className="text-palette-mint font-semibold">Active Participant</span>
            </div>
          </motion.div>
        </div>

        {/* Categorized Technical Skills */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-palette-jade uppercase tracking-wider mb-1 font-semibold">
                <Layers className="w-4 h-4 text-palette-pine" />
                <span>Technical Capabilities</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">Categorized Skills Matrix</h3>
            </div>
            <span className="text-xs text-palette-jade font-mono hidden sm:inline-block">
              Hover badges for details
            </span>
          </div>

          <TooltipProvider delayDuration={100}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((category, idx) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "200px" }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-xl border border-brand-200 p-6 shadow-2xs hover:border-palette-jade hover:shadow-sm transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-bold text-palette-pine">{category.title}</h4>
                    <span className="text-[11px] font-mono text-palette-jade font-medium">
                      {category.skills.length} skills
                    </span>
                  </div>
                  <p className="text-xs text-zinc-500 mb-4">{category.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Tooltip key={skill.name}>
                        <TooltipTrigger asChild>
                          <div className="cursor-pointer">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-palette-light text-palette-pine border border-zinc-200 hover:bg-palette-pine hover:text-white hover:border-palette-pine transition-all duration-150">
                              <span>{skill.name}</span>
                              <span className="text-[10px] opacity-75 font-mono">
                                ({skill.level})
                              </span>
                            </span>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs text-xs bg-palette-pine text-white border border-brand-700">
                          <p className="font-semibold text-palette-mint mb-0.5">{skill.name}</p>
                          <p className="text-brand-100">{skill.details}</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </TooltipProvider>
        </div>

        {/* Experience & Education Timeline */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-palette-jade uppercase tracking-wider mb-1 font-semibold">
                <Briefcase className="w-4 h-4 text-palette-pine" />
                <span>Career Milestones</span>
              </div>
              <h3 className="text-2xl font-bold text-zinc-950">Experience & Education Timeline</h3>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 p-1 bg-palette-light rounded-lg text-xs font-medium self-start sm:self-auto border border-brand-200">
              <button
                type="button"
                onClick={() => setTimelineTab("all")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  timelineTab === "all"
                    ? "bg-palette-pine text-white shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-palette-pine"
                }`}
              >
                All Milestones
              </button>
              <button
                type="button"
                onClick={() => setTimelineTab("experience")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  timelineTab === "experience"
                    ? "bg-palette-pine text-white shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-palette-pine"
                }`}
              >
                Experience
              </button>
              <button
                type="button"
                onClick={() => setTimelineTab("education")}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  timelineTab === "education"
                    ? "bg-palette-pine text-white shadow-xs font-semibold"
                    : "text-zinc-600 hover:text-palette-pine"
                }`}
              >
                Education
              </button>
            </div>
          </div>

          {/* Timeline List */}
          <div className="relative border-l-2 border-brand-200 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10">
            {filteredTimeline.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="relative group"
              >
                {/* Timeline node circle with Palette Jade */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-palette-pine group-hover:border-palette-mint group-hover:scale-125 transition-all" />

                <div className="bg-white rounded-xl border border-brand-200 p-6 shadow-2xs group-hover:border-palette-jade group-hover:shadow-sm transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <div className="flex items-center gap-2">
                      {item.type === "experience" ? (
                        <Briefcase className="w-4 h-4 text-palette-jade" />
                      ) : (
                        <GraduationCap className="w-4 h-4 text-palette-jade" />
                      )}
                      <h4 className="text-base sm:text-lg font-bold text-zinc-950">
                        {item.title}
                      </h4>
                    </div>
                    <span className="text-xs font-mono text-palette-pine bg-brand-50 px-2.5 py-1 rounded-md self-start sm:self-auto border border-brand-200 font-medium">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-palette-pine mb-1">
                    {item.institution}
                  </p>
                  <p className="text-xs text-zinc-500 mb-4">{item.location}</p>

                  <ul className="space-y-1.5 mb-4 text-xs sm:text-sm text-zinc-600">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <ChevronRight className="w-3.5 h-3.5 text-palette-jade mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {item.technologies && item.technologies.length > 0 && (
                    <div className="pt-3 border-t border-brand-100 flex flex-wrap gap-1.5">
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-palette-light text-palette-pine border border-brand-200/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
