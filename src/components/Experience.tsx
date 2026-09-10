import { experience } from "@/lib/data";
import GridBackdrop from "@/components/GridBackdrop";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-neutral-950 px-6 py-24 text-white">
      <GridBackdrop />
      <div className="relative mx-auto max-w-4xl">
        <p className="text-center text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
          02 · Career
        </p>
        <h2 className="mt-3 text-center text-3xl font-extralight tracking-tight">Experience</h2>

        <div className="mt-16 space-y-16">
          {experience.map((job, index) => {
            const isCurrent = job.period.toLowerCase().includes("present");
            return (
            <div key={`${job.role}-${job.company}`} className="relative border-l border-white/15 pl-10">
              <div className="absolute top-0 -left-4.5 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-neutral-950">
                {isCurrent && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/10" />
                )}
                <span className="relative font-mono text-xs text-neutral-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                <h3 className="text-lg font-medium">{job.role}</h3>
                <span className="text-sm font-light text-neutral-500">{job.period}</span>
              </div>
              <p className="text-sm font-light text-neutral-400">
                {job.companyUrl ? (
                  <a
                    href={job.companyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline-offset-4 hover:text-white hover:underline"
                  >
                    {job.company} ↗
                  </a>
                ) : (
                  job.company
                )}
              </p>
              {job.note && (
                <p className="mt-1 text-sm font-light italic text-neutral-500">{job.note}</p>
              )}

              {job.stack && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs font-light text-neutral-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              <ul className="mt-4 space-y-2">
                {job.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm font-light text-neutral-300">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-neutral-500" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
