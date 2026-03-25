"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="font-semibold text-lg">
          George Billam
        </div>

        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#systems" className="hover:text-white">Digital Systems</a>
          <a href="#ventures" className="hover:text-white">Other Ventures</a>
        </div>

      </div>
    </nav>
  );
}
