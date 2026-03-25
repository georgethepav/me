"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import projects from "../data/projects.json";

type Project = {
  title: string;
  slug: string;
  description: string;
  images: string[];
};

function ProjectCard({ project }: { project: Project }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [project.images.length]);

  return (
    <Link href={`/projects/${project.slug}`}>
      <div className="bg-zinc-900 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.03] hover:shadow-2xl transition-all duration-300 group cursor-pointer">
        
        <img
          src={project.images[index]}
          alt={project.title}
          className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="p-5">
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="text-zinc-400 mt-2">{project.description}</p>
        </div>

      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* NAV */}
      <nav className="flex justify-between p-6 border-b border-zinc-800">
        <h1 className="text-lg font-bold">George</h1>
        <div className="flex gap-6 text-zinc-400">
          <a href="#projects">Projects</a>
          <a href="#systems">Systems</a>
          <a href="#ventures">Ventures</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="p-16 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          Designing Property.<br />
          Building Systems.<br />
          Thinking Differently.
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Architectural technologist combining design, development thinking and intelligent workflows to deliver better, faster outcomes.
        </p>
      </section>

      {/* BROOKERFLYNN PROJECTS */}
      <section id="projects" className="p-10 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">
          My Projects for BrookerFlynn Architects
        </h2>

        <p className="text-zinc-400 mb-10 max-w-3xl">
          Architectural and design professional with over 18 years’ experience delivering complex retail projects across the UK and Europe. 
          At BrookerFlynn Architects, I have contributed to over 150 projects across high-profile environments including airports and major retail destinations, specialising in refits, refurbishments and full fit-outs for blue-chip clients.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {(projects as Project[]).map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section id="systems" className="p-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Systems & Intelligence</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Feasibility Systems",
            "Planning Intelligence",
            "Automation & Dynamo",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-6 rounded-2xl hover:bg-zinc-800 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-lg font-semibold">{item}</h3>
              <p className="text-zinc-400 mt-2">
                Intelligent systems designed to improve speed, accuracy and decision-making.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VENTURES */}
      <section id="ventures" className="p-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Other Ventures</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {["UrbanBrief", "GrivoBlinx", "Coming Soon"].map((v, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-6 rounded-2xl text-center hover:scale-105 transition-all duration-300"
            >
              <div className="h-20 bg-zinc-800 mb-4 rounded-lg flex items-center justify-center text-zinc-500">
                BRAND
              </div>
              <h3 className="text-lg font-semibold">{v}</h3>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}