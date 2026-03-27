export const dynamic = "force-dynamic";

import fs from "fs";
import path from "path";

export default function SystemPage({ params }: any) {
  const filePath = path.join(process.cwd(), "data", "systems.json");

  const fileData = fs.readFileSync(filePath, "utf-8");
  const systems = JSON.parse(fileData);

  const slug = params.slug;

  const system = systems.find((s: any) => s.slug === slug);

  if (!system) {
  return (
    <div className="text-white p-10">
      <div>Slug from URL: {slug}</div>
      <pre>{JSON.stringify(systems, null, 2)}</pre>
    </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* BACK */}
        <a
          href="/#systems"
          className="text-sm text-zinc-500 hover:text-white mb-6 inline-block"
        >
          ← Back
        </a>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          {system.title}
        </h1>

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-8">
          {system.tags?.map((tag: string, i: number) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* HERO */}
        {system.images?.[0] && (
          <img
            src={system.images[0]}
            className="w-full h-[400px] object-cover rounded-xl mb-10"
          />
        )}

        {/* DESCRIPTION */}
        <p className="text-lg text-zinc-300 mb-10">
          {system.description}
        </p>

        {/* CONTENT */}
        <div className="space-y-6 text-zinc-400 leading-relaxed">
          {system.content?.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* GALLERY */}
        {system.images?.length > 1 && (
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {system.images.slice(1).map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                className="rounded-xl object-cover w-full h-64"
              />
            ))}
          </div>
        )}

      </div>

    </main>
  );
}
