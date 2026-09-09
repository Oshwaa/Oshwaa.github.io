import type { ReactNode } from "react";

export default function TerminalCard({
  title,
  variant = "dark",
  children,
}: {
  title: string;
  variant?: "dark" | "light";
  children: ReactNode;
}) {
  const isDark = variant === "dark";
  const muted = isDark ? "text-neutral-500" : "text-neutral-400";

  return (
    <div
      className={`w-full rounded-lg border font-mono shadow-2xl backdrop-blur-sm ${
        isDark
          ? "border-white/10 bg-white/[0.03] shadow-black/40"
          : "border-neutral-200 bg-white shadow-neutral-200/50"
      }`}
    >
      <div
        className={`flex items-center gap-2 border-b px-4 py-2.5 ${
          isDark ? "border-white/10" : "border-neutral-200"
        }`}
      >
        <span className={`text-xs ${muted}`}>&gt;_</span>
        <span className={`text-xs ${muted}`}>{title}</span>
        <div className={`ml-auto flex items-center gap-3 ${muted}`}>
          <span className="block h-px w-2.5 bg-current" />
          <span className="block h-2 w-2.5 border border-current" />
          <span className="text-xs leading-none">✕</span>
        </div>
      </div>
      <div className="space-y-4 p-5 text-sm leading-relaxed">{children}</div>
    </div>
  );
}
