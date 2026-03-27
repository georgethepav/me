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

      <div className="max-w-4xl mx-auto px-6 py-20">

        {/* BACK */}
        <a
          href="/#projects"
          className="text-sm text-zinc-500 hover:text-white mb-6 inline-block"
        >
          ← Back
        </a>

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          {project.title}
        </h1>

        {/* LOCATION (PROJECTS ONLY) */}
        {project.location && (
          <div className="text-sm text-zinc-500 mb-4">
            {project.location}
          </div>
        )}

        {/* TAGS */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags?.map((tag: string, i: number) => (
            <span
              key={i}
              className="text-xs px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* HERO IMAGE */}
        {project.images?.[0] && (
          <img
            src={project.images[0]}
            className="w-full h-[400px] object-cover rounded-xl mb-10"
          />
        )}

        {/* DESCRIPTION */}
        <p className="text-lg text-zinc-300 mb-10">
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
                className="rounded-xl object-cover w-full h-64"
              />
            ))}
          </div>
        )}

      </div>

    </main>
  );
}
