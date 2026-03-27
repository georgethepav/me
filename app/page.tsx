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

      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center text-center overflow-hidden">

  {/* IMAGE BACKGROUND */}
  <div className="absolute inset-0 flex justify-end">
    <img
      src="/GB.png"
      className="h-full object-cover opacity-30 blur-[1px] translate-x-10 md:translate-x-0"
    />

    {/* DARK FADE OVERLAY */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
  </div>

  {/* CONTENT */}
  <div className="relative z-10 max-w-4xl px-6">

    <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
      Designing Expertly.
      <br />
      Building Systems.
      <br />
      Thinking Differently.
    </h1>

    <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
      Architectural technologist combining design, development thinking and
      intelligent workflows to deliver better, faster outcomes.
    </p>

  </div>

</section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          My Projects for BrookerFlynn Architects
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Architectural and design professional with over 18 years’ experience in construction, delivering complex retail projects across the UK and Europe. Specialising in refits, refurbishments and full fit-outs for high-profile environments including airports and major retail destinations.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </section>

      {/* APPLIED INTELLIGENCE */}
      <section id="systems" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          Applied Intelligence
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          A collection of tools, automations and digital workflows developed to improve efficiency, reduce risk and unlock better decision-making across projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system: any) => (
            <SystemCard key={system.slug} system={system} />
          ))}
        </div>

      </section>

      {/* OTHER VENTURES */}
<section id="ventures" className="px-6 pb-32 max-w-6xl mx-auto">

  <h2 className="text-3xl font-semibold mb-4">
    Other Ventures
  </h2>

  <p className="text-zinc-400 max-w-3xl mb-12">
    Independent ventures and tools exploring new ways to create value within the built environment.
  </p>

  <div className="grid md:grid-cols-3 gap-6">

    {/* URBANBRIEF */}
    <div className="bg-zinc-900 rounded-xl p-6 hover:scale-[1.03] transition flex flex-col items-center text-center">

      <img
        src="/logos/urbanbrief.png"
        alt="UrbanBrief"
        className="h-36 mb-4 object-contain"
      />

      <p className="text-sm text-zinc-400">
        Data-driven tools to support smarter property decisions.
      </p>

    </div>

    {/* GRIVOBLINX */}
    <div className="bg-zinc-900 rounded-xl p-6 hover:scale-[1.03] transition flex flex-col items-center text-center">

      <img
        src="/logos/grivoblinx.png"
        alt="GrivoBlinx"
        className="h-36 mb-4 object-contain"
      />

      <p className="text-sm text-zinc-400">
        Automation-led workflows and systems for scalable development.
      </p>

    </div>

    {/* PLACEHOLDER */}
    <div className="bg-zinc-900 rounded-xl p-6 hover:scale-[1.03] transition flex flex-col items-center text-center">

      <div className="h-12 w-24 mb-4 bg-zinc-800 rounded flex items-center justify-center text-xs text-zinc-500">
        Coming Soon
      </div>

      <p className="text-sm text-zinc-400">
        New tools and ventures currently in development.
      </p>

    </div>

  </div>

</section>

    </main>
  );
}
