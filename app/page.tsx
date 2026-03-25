"use client";

import Link from "next/link";
import projects from "../data/projects.json";

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO */}
      <section className="text-center py-32 px-6">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Designing Expertly.<br />
          Building Systems.<br />
          Thinking Differently.
        </h1>

        <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
          Architectural technologist combining design, development thinking and intelligent workflows to deliver better, faster outcomes.
        </p>
      </section>

      {/* PROJECTS SECTION */}
      <section className="px-6 pb-20 max-w-6xl mx-auto">

        <h2 className="text-3xl font-semibold mb-4">
          My Projects for BrookerFlynn Architects
        </h2>

        <p className="text-zinc-400 max-w-3xl mb-12">
          Architectural and design professional with over 18 years’ experience delivering complex retail projects across the UK and Europe. At BrookerFlynn Architects, I’ve contributed to over 150 projects across high-profile environments including airports and major retail destinations, specialising in refits, refurbishments and full fit-outs for blue-chip clients.
        </p>

        {/* PROJECT GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project: any) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              
              <div className="bg-zinc-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300 cursor-pointer">

                {/* IMAGE */}
                <img
                  src={project.images?.[0]}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400 text-sm">
                    {project.location}
                  </p>
                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}
