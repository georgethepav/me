"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        <div className="font-semibold text-lg">
          George Billam
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-6 text-sm text-zinc-400">
          <a href="#projects" className="hover:text-white transition">Projects</a>
          <a href="#systems" className="hover:text-white transition">Digital Systems</a>
          <a href="#ventures" className="hover:text-white transition">Other Ventures</a>
          <a href="#work-with-me" className="hover:text-white transition">Work With Me</a>
          <a
            href="#contact"
            className="text-white border border-zinc-600 rounded-full px-4 py-1 hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-zinc-800 bg-black/95 px-6 py-4 flex flex-col gap-4 text-sm text-zinc-400">
          <a href="#projects" onClick={() => setOpen(false)} className="hover:text-white transition">Projects</a>
          <a href="#systems" onClick={() => setOpen(false)} className="hover:text-white transition">Digital Systems</a>
          <a href="#ventures" onClick={() => setOpen(false)} className="hover:text-white transition">Other Ventures</a>
          <a href="#work-with-me" onClick={() => setOpen(false)} className="hover:text-white transition">Work With Me</a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-white border border-zinc-600 rounded-full px-4 py-2 text-center hover:bg-white hover:text-black transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
