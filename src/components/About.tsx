import { certifications, education, experience, personal, skills } from "@/lib/data";
import TerminalCard from "@/components/TerminalCard";

const quickFacts = [
  { key: "location", value: personal.location },
  { key: "focus", value: "Backend-heavy full-stack" },
  { key: "education", value: `${education.degree}, ${education.school}` },
  { key: "currently", value: `${experience[0].role} @ ${experience[0].company}` },
];

function toKey(category: string) {
  const words = category.toLowerCase().match(/[a-z0-9]+/g) ?? [];
  return words.map((w, i) => (i === 0 ? w : w[0].toUpperCase() + w.slice(1))).join("");
}

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
        <TerminalCard title="skills.ts" variant="light">
          <div className="text-neutral-400">
            const <span className="text-neutral-900">skills</span> = {"{"}
          </div>
          <div className="space-y-3 pl-4">
            {skills.map((group) => (
              <div key={group.category}>
                <div className="text-neutral-500">{toKey(group.category)}: [</div>
                <div className="flex flex-wrap gap-1.5 py-2 pl-4">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded border border-neutral-200 bg-neutral-50 px-2 py-0.5 text-xs text-neutral-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="text-neutral-500">],</div>
              </div>
            ))}
          </div>
          <div className="text-neutral-400">{"}"}</div>
        </TerminalCard>
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
