export const dynamic = "force-dynamic";

import fs from "fs";
import path from "path";

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "data", "projects.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const projects = JSON.parse(fileData);

  const project = projects.find((p: any) => p.slug === slug);

  if (!project) {
    return (
      <div className="text-white p-10">
        Not found: {slug}
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen">

      {/* HERO IMAGE -- full bleed, image-first */}
      {project.images?.[0] && (
        <div className="w-full h-[60vh] relative overflow-hidden">
          <img
            src={project.images[0]}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
          {/* Back link overlaid on image */}
          <a
            href="/#projects"
            className="absolute top-6 left-6 text-sm text-white/70 hover:text-white transition bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm"
          >
            ← Back
          </a>
        </div>
      )}

      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Back link fallback if no image */}
        {!project.images?.[0] && (
          <a
            href="/#projects"
            className="text-sm text-zinc-500 hover:text-white mb-6 inline-block"
          >
            ← Back
          </a>
        )}

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          {project.title}
        </h1>

        {/* LOCATION */}
        {project.location && (
          <div className="text-sm text-zinc-500 mb-8">
            {project.location}
          </div>
        )}

        {/* DESCRIPTION */}
        <p className="text-lg text-zinc-300 mb-12 leading-relaxed">
          {project.description}
        </p>

        {/* CONTENT (BLOG STYLE) */}
        <div className="space-y-6 text-zinc-400 leading-relaxed text-[15px]">
          {project.content?.map((para: string, i: number) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* IMAGE GALLERY */}
        {project.images?.length > 1 && (
          <div className="grid md:grid-cols-2 gap-6 mt-16">
            {project.images.slice(1).map((img: string, i: number) => (
              <img
                key={i}
                src={img}
                alt={`${project.title} - image ${i + 2}`}
                className="rounded-xl object-cover w-full h-64"
              />
            ))}
          </div>
        )}

        {/* TAGS -- moved to bottom as metadata */}
        {project.tags?.length > 0 && (
          <div className="mt-16 pt-10 border-t border-zinc-800">
            <p className="text-xs font-semibold tracking-widest text-zinc-600 uppercase mb-4">Tags</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag: string, i: number) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>

    </main>
  );
}
