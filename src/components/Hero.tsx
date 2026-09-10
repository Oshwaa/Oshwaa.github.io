import { personal, skills } from "@/lib/data";
import GridBackdrop from "@/components/GridBackdrop";
import TerminalCard from "@/components/TerminalCard";
import InteractiveTerminal from "@/components/InteractiveTerminal";

const backend = skills.find((group) => group.category === "Backend")?.items ?? [];
const frontend = skills.find((group) => group.category === "Frontend")?.items ?? [];
const coreStack = [...backend, ...frontend];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-neutral-950 px-6 pt-32 pb-24 text-white"
    >
      <GridBackdrop />

      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 right-0 h-140 w-140 -translate-y-1/2 translate-x-1/4 rounded-full bg-white/6 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 left-0 h-90 w-90 -translate-x-1/2 rounded-full bg-white/3 blur-[100px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="mb-4 text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase">
            {personal.title} · {personal.subtitle}
          </p>
          <h1 className="text-5xl font-extralight tracking-tight sm:text-6xl">
            {personal.name}
          </h1>
          <p className="mt-6 max-w-md text-base font-light text-neutral-400">
            Mostly backend: APIs, databases, systems work. I do frontend too, when a project
            needs it.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={personal.cvFile}
              download
              className="inline-flex items-center gap-2 rounded-md bg-white px-8 py-3 text-sm font-light tracking-wide text-neutral-950 transition hover:bg-neutral-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 3v12" />
                <path d="M7 10l5 5 5-5" />
                <path d="M4 21h16" />
              </svg>
              Download CV
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 rounded-md border border-white/80 px-8 py-3 text-sm font-light tracking-wide transition hover:bg-white hover:text-neutral-950"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="M3 7l9 6 9-6" />
              </svg>
              Get in Touch
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-sm font-light text-neutral-400">
            <a href={personal.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-white">
              LinkedIn
            </a>
            <a href={personal.github} target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub
            </a>
            <a href="#projects" className="transition hover:text-white">
              Selected Work
            </a>
            <span>{personal.location}</span>
          </div>
        </div>

        <div className="lg:col-span-2">
          <TerminalCard title="ivan@portfolio">
            <div>
              <span className="text-neutral-500">$</span>{" "}
              <span className="text-white">whoami</span>
              <p className="mt-1 text-neutral-300">
                {personal.name}
                <br />
                {personal.title} — {personal.subtitle}
              </p>
            </div>

            <div>
              <span className="text-neutral-500">$</span>{" "}
              <span className="text-white">status</span>
              <p className="mt-1 text-neutral-300">
                <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-white align-middle" />
                Open to full-time &amp; freelance work
              </p>
            </div>

            <div>
              <span className="text-neutral-500">$</span>{" "}
              <span className="text-white">stack --core</span>
              <p className="mt-1 flex flex-wrap gap-x-2 gap-y-1 text-neutral-300">
                {coreStack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <InteractiveTerminal />
            </div>
          </TerminalCard>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About"
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-2 text-neutral-500 transition hover:text-white"
      >
        <span className="text-[10px] font-light tracking-[0.3em] uppercase">Scroll</span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-bounce"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
