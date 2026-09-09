import Image from "next/image";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-center text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
        03 · Selected Work
      </p>
      <h2 className="mt-3 text-center text-3xl font-extralight tracking-tight text-neutral-900">
        Projects
      </h2>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => {
          const isLastOdd = projects.length % 2 !== 0 && index === projects.length - 1;

          return (
            <article
              key={project.name}
              className={`group flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-shadow hover:shadow-lg hover:shadow-neutral-200/60 ${
                isLastOdd ? "md:col-span-2 md:flex-row" : ""
              }`}
            >
              {project.image && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className={`relative block aspect-video overflow-hidden border-b border-neutral-200 bg-neutral-100 ${
                    isLastOdd ? "md:w-1/2 md:border-r md:border-b-0" : ""
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={`${project.name} screenshot`}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </a>
              )}

              {project.video && (
                <div
                  className={`aspect-video overflow-hidden border-b border-neutral-200 bg-neutral-950 ${
                    isLastOdd ? "md:w-1/2 md:border-r md:border-b-0" : ""
                  }`}
                >
                  <video
                    src={project.video}
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-full object-contain"
                  />
                </div>
              )}

              <div className={`flex flex-1 flex-col p-8 ${isLastOdd ? "md:w-1/2" : ""}`}>
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h3 className="text-lg font-medium text-neutral-900">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline underline-offset-4"
                      >
                        {project.name} ↗
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                  {project.period && (
                    <span className="text-sm font-light text-neutral-400">{project.period}</span>
                  )}
                </div>

                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-light text-neutral-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="mt-5 space-y-2">
                  {project.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-sm font-light text-neutral-600">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
