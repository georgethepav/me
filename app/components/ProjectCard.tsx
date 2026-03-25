"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ProjectCard({ project }: any) {
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [hovered, project.images.length]);

  return (
    <Link href={`/projects/${project.slug}`}>
      <div
        className="bg-zinc-900 rounded-2xl overflow-hidden cursor-pointer group transition duration-300 hover:scale-[1.02]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* IMAGE */}
        <div className="relative h-64 w-full">
          {project.images.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
        </div>

        {/* CONTENT */}
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-1">
            {project.title}
          </h3>

          <p className="text-zinc-400 text-sm">
            {project.location}
          </p>
        </div>
      </div>
    </Link>
  );
}
