"use client";

import { useParams } from "next/navigation";
import projects from "../../../data/projects.json";

export default function ProjectPage() {
  const params = useParams();
  const slug = params.slug as string;

  const project = (projects as any[]).find(p => p.slug === slug);

  if (!project) {
    return <div className="p-10 text-white">Project not found</div>;
  }

  return (
    <div className="bg-black text-white min-h-screen p-10 max-w-4xl mx-auto">
      
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>

      <div className="space-y-4 mb-10">
        {project.images.map((img: string, i: number) => (
          <img key={i} src={img} className="w-full rounded-xl" />
        ))}
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Challenge</h2>
          <p className="text-zinc-400">{project.challenge}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Solution</h2>
          <p className="text-zinc-400">{project.solution}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Outcome</h2>
          <p className="text-zinc-400">{project.outcome}</p>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Systems</h2>
          <p className="text-zinc-400">{project.systems}</p>
        </div>
      </div>

    </div>
  );
}