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

        <div className="absolute inset-0">
          <img
            src="/GB.png"
            alt="George Billam"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 15%" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 md:py-32 w-full flex flex-col items-center text-center">
          <div className="max-w-3xl">

            <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6">
              AI and design technology leadership
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white">
              Leading AI adoption in<br />
              <span className="bg-gradient-to-r from-zinc-200 to-zinc-500 bg-clip-text text-transparent">
                architecture practices.
              </span>
            </h1>

            <p className="text-zinc-300 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
              18+ years in architecture and construction design. Leads AI policy,
              governance, training and practice-specific agents on live projects.
              Anthropic Claude Certified Associate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/George_Billam_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-zinc-200 transition text-sm tracking-wide"
              >
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-block border border-zinc-500 text-white font-semibold px-8 py-3 rounded-full hover:border-white transition text-sm tracking-wide"
              >
                Get in touch
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* -- PROOF STRIP ------------------------------------------------- */}
      <section className="bg-zinc-950 border-y border-zinc-800 px-6 py-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-0 md:divide-x md:divide-zinc-800">

            {[
              { stat: "18+", label: "Years in practice" },
              { stat: "150+", label: "Retail fit-outs delivered" },
              { stat: "2 hrs - 15 min", label: "Drawing issue time" },
              { stat: "~1 hr - minutes", label: "Fee proposals prepared" },
              { stat: "Same day", label: "Concept visuals (was 3-5 days)" },
            ].map((item) => (
              <div key={item.stat} className="text-center md:px-6">
                <p className="text-2xl font-bold text-white mb-1">{item.stat}</p>
                <p className="text-xs text-zinc-500 leading-snug">{item.label}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* -- HOW I LEAD AI IN PRACTICE ----------------------------------- */}
      <section id="ai-leadership" className="px-6 py-24 max-w-6xl mx-auto">

        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">AI leadership</p>
        <h2 className="text-3xl font-semibold mb-4 leading-snug">
          How I lead AI in practice
        </h2>
        <p className="text-zinc-400 max-w-3xl mb-12 leading-relaxed">
          At my current practice, AI adoption is structured rather than ad hoc. Every agent,
          tool and workflow follows a consistent governance model. Here is how it works.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {[
            {
              title: "Usage policy and approved platforms",
              body: "A written AI usage policy lists approved platforms, defines data-handling boundaries and sets expectations for staff. AI tools are approved - they are not left to individual discretion. The policy covers Claude, Microsoft Copilot and the agents built on top of them.",
            },
            {
              title: "Shared prompt library",
              body: "A curated library of tested prompts shared across the practice, covering Claude and Microsoft Copilot. Good technique spreads rather than sitting with individuals. Prompts are reviewed before they enter the library and updated when behaviour changes.",
            },
            {
              title: "Policy-governed assistant with a confidentiality gate",
              body: "A practice assistant that flags any query touching Building Regulations, fire, structural or CDM risk for human review before the output is used. The agent answers; a named person decides whether to rely on it. Sensitive project data never leaves the practice environment.",
            },
            {
              title: "Drafts-only rule",
              body: "Agents prepare. People check and send. No AI output goes to a client, consultant or authority without a named individual reading and approving it. This is not a technical limitation - it is a governance decision, applied consistently across every agent in the practice.",
            },
            {
              title: "Skills promoted after two clean runs",
              body: "Procedures are not promoted to reusable skills until they have completed two clean, checked runs on real work. This controls quality and prevents bad patterns from becoming permanent. Every skill in the library has a record of the runs that qualified it.",
            },
            {
              title: "Working across all major platforms",
              body: "The practice is not committed to a single vendor. We work across Claude (Anthropic), Microsoft Copilot, and the open-source Revit MCP ecosystem. Governance applies regardless of the platform, and staff are trained on the differences between them.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
              <p className="font-semibold text-sm mb-3">{item.title}</p>
              <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
            </div>
          ))}

        </div>

      </section>

      {/* -- AGENTS AND TOOLS IN DAILY USE ------------------------------- */}
      <section id="systems" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          Agents and tools in daily use
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          A record of everything built and running on live projects - from drawing issue automation
          to AI agents operating inside Revit. Each one follows the practice governance model.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system: any) => (
            <SystemCard key={system.slug} system={system} />
          ))}
        </div>

      </section>

      {/* -- PRACTICE DELIVERY ------------------------------------------- */}
      <section id="projects" className="px-6 pb-24 max-w-6xl mx-auto">

        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Practice delivery</p>
        <h2 className="text-3xl font-semibold mb-4">
          Practice delivery
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          I lead a four-person team delivering complex airport retail fit-outs at Heathrow,
          Manchester, Dublin and Copenhagen. Projects below represent the range of that work.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </section>

      {/* -- CREDENTIALS ------------------------------------------------- */}
      <section id="credentials" className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="border-t border-zinc-800 pt-20">

          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">

            <div className="flex-shrink-0 flex justify-center">
              <a
                href="https://www.credly.com/badges/2dbaa34d-90ca-4b3c-8953-997de57e5b66/public_url"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://images.credly.com/size/340x340/images/a6387cbd-5ac1-4894-833a-da2cbc28587e/blob"
                  alt="Claude Certified Associate badge, verified on Credly"
                  className="w-40 h-40 md:w-48 md:h-48"
                  style={{ filter: "drop-shadow(0 0 28px rgba(251,191,36,0.4))" }}
                />
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-8">Credentials</p>

              <div className="space-y-7">

                <div>
                  <p className="text-zinc-400 text-sm mb-1">GrivoBlinx is a Member of Anthropic&apos;s</p>
                  <a
                    href="https://grivoblinx.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold text-amber-400 hover:text-amber-300 transition leading-tight"
                  >
                    Claude Partner Network.
                  </a>
                </div>

                <div>
                  <p className="text-zinc-400 text-sm mb-1">George Billam is an Anthropic-accredited</p>
                  <a
                    href="https://www.credly.com/badges/2dbaa34d-90ca-4b3c-8953-997de57e5b66/public_url"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold text-amber-400 hover:text-amber-300 transition leading-tight"
                  >
                    Claude Certified Associate.
                  </a>
                </div>

              </div>

              <p className="text-zinc-500 text-sm mt-8">
                Proctored exam, Pearson VUE. Verified on Credly. Works across Claude,
                Microsoft Copilot and the broader AI ecosystem - not committed to a single platform.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* -- SPEAKING AND COLLABORATION ---------------------------------- */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="border-t border-zinc-800 pt-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Speaking and collaboration</p>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              Open to conversations about AI adoption in architecture practices.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Whether that is sharing what we have built, advising on governance and policy,
              or contributing to panel discussions and industry events - get in touch at{" "}
              <a href="mailto:hello@grivoblinx.com" className="text-white underline underline-offset-2 hover:text-zinc-300 transition">
                hello@grivoblinx.com
              </a>.
            </p>
          </div>
        </div>
      </section>

      {/* -- OTHER VENTURES ---------------------------------------------- */}
      <section id="ventures" className="px-6 pb-20 max-w-6xl mx-auto">
        <div className="border-t border-zinc-800 pt-16">

          <h2 className="text-xl font-semibold text-zinc-400 mb-8">
            Other ventures
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <a
              href="https://grivoblinx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 rounded-xl p-6 hover:scale-[1.02] transition flex flex-col items-center text-center group"
            >
              <div className="w-full flex items-center justify-center mb-4" style={{ height: "80px" }}>
                <img src="/logos/grivoblinx.png" alt="GrivoBlinx" className="max-h-full max-w-full object-contain" />
              </div>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition leading-relaxed">
                GrivoBlinx is my AI consultancy - Claude Partner Network member, advising practices on AI adoption, governance and tooling.
              </p>
            </a>

            <a
              href="https://urbanbrief.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-zinc-900 rounded-xl p-6 hover:scale-[1.02] transition flex flex-col items-center text-center group"
            >
              <div className="w-full flex items-center justify-center mb-4" style={{ height: "80px" }}>
                <img src="/logos/urbanbrief.png" alt="Urban Brief" className="max-h-full max-w-full object-contain rounded-xl" />
              </div>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition leading-relaxed">
                Urban Brief is a property intelligence platform offering renovation and extension cost calculators and AI-generated reports for homeowners and developers in the UK.
              </p>
            </a>

          </div>

        </div>
      </section>

      {/* -- CONTACT ----------------------------------------------------- */}
      <section id="contact" className="px-6 py-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">

          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">Contact</p>
          <h2 className="text-3xl font-semibold mb-10">Get in touch</h2>

          <div className="flex flex-col sm:flex-row gap-4 flex-wrap">

            <a
              href="mailto:hello@grivoblinx.com"
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-600 transition group"
            >
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wide">Email</p>
                <p className="text-white text-sm font-medium group-hover:text-zinc-300 transition">hello@grivoblinx.com</p>
              </div>
            </a>

            <a
              href="tel:+447478219495"
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-600 transition group"
            >
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wide">Phone</p>
                <p className="text-white text-sm font-medium group-hover:text-zinc-300 transition">07478 219495</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/george-billam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-600 transition group"
            >
              <svg className="w-6 h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wide">LinkedIn</p>
                <p className="text-white text-sm font-medium group-hover:text-zinc-300 transition">linkedin.com/in/george-billam</p>
              </div>
            </a>

          </div>

        </div>
      </section>

      {/* -- FOOTER ------------------------------------------------------ */}
      <footer className="border-t border-zinc-800 px-6 py-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

          <div className="space-y-2">
            <p className="text-sm text-zinc-400">&copy; 2026 George Billam</p>
            <a href="mailto:hello@grivoblinx.com" className="text-sm text-zinc-500 hover:text-white transition">
              hello@grivoblinx.com
            </a>
          </div>

          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#ai-leadership" className="hover:text-white transition">AI in Practice</a>
            <a href="#systems" className="hover:text-white transition">Agents &amp; Tools</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/george-billam"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-zinc-500 hover:text-white transition"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://urbanbrief.co.uk" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition">
              <img src="/logos/urbanbrief.png" alt="Urban Brief" className="h-5 w-auto object-contain opacity-80" />
            </a>
          </div>

        </div>
      </footer>

    </main>
  );
}
