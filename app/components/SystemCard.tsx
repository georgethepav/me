"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function SystemCard({ system }: any) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!system.images?.length) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % system.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [system.images]);

  return (
    <Link href={`/systems/${system.slug}`}>
      <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-white/30 transition cursor-pointer">

        {/* IMAGE CAROUSEL */}
        <div className="relative h-56 w-full">
          {system.images?.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        </div>

        {/* CONTENT */}
        <div className="p-6">

          <h3 className="text-lg font-semibold mb-2">
            {system.title}
          </h3>

          <p className="text-sm text-zinc-400 line-clamp-2">
            {system.description}
          </p>

        </div>

      </div>
    </Link>
  );
}
