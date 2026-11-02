"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Project } from "@/data/portfolio-data";
import { Calendar, Building2, CheckCircle2, Cpu, ShieldCheck, Layers } from "lucide-react";
import { Button } from "./ui/button";

interface ProjectDialogProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDialog({ project, isOpen, onClose }: ProjectDialogProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl sm:p-8 border-brand-200">
        <DialogHeader>
          <div className="flex items-center gap-2 text-xs font-mono text-palette-jade uppercase tracking-wider mb-2 font-semibold">
            <span className="w-2 h-2 rounded-full bg-palette-mint" />
            <span>CASE STUDY // {project.category}</span>
          </div>
          <DialogTitle className="text-2xl sm:text-3xl font-extrabold text-zinc-950 leading-tight">
            {project.title}
          </DialogTitle>
          <p className="text-sm font-semibold text-palette-pine mt-1">
            {project.subtitle}
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 mt-3 pt-3 border-t border-brand-100">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-palette-jade" />
              {project.timeline}
            </span>
            <span className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-palette-jade" />
              {project.organization}
            </span>
            <span className="flex items-center gap-1.5 font-medium text-palette-pine bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
              Role: {project.role}
            </span>
          </div>
        </DialogHeader>

        {/* Modal Body Content */}
        <div className="space-y-6 pt-2">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-palette-jade font-semibold mb-2">
              Executive Overview
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-brand-50/70 border border-brand-200 rounded-xl p-4">
              <h5 className="text-xs font-mono font-bold text-palette-pine uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-palette-jade" />
                The Challenge
              </h5>
              <p className="text-xs text-zinc-600 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="bg-gradient-to-br from-palette-pine to-palette-pineDark text-white rounded-xl p-4 shadow-sm border border-brand-700">
              <h5 className="text-xs font-mono font-bold text-palette-mint uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-palette-mint" />
                The Solution
              </h5>
              <p className="text-xs text-brand-100 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Key Achievements */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-palette-jade font-semibold mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-palette-pine" />
              Key Engineering Achievements
            </h4>
            <ul className="space-y-2">
              {project.keyAchievements.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 bg-brand-50/50 border border-brand-100 rounded-lg p-3"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-palette-jade mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-palette-jade font-semibold mb-2 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-palette-pine" />
              Technologies & Standards
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techBadges.map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-palette-light text-palette-pine border border-brand-200"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="flex items-center justify-between pt-4 mt-4 border-t border-brand-100">
          <span className="text-xs text-zinc-400 font-mono">
            Lahore, Pakistan · Production Deliverable
          </span>
          <Button
            variant="default"
            size="sm"
            onClick={onClose}
          >
            Close Breakdown
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
