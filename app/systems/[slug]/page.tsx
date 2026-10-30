export const dynamic = "force-dynamic";

import fs from "fs";
import path from "path";
import Link from "next/link";

function isHeading(para: string): boolean {
  // Short strings with no terminal punctuation are section headings
  return para.length < 80 && !/[.!?]$/.test(para.trim()) && !para.startsWith('"');
}

export default async function SystemPage({ params }: any) {
  const { slug } = await params;

  const systemsPath = path.join(process.cwd(), "data", "systems.json");
  const writingPath = path.join(process.cwd(), "data", "writing.json");

  const systems = JSON.parse(fs.readFileSync(systemsPath, "utf-8"));
  const writing = JSON.parse(fs.readFileSync(writingPath, "utf-8"));

  const system = systems.find((s: any) => s.slug === slug);
  const piece = writing.find((w: any) => w.slug === slug);
  const entry = system || piece;
  const isTheory = !system && !!piece;

  if (!entry) {
    return (
      <main className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-zinc-500 mb-4">Page not found</p>
          <Link href="/" className="text-white underline">Back to home</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO IMAGE */}
      {entry.images?.[0] && (
        <div className="relative w-full h-[50vh] min-h-[320px]">
          <img
            src={entry.images[0]}
            className="absolute inset-0 w-full h-full object-cover"
            alt=""
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* BACK */}
        <a
          href={isTheory ? "/#theory" : "/#systems"}
          className="text-sm text-zinc-500 hover:text-white mb-10 inline-block transition"
        >
          ← Back
        </a>

        {/* LABEL */}
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
          {isTheory ? "Theory" : "Agents and tools"}
        </p>

        {/* TITLE */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          {entry.title}
        </h1>

        {/* DESCRIPTION */}
        <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
          {entry.description}
        </p>

        {/* TAGS */}
        {entry.tags?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-12">
            {entry.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="text-xs px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <hr className="border-zinc-800 mb-12" />

        {/* CONTENT */}
        <div className="space-y-6">
          {entry.content?.map((para: string, i: number) => (
            isHeading(para) ? (
              <h2
                key={i}
                className="text-xl font-semibold text-white pt-6"
              >
                {para}
              </h2>
            ) : (
              <p key={i} className={`leading-relaxed ${para.startsWith('"') ? "text-zinc-200 italic border-l-2 border-zinc-700 pl-4" : "text-zinc-400"}`}>
                {para}
              </p>
            )
          ))}
        </div>

        {/* DOC LINK (theory articles) */}
        {isTheory && entry.doc_url && (
          <div className="mt-16 p-6 bg-zinc-950 border border-zinc-800 rounded-xl">
            <p className="text-sm text-zinc-400 mb-3">Read the original document</p>
            <a
              href={entry.doc_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-zinc-300 transition"
            >
              Open in Claude →
            </a>
          </div>
        )}

        {/* GALLERY (systems with multiple images) */}
        {!isTheory && entry.images?.length > 1 && (
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {entry.images.slice(1).map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                className="rounded-xl object-cover w-full h-64"
                alt=""
              />
            ))}
          </div>
        )}

      </div>

    </main>
  );
}
