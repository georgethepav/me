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

      {/* -- HERO -------------------------------------------------------- */}
      <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">

        {/* BACKGROUND IMAGE -- centred, cropped upward */}
        <div className="absolute inset-0">
          <img
            src="/GB.png"
            alt="George Billam"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55" />
          {/* Subtle bottom fade for section continuity */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        {/* CONTENT -- centred */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 md:py-32 w-full flex flex-col items-center text-center">
          <div className="max-w-2xl">

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

      {/* -- ABOUT ------------------------------------------------------- */}
      <section id="about" className="px-6 py-24 max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">About</p>
            <h2 className="text-3xl font-semibold mb-6 leading-snug">
              18+ Years of Architecture &amp; Construction experience, over a decade of building systems.
            </h2>
          </div>

          <div className="space-y-5 text-zinc-300 leading-relaxed text-[15px]">
            <p>
              I&apos;m an Architectural Technologist with over 18 years&apos; experience in construction and
              delivering complex commercial retail projects across the UK, Europe and the Middle East.
              I lead a small studio team at BrookerFlynn Architects, specialising in travel &amp; airport
              retail fit-out clients and their associated brands. My day-to-day spans
              detailed Revit-based BIM design, UK building regulations and landlord approvals, and
              coordinating with in-country technical architects on international projects.
            </p>
            <p>
              Alongside my work at Brookerflynn Architects, I build the systems, tools and automations that
              make design studios run faster and smarter, from AI-powered fee proposal tools to
              end-to-end drawing issue workflows. I&apos;m also the founder of{" "}
              <a
                href="https://urbanbrief.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline underline-offset-2 hover:text-zinc-300 transition"
              >
                Urban Brief
              </a>
              , a data-driven property intelligence platform, and I&apos;m developing further ventures at
              the intersection of architecture, technology and passive income.
            </p>
            <p className="text-zinc-500 text-sm">
              Based in Nottingham, UK.
            </p>
          </div>

        </div>

      </section>

      {/* -- PROJECTS ---------------------------------------------------- */}
      <section id="projects" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          My Projects for BrookerFlynn Architects
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          At Brookerflynn I&apos;m delivering complex retail projects across the UK, Europe and The Middle East.
          Specialising in refits, refurbishments and full fit-outs for high-profile environments including airports
          and major retail destinations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </section>

      {/* -- APPLIED INTELLIGENCE ---------------------------------------- */}
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

      {/* -- OTHER VENTURES ---------------------------------------------- */}
      <section id="ventures" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          Other Ventures
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Independent ventures and tools exploring new ways to create value within the built environment.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

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
                className="max-h-full max-w-full object-contain rounded-xl"
                style={{ filter: "brightness(1.05)" }}
              />
            </div>
            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition leading-relaxed">
              Urban Brief is a data-driven property intelligence platform offering renovation and
              extension cost calculators, AI-generated reports and practical guidance for homeowners,
              developers and investors making smarter property decisions in the UK.
            </p>
          </a>

          {/* GRIVOBLINX */}
          <a
            href="https://grivoblinx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-900 rounded-xl p-6 hover:scale-[1.03] transition flex flex-col items-center text-center group"
          >
            <div className="w-full flex items-center justify-center mb-5"
              style={{ height: "120px" }}>
              <img
                src="/logos/grivoblinx.png"
                alt="GrivoBlinx"
                className="max-h-full max-w-full object-contain"
                style={{ filter: "brightness(1.05)" }}
              />
            </div>

            <p className="text-base font-semibold text-zinc-100 mb-2">GrivoBlinx</p>
            <p className="text-sm text-zinc-500">
              Bespoke AI tools and workflow automation for design and construction practices.
            </p>

          </a>

        </div>

      </section>

      {/* -- WORK WITH ME ------------------------------------------------ */}
      <section id="work-with-me" className="px-6 py-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Work With Me</p>
              <h2 className="text-4xl font-bold leading-tight mb-6">
                Let&apos;s build something that actually works.
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">
                Whether you need architectural design and BIM delivery, a systems thinker to untangle
                your practice workflows, or someone to build the AI tools your team keeps asking for &mdash;
                I&apos;m available for the right projects.
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
                  desc: "End-to-end workflow design \u2014 from fee proposals and drawing issue to project tracking and reporting.",
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

      {/* -- CONTACT ----------------------------------------------------- */}
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
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
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
                  Connect on LinkedIn
                </p>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* -- FOOTER ------------------------------------------------------ */}
      <footer className="border-t border-zinc-800 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          {/* LEFT -- copyright + email */}
          <div className="space-y-2">
            <p className="text-sm text-zinc-400">&copy; 2025 George Billam</p>
            <a
              href="mailto:billamgeorge@gmail.com"
              className="text-sm text-zinc-500 hover:text-white transition"
            >
              billamgeorge@gmail.com
            </a>
          </div>

          {/* CENTRE -- nav links */}
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#systems" className="hover:text-white transition">Systems</a>
            <a href="#work-with-me" className="hover:text-white transition">Work With Me</a>
          </div>

          {/* RIGHT -- LinkedIn + Urban Brief */}
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
                className="h-5 w-auto object-contain opacity-80"
              />
            </a>

          </div>

        </div>
      </footer>

    </main>
  );
}
