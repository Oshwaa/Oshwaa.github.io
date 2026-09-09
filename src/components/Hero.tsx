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
              className="inline-block rounded-md bg-white px-8 py-3 text-sm font-light tracking-wide text-neutral-950 transition hover:bg-neutral-200"
            >
              Download CV
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="inline-block rounded-md border border-white/80 px-8 py-3 text-sm font-light tracking-wide transition hover:bg-white hover:text-neutral-950"
            >
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
    </section>
  );
}
