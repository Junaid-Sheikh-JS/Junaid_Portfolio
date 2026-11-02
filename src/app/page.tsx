import * as React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white">
      {/* Top Floating Pill Navbar with Active Scrollspy */}
      <Navbar />

      {/* Hero Section (#home) */}
      <Hero />

      {/* About, Tech Stack & Experience Section (#about) */}
      <About />

      {/* Featured Projects Section (#projects) */}
      <Projects />

      {/* Services Section (#services) */}
      <Services />

      {/* Contact Section & Nodemailer Integration (#contact) */}
      <Contact />

      {/* Minimalist Monochrome Footer */}
      <Footer />
    </main>
  );
}
