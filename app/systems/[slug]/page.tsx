import systems from "../../../data/systems.json";

export default function SystemPage({ params }: any) {
  const system = systems.find((s: any) => s.slug === params.slug);

  if (!system) {
    return <div className="text-white p-10">Not found</div>;
  }

  return (
    <main className="bg-black text-white min-h-screen p-10">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-6">
          {system.title}
        </h1>

        {/* HERO IMAGE */}
        {system.images?.[0] && (
          <img
            src={system.images[0]}
            className="w-full h-[400px] object-cover rounded-xl mb-8"
          />
        )}

        {/* DESCRIPTION */}
        <p className="text-zinc-300 text-lg mb-6">
          {system.description}
        </p>

        {/* TAGS */}
        <div className="flex gap-2 mb-8">
          {system.tags?.map((tag: string, i: number) => (
            <span key={i} className="text-xs px-2 py-1 bg-zinc-800 rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* FULL WRITE-UP */}
        <div className="space-y-6 text-zinc-400 leading-relaxed">

          <p>
            This system was developed to streamline workflows and remove repetitive manual processes.
          </p>

          <p>
            By leveraging automation and structured logic, it enables faster decision-making and reduces human error across projects.
          </p>

          <p>
            The approach combines technical understanding of design processes with practical implementation, ensuring the solution integrates seamlessly into real-world workflows.
          </p>

          <p>
            This reflects a broader focus on building intelligent systems that enhance performance, rather than relying solely on traditional design methods.
          </p>

        </div>

      </div>

    </main>
  );
}
