"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Copy,
  Check,
  Send,
  Loader2,
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import confetti from "canvas-confetti";
import { PORTFOLIO_DATA } from "@/data/portfolio-data";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { WhatsappIcon } from "./SocialIcons";

export function Contact() {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = React.useState(false);

  // Form State
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    botField: "",
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopiedEmail(true);
      toast.success("Email address copied to clipboard!", {
        description: personal.email,
      });
      setTimeout(() => setCopiedEmail(false), 2500);
    } catch {
      toast.error("Failed to copy email.");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Client validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name.");
      return;
    }

    if (!formData.email.trim() || !formData.email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    if (!formData.subject.trim()) {
      toast.error("Please enter an inquiry subject.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      toast.error("Please write a message with at least 10 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to send message.");
      }

      // Success feedback
      toast.success(
        result.mock
          ? "Test Message Received!"
          : "Message Sent Successfully!",
        {
          description:
            result.message ||
            "Thank you for reaching out. Muhammad Junaid will respond promptly.",
        }
      );

      // Trigger celebratory palette-matching confetti
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ["#1F6F5F", "#2FA084", "#6FCF97", "#EEEEEE"],
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        botField: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "An unexpected error occurred.";
      toast.error("Could not send message", {
        description: msg,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white border-b border-brand-200/80">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-palette-pine text-xs font-mono font-medium mb-3 border border-palette-mint/50">
            <Mail className="w-3.5 h-3.5 text-palette-jade" />
            <span>04 // INITIATE COLLABORATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
            Get in Touch
          </h2>
          <p className="text-zinc-600 text-base max-w-2xl mt-2">
            Available for freelance frontend contracts, engineering roles, and corporate web platforms.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Card (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-surface border border-brand-200 rounded-2xl p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-zinc-950 mb-3">
                Let&apos;s talk about your next project.
              </h3>
              <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                Whether you need a responsive corporate portal, an animated React application, or performance optimization, feel free to drop a message or call directly.
              </p>

              {/* Contact Details List */}
              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-200 flex items-center justify-center shrink-0 text-palette-pine shadow-2xs">
                    <MapPin className="w-5 h-5 text-palette-jade" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-palette-jade font-semibold">
                      Location
                    </span>
                    <span className="text-sm font-semibold text-zinc-900">
                      {personal.address}
                    </span>
                  </div>
                </div>

                {/* Email with copy button */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-200 flex items-center justify-center shrink-0 text-palette-pine shadow-2xs">
                    <Mail className="w-5 h-5 text-palette-jade" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-xs font-mono uppercase tracking-wider text-palette-jade font-semibold">
                      Email Address
                    </span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-sm font-semibold text-zinc-900 hover:text-palette-pine hover:underline truncate"
                      >
                        {personal.email}
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="p-1 rounded-md text-zinc-500 hover:text-palette-pine hover:bg-brand-50 transition-colors"
                        title="Copy email to clipboard"
                        aria-label="Copy email"
                      >
                        {copiedEmail ? (
                          <Check className="w-3.5 h-3.5 text-palette-jade" />
                        ) : (
                          <Copy className="w-3.5 h-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Phone & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-200 flex items-center justify-center shrink-0 text-palette-pine shadow-2xs">
                    <Phone className="w-5 h-5 text-palette-jade" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-palette-jade font-semibold">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={personal.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-zinc-900 hover:text-palette-pine hover:underline flex items-center gap-1.5 mt-0.5"
                    >
                      <span>{personal.phone}</span>
                      <span className="text-[11px] font-mono text-brand-900 bg-palette-mint/25 px-2 py-0.5 rounded border border-palette-mint/60 font-semibold">
                        WhatsApp Active
                      </span>
                    </a>
                  </div>
                </div>

                {/* Spoken Languages */}
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-200 flex items-center justify-center shrink-0 text-palette-pine shadow-2xs">
                    <Globe className="w-5 h-5 text-palette-jade" />
                  </div>
                  <div>
                    <span className="block text-xs font-mono uppercase tracking-wider text-palette-jade font-semibold">
                      Spoken Languages
                    </span>
                    <span className="text-sm font-semibold text-zinc-900">
                      {personal.languages.join(" · ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action WhatsApp Button */}
            <div className="pt-8 mt-8 border-t border-brand-200">
              <a
                href={personal.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-palette-pine text-white hover:bg-palette-pineDark rounded-xl py-3 px-4 text-sm font-medium flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <WhatsappIcon className="w-4 h-4 fill-white" />
                <span>Instant WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Contact Form (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "200px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 bg-white border border-brand-200 rounded-2xl p-8 shadow-xs"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-zinc-950 mb-1">
                Send an Inquiry
              </h3>
              <p className="text-xs text-palette-jade font-mono font-medium">
                Direct dispatch to Muhammad Junaid&apos;s verified inbox
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="botField"
                value={formData.botField}
                onChange={handleChange}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs font-mono uppercase tracking-wider text-palette-pine font-semibold"
                  >
                    Your Name <span className="text-palette-jade">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-mono uppercase tracking-wider text-palette-pine font-semibold"
                  >
                    Email Address <span className="text-palette-jade">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label
                  htmlFor="subject"
                  className="block text-xs font-mono uppercase tracking-wider text-palette-pine font-semibold"
                >
                  Subject <span className="text-palette-jade">*</span>
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="e.g. Frontend Development for Corporate Web Portal"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-xs font-mono uppercase tracking-wider text-palette-pine font-semibold"
                >
                  Project Details & Requirements <span className="text-palette-jade">*</span>
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Describe your project goals, scope, timeline, and tech requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="default"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto min-w-[200px]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin mr-2" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2 text-palette-mint" />
                    <span>Send Message</span>
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
