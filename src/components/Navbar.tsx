"use client";

import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="mx-auto flex max-w-2xl items-center justify-between rounded-full border border-white/10 bg-neutral-950/80 px-6 py-3 text-white shadow-lg shadow-black/30 backdrop-blur-md">
        <a href="#top" className="text-sm font-light tracking-wide">
          Ivan Tomazar
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-5 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <ul className="hidden gap-7 text-sm font-light tracking-wide text-neutral-400 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 flex max-w-2xl flex-col gap-1 rounded-2xl border border-white/10 bg-neutral-950/95 px-6 py-3 text-sm font-light tracking-wide text-neutral-400 shadow-lg shadow-black/30 backdrop-blur-md md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 transition hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
