import { certifications, skills } from "@/lib/data";

const YEARS_EXPERIENCE = 2;

export default function Stats() {
  const languages = skills.find((group) => group.category === "Languages")?.items.length ?? 0;

  const stats = [
    { value: `${YEARS_EXPERIENCE}+`, label: "Years of Experience" },
    { value: `${languages}`, label: "Languages & Frameworks" },
    { value: `${certifications.length}`, label: "Certifications" },
  ];

  return (
    <section className="border-t border-white/10 bg-neutral-950 px-6 py-14 text-white">
      <div className="mx-auto grid max-w-md grid-cols-3 gap-y-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-extralight tracking-tight sm:text-5xl">{stat.value}</p>
            <p className="mt-2 text-xs font-light tracking-wide text-neutral-400 uppercase">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
