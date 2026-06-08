"use client";

import Navbar from "../components/Navbar";

const portfolioProjects = [
  {
    title: "WHSmith + InMotion — Heathrow Terminal 5",
    caption:
      "World's largest InMotion store. 36-metre LED fascia. Delivered concurrently with WHSmith's most advanced flagship. Full BIM coordination, Heathrow landlord approvals and Building Control.",
    image:
      "https://res.cloudinary.com/dgeaojy0i/image/upload/v1777405394/projects/whsmith-heathrow-terminal-5-one-stop-shop-inmotion/edlyt88ygmztzz2bbtsk.jpg",
    href: "/projects/whsmith-heathrow-terminal-5-one-stop-shop-inmotion",
  },
  {
    title: "Pandora Evoke — Manchester Airport Terminal 2",
    caption:
      "Pandora's first standalone UK airport store. 14-metre pink-tiled facade, twin digital screens, Pandora Evoke concept. Delivered within MAG's T2 Transformation Programme.",
    image:
      "https://res.cloudinary.com/dgeaojy0i/image/upload/v1777405830/projects/pandora-manchester-t2/arcaay42lkev9ali2x5b.jpg",
    href: "/projects/pandora-manchester-t2",
  },
  {
    title: "WHSmith — Heathrow Terminal 4",
    caption:
      "Full fit-out of a vacant shell unit at Heathrow T4. Bespoke translucent fire-rated glazed shopfront downstand. Principal Designer, UK Building Regulations and full Heathrow landlord approval.",
    image:
      "https://res.cloudinary.com/dgeaojy0i/image/upload/v1777405151/projects/whsmith-heathrow-terminal-4-one-stop-shop/fclrxeyn5wmzrjzppkqq.jpg",
    href: "/projects/whsmith-heathrow-terminal-4-one-stop-shop",
  },
  {
    title: "WHSmith Travel Essentials — Manchester Airport Terminal 2",
    caption:
      "Sense-of-place retail environment referencing Manchester's industrial heritage. Honeycomb lighting feature. Delivered within MAG's new Terminal 2 fit-out standard.",
    image:
      "https://res.cloudinary.com/dgeaojy0i/image/upload/v1774647434/projects/whsmith-travel-essentials-store-manchester-airport-terminal-2/zemkhofwg0vf6r2jbsxk.jpg",
    href: "/projects/whsmith-travel-essentials-store-manchester-airport-terminal-2",
  },
];

const landlordFrameworks = [
  { name: "Westfield" },
  { name: "JLL" },
  { name: "British Land" },
  { name: "intu" },
  { name: "Trafford Centre" },
  { name: "Meadowhall" },
  { name: "Heathrow Airport" },
  { name: "Manchester Airports Group" },
  { name: "Copenhagen Airport" },
  { name: "UK Regional Airports" },
];

const tooling = [
  "Revit",
  "SketchUp",
  "BIM",
  "AutoCAD",
  "Dynamo",
  "AI-Assisted Visualisation",
  "Adobe Suite",
];

const credentials = [
  {
    label: "Experience",
    value: "18+ years retail design",
  },
  {
    label: "Specialism",
    value: "Airport and high street fit-out",
  },
  {
    label: "Tooling",
    value: "Revit, SketchUp, BIM, AI visualisation",
  },
  {
    label: "Based",
    value: "Nottingham, UK",
  },
];

