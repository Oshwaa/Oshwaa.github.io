import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-neutral-950 px-6 py-16 text-center text-white">
      <p className="text-xs font-medium tracking-[0.25em] text-neutral-500 uppercase">04 · Get in touch</p>
      <a
        href={`mailto:${personal.email}`}
        className="mt-3 block text-lg font-light hover:underline"
      >
        {personal.email}
      </a>
      <p className="mt-1 text-sm font-light text-neutral-500">
        {personal.phone} · {personal.location}
      </p>

      <div className="mt-6 flex justify-center gap-6 text-sm font-light text-neutral-300">
        <a href={personal.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
          LinkedIn
        </a>
        <a href={personal.github} target="_blank" rel="noreferrer" className="hover:text-white">
          GitHub
        </a>
      </div>

      <p className="mt-10 text-xs font-light text-neutral-600">
        © {new Date().getFullYear()} {personal.name}
      </p>
    </footer>
  );
}
