"use client";

import Link from "next/link";

export default function WritingCard({ piece }: any) {
  return (
    <Link href={`/systems/${piece.slug}`}>
      <div className="relative bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden group hover:border-white/30 transition cursor-pointer flex flex-col">

        {/* IMAGE */}
        {piece.images?.length > 0 && (
          <div className="relative h-56 w-full flex-shrink-0">
            <img
              src={piece.images[0]}
              className="absolute inset-0 w-full h-full object-cover"
              alt=""
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
          </div>
        )}

        {/* NO IMAGE — decorative gradient bar */}
        {(!piece.images?.length) && (
          <div className="h-2 w-full bg-gradient-to-r from-zinc-700 via-zinc-500 to-zinc-700" />
        )}

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-1">

          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-3">
            Theory
          </p>

          <h3 className="text-lg font-semibold mb-3 leading-snug">
            {piece.title}
          </h3>

          <p className="text-sm text-zinc-400 line-clamp-3 flex-1">
            {piece.description}
          </p>

          <p className="mt-4 text-xs text-zinc-600 group-hover:text-zinc-400 transition">
            Read →
          </p>

        </div>

      </div>
    </Link>
  );
}