export default function URWPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative min-h-screen md:min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://res.cloudinary.com/dgeaojy0i/image/upload/v1777405395/projects/whsmith-heathrow-terminal-5-one-stop-shop-inmotion/ugxfqvahn82e1oxy3lxq.jpg"
            alt="Retail design — Heathrow Terminal 5"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ objectPosition: "center 40%" }}
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-24 md:py-40 w-full">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase mb-6">
              George Billam — for Unibail-Rodamco-Westfield
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-white">
              Retail design at the standard Westfield demands.
            </h1>
            <p className="text-zinc-300 text-lg mb-4 leading-relaxed max-w-2xl">
              18 years of airport and high street retail fit-out. Deep familiarity with landlord design
              guidelines, tenant submission review and compliance delivery across the UK and Europe.
              SketchUp, Revit and AI-driven visualisation for rapid concept and leasing output.
            </p>
            <p className="text-zinc-400 text-base mb-10 leading-relaxed max-w-2xl">
              I am applying for the Lead Retail Design Manager role and this page is built specifically
              for that conversation. Everything on it is directly relevant to the brief.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:billamgeorge@gmail.com"
                className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-zinc-200 transition text-sm tracking-wide text-center"
              >
                Get in Touch
              </a>
              <a
                href="https://www.linkedin.com/in/george-billam-65b4bb48/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-zinc-600 text-white font-semibold px-8 py-3 rounded-full hover:bg-white hover:text-black transition text-sm tracking-wide text-center"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* QUICK CREDENTIALS STRIP                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="border-t border-b border-zinc-800 px-6 py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {credentials.map((c) => (
            <div key={c.label}>
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-1">
                {c.label}
              </p>
              <p className="text-sm text-white font-medium">{c.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PORTFOLIO                                                           */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
          Portfolio
        </p>
        <h2 className="text-3xl font-semibold mb-4">
          Delivered. On standard. On programme.
        </h2>
        <p className="text-zinc-400 max-w-3xl mb-12 text-[15px] leading-relaxed">
          A selection of projects that demonstrate what this role requires: landmark retail fit-outs,
          complex landlord approvals, Principal Designer responsibility and design craft that holds up
          in world-class terminal environments.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {portfolioProjects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group bg-zinc-900 rounded-2xl overflow-hidden hover:scale-[1.02] transition duration-300 cursor-pointer block"
            >
              <div className="relative h-64 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{project.caption}</p>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="/#projects"
            className="text-sm text-zinc-500 hover:text-white transition"
          >
            View all projects on the main site
          </a>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* LANDLORD DESIGN GUIDELINES                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                Landlord Design Guidelines
              </p>
              <h2 className="text-3xl font-semibold mb-6 leading-snug">
                I know how landlords think because I have spent 18 years delivering to their standards.
              </h2>
              <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                Every project I deliver involves navigating a landlord's design guidelines, submitting
                for approval, responding to comments and iterating to compliance. I have done this across
                the full spectrum of UK retail and travel destinations - from airport authorities with
                zero tolerance for non-compliant submissions, to shopping centre landlords running
                centralised design review processes.
              </p>
              <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                That experience means I understand what a good tenant submission looks like, what a weak
                one looks like, and how to guide a design from one to the other. It is exactly the
                perspective the Lead Retail Design Manager role requires.
              </p>
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                I have delivered compliant fit-out designs into and against the guidelines of the
                following landlords and frameworks:
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-3 mb-10">
                {landlordFrameworks.map((f) => (
                  <span
                    key={f.name}
                    className="text-sm font-medium px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full"
                  >
                    {f.name}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  {
                    heading: "Tenant submission review",
                    body: "I have spent years sitting on the design side of the landlord review table - understanding what a reviewer is looking for, what draws comments and what sails through. That perspective transfers directly to reviewing inbound submissions.",
                  },
                  {
                    heading: "Compliance delivery under pressure",
                    body: "Airport retail operates on some of the tightest approval timescales in the industry. Delivering compliant packages under programme pressure is standard practice for me, not an exception.",
                  },
                  {
                    heading: "Multi-jurisdiction experience",
                    body: "UK, continental Europe and the Middle East. Each territory brings different statutory and landlord requirements. I have managed in-country technical architects and coordinated approvals across all of them.",
                  },
                ].map((item) => (
                  <div
                    key={item.heading}
                    className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                  >
                    <p className="font-semibold text-sm mb-1">{item.heading}</p>
                    <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* AI VISUALISATION                                                    */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                AI-Assisted Visualisation
              </p>
              <h2 className="text-3xl font-semibold mb-6 leading-snug">
                SketchUp to leasing-ready visual in under 20 minutes.
              </h2>
              <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                The role asks for someone who can use in-house AI tools to rapidly produce creative
                visualisations and leasing presentations, and self-produce 3D modelling. That is
                precisely how I work.
              </p>
              <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                I use SketchUp as my primary massing and concept modelling tool, connected to an
                AI-assisted pipeline that takes a spatial layout and returns a polished, leasing-quality
                render - without a dedicated visualiser in the loop. The result is fast enough to use
                in a live design meeting and good enough to go into a leasing deck.
              </p>
              <p className="text-zinc-400 text-[15px] leading-relaxed">
                Combined with Revit for detailed technical delivery, this gives me a full range from
                early concept through to construction-ready package - in-house, under my own control,
                at the speed a leasing-driven environment demands.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  heading: "Rapid concept massing",
                  body: "SketchUp for quick spatial layouts, unit proportions and facade studies. Fast enough to iterate live with a leasing team or brand.",
                },
                {
                  heading: "AI render pipeline",
                  body: "AI-assisted rendering from SketchUp geometry produces leasing-quality visuals without a visualiser. Style-controllable, brand-adjustable, turnaround measured in minutes not days.",
                },
                {
                  heading: "Leasing presentation output",
                  body: "Visuals go straight into leasing decks and brand outreach materials. No handoff delay, no external agency, no version control issues across teams.",
                },
                {
                  heading: "Revit for delivery",
                  body: "When a concept moves forward, the full detailed design is produced in Revit with complete BIM coordination - the same package that passes landlord and building control approval.",
                },
              ].map((item) => (
                <div
                  key={item.heading}
                  className="bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                >
                  <p className="font-semibold text-sm mb-1">{item.heading}</p>
                  <p className="text-zinc-400 text-sm leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* TOOLING STRIP                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-16 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-6">
            Tooling
          </p>
          <div className="flex flex-wrap gap-3">
            {tooling.map((tool) => (
              <span
                key={tool}
                className="text-sm font-medium px-4 py-2 bg-zinc-900 border border-zinc-700 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CONTACT                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="px-6 py-24 border-t border-zinc-800">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
            Contact
          </p>
          <h2 className="text-3xl font-semibold mb-4">Let's talk about the role.</h2>
          <p className="text-zinc-400 mb-10 max-w-xl leading-relaxed">
            I would welcome a conversation about the Lead Retail Design Manager position and how my
            background aligns with what Westfield is building.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="mailto:billamgeorge@gmail.com"
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-600 transition group"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wide">Email</p>
                <p className="text-white text-sm font-medium group-hover:text-zinc-300 transition">
                  billamgeorge@gmail.com
                </p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/george-billam-65b4bb48/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 rounded-xl px-6 py-5 hover:border-zinc-600 transition group"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <div>
                <p className="text-xs text-zinc-500 mb-0.5 uppercase tracking-wide">LinkedIn</p>
                <p className="text-white text-sm font-medium group-hover:text-zinc-300 transition">
                  Connect on LinkedIn
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FOOTER                                                              */}
      {/* ------------------------------------------------------------------ */}
      <footer className="border-t border-zinc-800 px-6 py-8">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; 2025 George Billam. This page is a tailored application for the URW Lead Retail Design Manager role.
          </p>
          <a
            href="/"
            className="text-sm text-zinc-500 hover:text-white transition"
          >
            Main site
          </a>
        </div>
      </footer>
    </main>
  );
}
