import { certifications, education, experience, personal, skills } from "@/lib/data";
import TerminalCard from "@/components/TerminalCard";

const quickFacts = [
  { key: "location", value: personal.location },
  { key: "focus", value: "Backend-heavy full-stack" },
  { key: "education", value: `${education.degree}, ${education.school}` },
  { key: "currently", value: `${experience[0].role} @ ${experience[0].company}` },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-center text-xs font-medium tracking-[0.25em] text-neutral-400 uppercase">
        01 · About
      </p>
      <h2 className="mt-3 text-center text-3xl font-extralight tracking-tight text-neutral-900">
        About Me
      </h2>

      <div className="mt-14 grid gap-10 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-3">
          <h3 className="mb-4 text-xl font-medium text-neutral-900">I&apos;m Ivan</h3>
          <p className="text-base font-light text-neutral-600">
            I&apos;m a full-stack developer based in Makati, mostly working on the backend —
            APIs, job orchestration, database design. I pick up the frontend when a project
            needs it, usually in Next.js or Vue.
          </p>
          <p className="mt-4 text-base font-light text-neutral-600">
            Recent work spans a weather-forecast backend in Python and R, a couple of
            internal systems for property management, and the backend for a hotel booking
            platform I freelanced on.
          </p>
        </div>

        <div className="lg:col-span-2">
          <TerminalCard title="about.json" variant="light">
            <pre className="whitespace-pre-wrap text-neutral-700">
              <span className="text-neutral-400">{"{"}</span>
              {"\n"}
              {quickFacts.map((fact, i) => (
                <span key={fact.key}>
                  {"  "}
                  <span className="text-neutral-900">&quot;{fact.key}&quot;</span>
                  <span className="text-neutral-400">: </span>
                  <span className="text-neutral-600">&quot;{fact.value}&quot;</span>
                  {i < quickFacts.length - 1 && <span className="text-neutral-400">,</span>}
                  {"\n"}
                </span>
              ))}
              <span className="text-neutral-400">{"}"}</span>
            </pre>
          </TerminalCard>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-xl font-medium text-neutral-900">Skills</h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group) => (
            <div key={group.category}>
              <p className="text-xs tracking-wide text-neutral-400 uppercase">{group.category}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-neutral-200 px-3 py-1 text-xs font-light text-neutral-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="mb-6 text-xl font-medium text-neutral-900">Certifications</h3>
        <div className="flex flex-wrap gap-3">
          {certifications.map((cert) => (
            <a
              key={cert.name}
              href={cert.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-neutral-200 px-4 py-2 text-sm font-light text-neutral-600 transition hover:border-neutral-400 hover:text-neutral-900"
            >
              {cert.name} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
