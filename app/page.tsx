"use client";

export const dynamic = "force-dynamic";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import SystemCard from "./components/SystemCard";

import projects from "../data/projects.json";
import systems from "../data/systems.json";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* ââ HERO âââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE â right-anchored, much more visible */}
        <div className="absolute inset-0">
          <img
            src="/GB.png"
            alt="George Billam"
            className="absolute right-0 top-0 h-full w-auto object-cover object-right"
            style={{ maxWidth: "70%" }}
          />
          {/* Gradient: opaque black on left fading to semi-transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/25" />
          {/* Subtle bottom fade for section continuity */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* CONTENT â left-aligned split layout */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 w-full">
          <div className="max-w-xl">

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Designing Expertly.<br />
              Building Systems.<br />
              <span className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                Thinking Differently.
              </span>
            </h1>

            <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
              Architectural technologist combining design expertise, BIM delivery
              and intelligent workflow systems to deliver better, faster outcomes.
            </p>

            <a
              href="#work-with-me"
              className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-zinc-200 transition text-sm tracking-wide"
            >
              Work With Me
            </a>

          </div>
        </div>

      </section>

      {/* ââ ABOUT ââââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section id="about" className="px-6 py-24 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">About</p>
            <h2 className="text-3xl font-semibold mb-6 leading-snug">
              18 years of architecture.<br />
              A decade of building systems.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-300 leading-relaxed text-[15px]">
            <p>
              I'm an architectural technologist and principal designer with over 18 years' experience
              delivering complex commercial retail projects across the UK, Europe and the Middle East.
              I lead a small studio team at BrookerFlynn Architects, specialising in airport retail
              fit-out â clients include WHSmith and its associated brands. My day-to-day spans
              detailed Revit-based BIM design, UK building regulations and landlord approvals, and
              coordinating with in-country technical architects on international projects.
            </p>
            <p>
              Alongside my architectural practice, I build the systems, tools and automations that
              make design studios run faster and smarter â from AI-powered fee proposal tools to
              end-to-end drawing issue workflows. I'm also the founder of{" "}
              <a
                href="https://urbanbrief.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-zinc-300 transition"
              >
                Urban Brief
              </a>
              , a data-driven property intelligence platform, and I'm developing further ventures at
              the intersection of architecture, technology and passive income.
            </p>
            <p className="text-zinc-500 text-sm">
              Based in Nottingham, UK.
            </p>
          </div>

        </div>

      </section>

      {/* ââ PROJECTS âââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section id="projects" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          My Projects for BrookerFlynn Architects
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Architectural and design professional with over 18 years' experience in construction,
          delivering complex retail projects across the UK, Europe and The Middle East. Specialising
          in refits, refurbishments and full fit-outs for high-profile environments including airports
          and major retail destinations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </section>

      {/* ââ APPLIED INTELLIGENCE âââââââââââââââââââââââââââââââââââââââ */}
      <section id="systems" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          Applied Intelligence
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          A collection of tools, automations and digital workflows developed to improve efficiency,
          reduce risk and unlock better decision-making across projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system: any) => (
            <SystemCard key={system.slug} system={system} />
          ))}
        </div>

      </section>

      {/* ââ OTHER VENTURES âââââââââââââââââââââââââââââââââââââââââââââ */}
      <section id="ventures" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          Other Ventures
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Independent ventures and tools exploring new ways to create value within the built environment.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* URBANBRIEF */}
          <a
            href="https://urbanbrief.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 rounded-xl p-6 hover:scale-[1.03] transition flex flex-col items-center text-center group"
          >
            <div className="w-full flex items-center justify-center mb-5"
              style={{ height: "120px" }}>
              <img
                src="/logos/urbanbrief.png"
                alt="Urban Brief"
                className="max-h-full max-w-full object-contain"
                style={{ filter: "brightness(1.05)" }}
              />
            </div>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition leading-relaxed">
              Urban Brief is a data-driven property intelligence platform offering renovation and
              extension cost calculators, AI-generated reports and practical guidance for homeowners,
              developers and investors making smarter property decisions in the UK.
            </p>
          </a>

          {/* GRIVOBLINX â coming soon, no logo, no link */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col items-center text-center">

            <div className="mb-5 flex items-center justify-center w-full" style={{ height: "120px" }}>
              <span className="text-xs font-semibold tracking-widest text-zinc-600 uppercase border border-zinc-700 px-4 py-2 rounded-full">
                Coming Soon
              </span>
            </div>

            <p className="text-base font-semibold text-zinc-400 mb-2">GrivoBlinx</p>
            <p className="text-sm text-zinc-500">
              Automation-led workflows and systems for scalable development. Currently in build.
            </p>

          </div>

          {/* PLACEHOLDER SLOT */}
          <div className="bg-zinc-900 rounded-xl p-6 flex flex-col items-center text-center">

            <div className="h-16 w-24 mb-5 bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-600">
              Coming Soon
            </div>

            <p className="text-sm text-zinc-500">
              New tools and ventures currently in development.
            </p>

          </div>

        </div>

      </section>

      {/* ââ WORK WITH ME âââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section id="work-with-me" className="px-6 py-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Work With Me</p>
              <h2 className="text-4xl font-bold leading-tight mb-6">
                Let's build something that actually works.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Whether you need architectural design and BIM delivery, a systems thinker to untangle
                your practice workflows, or someone to build the AI tools your team keeps asking for â
                I'm available for the right projects.
              </p>
              <a
                href="#contact"
                className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-zinc-200 transition text-sm tracking-wide"
              >
                Get in Touch
              </a>
            </div>

            <div className="grid grid-cols-1 gap-4">

              {[
                {
                  title: "Architectural Design & BIM Delivery",
                  desc: "Revit-based BIM design, UK building regulations, landlord approvals and international project coordination.",
                },
                {
                  title: "AI Workflow Consultancy",
                  desc: "Designing and building AI-powered tools and automations tailored to how your practice actually operates.",
                },
                {
                  title: "Systems Thinking for Practices",
                  desc: "End-to-end workflow design â from fee proposals and drawing issue to project tracking and reporting.",
                },
                {
                  title: "Digital Product Development",
                  desc: "Turning technical domain knowledge into scalable digital products and platforms.",
                },
              ].map((item) => (
                <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5">
                  <p className="font-semibold text-sm mb-1">{item.title}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* ââ CONTACT ââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <section id="contact" className="px-6 py-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Contact</p>
          <h2 className="text-3xl font-semibold mb-10">Get in touch</h2>

          <div className="flex flex-col sm:flex-row gap-6">

            {/* EMAIL */}
            <a
              href="mailto:billamgeorge@gmail.com"
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-600 transition group"
            >
              <span className="text-2xl">â</span>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wide">Email</p>
                <p className="text-white text-sm font-medium group-hover:text-zinc-300 transition">
                  billamgeorge@gmail.com
                </p>
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/george-billam-65b4bb48/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-600 transition group"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wide">LinkedIn</p>
                <p className="text-white text-sm font-medium group-hover:text-zinc-300 transition">
                  george-billam-65b4bb48
                </p>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* ââ FOOTER âââââââââââââââââââââââââââââââââââââââââââââââââââââ */}
      <footer className="border-t border-zinc-800 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* LEFT â copyright + email */}
          <div className="space-y-2">
            <p className="text-sm text-zinc-400">Â© 2025 George Billam</p>
            <a
              href="mailto:billamgeorge@gmail.com"
              className="text-sm text-zinc-500 hover:text-white transition"
            >
              billamgeorge@gmail.com
            </a>
          </div>

          {/* CENTRE â nav links */}
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#systems" className="hover:text-white transition">Systems</a>
            <a href="#work-with-me" className="hover:text-white transition">Work With Me</a>
          </div>

          {/* RIGHT â LinkedIn + Urban Brief */}
          <div className="flex items-center gap-6">

            <a
              href="https://www.linkedin.com/in/george-billam-65b4bb48/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

            <a
              href="https://urbanbrief.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition"
            >
              <img
                src="/logos/urbanbrief.png"
                alt="Urban Brief"
                className="h-6 object-contain"
              />
            </a>

          </div>

        </div>
      </footer>

    </main>
  );
}
