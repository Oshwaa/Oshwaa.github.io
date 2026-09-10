import Link from "next/link";
import GridBackdrop from "@/components/GridBackdrop";
import TerminalCard from "@/components/TerminalCard";
import InteractiveTerminal from "@/components/InteractiveTerminal";

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 py-24 text-center text-white">
      <GridBackdrop />

      <div className="relative w-full max-w-lg">
        <p className="mb-4 text-xs font-medium tracking-[0.3em] text-neutral-400 uppercase">
          Error 404
        </p>
        <h1 className="text-4xl font-extralight tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mt-4 text-sm font-light text-neutral-400">
          Whatever you were looking for isn&apos;t here. It happens.
        </p>

        <div className="mt-10 text-left">
          <TerminalCard title="ivan@portfolio: ~404">
            <div>
              <span className="text-neutral-500">$</span>{" "}
              <span className="text-white">cd {"/this-page"}</span>
              <p className="mt-1 text-neutral-300">
                bash: cd: {"/this-page"}: No such file or directory
              </p>
            </div>

            <div className="border-t border-white/10 pt-4">
              <InteractiveTerminal
                initialLines={["Try 'home' to get back, or 'help' for other commands."]}
              />
            </div>
          </TerminalCard>
        </div>

        <Link
          href="/"
          className="mt-8 inline-block rounded-md border border-white/80 px-8 py-3 text-sm font-light tracking-wide transition hover:bg-white hover:text-neutral-950"
        >
          Take me home
        </Link>
      </div>
    </section>
  );
}
