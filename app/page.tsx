"use client";

import ProjectCard from "./components/ProjectCard";
import projects from "../data/projects.json";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-32 px-6">
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
      <section className="px-6 pb-20 max-w-6xl mx-auto animate-fadeIn">

        <h2 className="text-3xl font-semibold mb-4">
          My Projects for BrookerFlynn Architects
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Architectural and design professional with over 18 years’ experience delivering complex retail projects across the UK and Europe. At BrookerFlynn Architects, I’ve contributed to over 150 projects across high-profile environments including airports and major retail destinations, specialising in refits, refurbishments and full fit-outs for blue-chip clients.
        </p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project: any) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </section>

    </main>
  );
}
