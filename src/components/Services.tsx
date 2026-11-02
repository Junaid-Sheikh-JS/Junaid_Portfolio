"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Sparkles,
  Briefcase,
  Gauge,
  SearchCheck,
  CheckCircle,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";

const ICON_MAP = {
  Code2: Code2,
  Layout: Layout,
  Sparkles: Sparkles,
  Briefcase: Briefcase,
  Gauge: Gauge,
  SearchCheck: SearchCheck,
};

export function Services() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-24 bg-surface border-b border-brand-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-palette-pine text-xs font-mono font-medium mb-3 border border-palette-mint/50">
            <span className="w-1.5 h-1.5 rounded-full bg-palette-mint" />
            <span>03 // SERVICE CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Frontend Engineering & Solutions
          </h2>
          <p className="text-zinc-600 text-base max-w-2xl mt-2">
            Specialized engineering services focused on high-conversion frontend architecture, fluid motion dynamics, and production reliability.
          </p>
        </div>

        {/* 6-Card Minimalist Grid with Color Palette */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Code2;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "200px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-white rounded-2xl border border-brand-200 p-8 shadow-2xs hover:border-palette-jade hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top: Pine Icon Badge + Index Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-palette-pine text-white flex items-center justify-center shadow-xs group-hover:bg-palette-jade group-hover:scale-105 transition-all duration-200">
                      <Icon className="w-6 h-6 text-palette-mint" />
                    </div>
                    <span className="text-xs font-mono font-bold text-palette-jade group-hover:text-palette-pine transition-colors">
                      {service.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-zinc-950 mb-3 group-hover:text-palette-pine transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="pt-4 border-t border-brand-100">
                  <p className="text-[11px] font-mono uppercase tracking-wider text-palette-jade font-semibold mb-2">
                    Key Deliverables
                  </p>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, dIdx) => (
                      <li
                        key={dIdx}
                        className="flex items-center gap-2 text-xs text-zinc-700"
                      >
                        <CheckCircle className="w-3.5 h-3.5 text-palette-jade shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
