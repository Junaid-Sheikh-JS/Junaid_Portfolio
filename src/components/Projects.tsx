"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Folder, ArrowUpRight, Calendar, Building2, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio-data";
import { ProjectDialog } from "./ProjectDialog";

type FilterCategory = "All" | "React & UI" | "Corporate & Logistics";

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = React.useState<FilterCategory>("All");
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    return project.category === activeFilter;
  });

  const handleOpenProject = (project: Project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  return (
    <section id="projects" className="py-24 bg-white border-b border-brand-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-palette-pine text-xs font-mono font-medium mb-3 border border-palette-mint/50">
              <Folder className="w-3.5 h-3.5 text-palette-jade" />
              <span>02 // CURATED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              Featured Projects
            </h2>
            <p className="text-zinc-600 text-base max-w-xl mt-2">
              Scalable web architectures, enterprise corporate platforms, and fluid motion systems delivered for production.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-palette-light border border-brand-200 rounded-xl text-xs font-medium self-start md:self-auto">
            {(["All", "React & UI", "Corporate & Logistics"] as FilterCategory[]).map(
              (category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveFilter(category)}
                  className={`px-3.5 py-1.5 rounded-lg transition-all duration-200 select-none ${
                    activeFilter === category
                      ? "bg-palette-pine text-white font-semibold shadow-xs"
                      : "text-zinc-600 hover:text-palette-pine hover:bg-brand-50"
                  }`}
                >
                  {category}
                </button>
              )
            )}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                onClick={() => handleOpenProject(project)}
                className="group relative cursor-pointer rounded-2xl border border-brand-200 bg-white p-6 hover:border-palette-jade hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top metadata row */}
                  <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-4 pb-3 border-b border-brand-100">
                    <span className="px-2.5 py-0.5 rounded-full bg-brand-50 text-palette-pine font-medium border border-brand-200/80">
                      {project.category}
                    </span>
                    <span className="flex items-center gap-1 text-zinc-400">
                      <Calendar className="w-3 h-3 text-palette-jade" />
                      {project.timeline}
                    </span>
                  </div>

                  {/* Project Title & Subtitle */}
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-zinc-950 group-hover:text-palette-pine transition-colors">
                      {project.title}
                    </h3>
                    <div className="p-1 rounded-md text-zinc-400 group-hover:text-palette-pine group-hover:bg-brand-50 transition-all shrink-0">
                      <ArrowUpRight className="w-4 h-4 text-palette-jade" />
                    </div>
                  </div>

                  <p className="text-xs font-mono text-palette-jade mb-3 flex items-center gap-1.5 font-medium">
                    <Building2 className="w-3.5 h-3.5 text-palette-pine" />
                    {project.organization}
                  </p>

                  {/* Summary */}
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-1.5 mb-6 text-xs text-zinc-600">
                    {project.highlights.slice(0, 2).map((item, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-palette-jade shrink-0" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Bottom: Tech Badges & CTA */}
                <div className="pt-4 border-t border-brand-100">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techBadges.slice(0, 3).map((badge) => (
                      <span
                        key={badge}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-palette-light text-palette-pine border border-brand-200/60"
                      >
                        {badge}
                      </span>
                    ))}
                    {project.techBadges.length > 3 && (
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-brand-50 text-palette-jade font-medium">
                        +{project.techBadges.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs font-medium text-palette-pine group-hover:text-palette-jade group-hover:translate-x-0.5 transition-all">
                    <span>Explore Case Study Breakdown</span>
                    <span className="text-base">→</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal Case Study breakdown */}
        <ProjectDialog
          project={selectedProject}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
        />
      </div>
    </section>
  );
}
