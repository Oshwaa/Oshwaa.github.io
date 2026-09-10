import { certifications, skills } from "@/lib/data";
import CountUp from "@/components/CountUp";

const YEARS_EXPERIENCE = 2;

export default function Stats() {
  const languages = skills.find((group) => group.category === "Languages")?.items.length ?? 0;

  const stats = [
    { value: YEARS_EXPERIENCE, suffix: "+", label: "Years of Experience" },
    { value: languages, suffix: "", label: "Languages & Frameworks" },
    { value: certifications.length, suffix: "", label: "Certifications" },
  ];

  return (
    <div className="mx-auto grid max-w-md grid-cols-3 gap-6 sm:gap-10">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <CountUp value={stat.value} suffix={stat.suffix} />
          <p className="mt-2 text-xs font-light tracking-wide text-neutral-400 uppercase">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
