"use client";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import projects from "../data/projects.json";
import systems from "../data/systems.json";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="text-center py-40 px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Designing Property.
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Building Systems.
          </span>
          <br />
          <span className="bg-gradient-to-r from-white to-zinc-500 bg-clip-text text-transparent">
            Thinking Differently.
          </span>
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          Architectural technologist combining design, development thinking and intelligent workflows to deliver better, faster outcomes.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          My Projects for BrookerFlynn Architects
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Architectural and design professional with over 18 years’ experience delivering complex retail projects across the UK and Europe.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </section>

      {/* DIGITAL SYSTEMS */}
      <section id="systems" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          Digital Systems
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Tools, automations and intelligent workflows developed to improve speed, accuracy and decision-making across projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system: any) => (
            <ProjectCard key={system.slug} project={system} />
          ))}
        </div>

      </section>

      {/* OTHER VENTURES */}
      <section id="ventures" className="px-6 pb-24 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          Other Ventures
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Independent tools, products and business ideas exploring new ways to create value within the built environment.
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-zinc-900 p-6 rounded-xl">
            UrbanBrief
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl">
            GrivoBlinx
          </div>

        </div>

      </section>

    </main>
  );
}
