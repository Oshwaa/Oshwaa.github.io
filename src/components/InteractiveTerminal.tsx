"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { personal, projects, skills } from "@/lib/data";

const backend = skills.find((group) => group.category === "Backend")?.items ?? [];
const frontend = skills.find((group) => group.category === "Frontend")?.items ?? [];
const coreStack = [...backend, ...frontend];

type Line = { type: "input" | "output"; text: string };

function buildCommands(goHome: () => void): Record<string, () => string[]> {
  return {
    help: () => ["Commands: whoami, status, stack, projects, contact, about, home, clear"],
    home: () => {
      goHome();
      return ["Heading home..."];
    },
    whoami: () => [personal.name, `${personal.title} — ${personal.subtitle}`],
    status: () => ["Open to full-time & freelance work"],
    stack: () => [coreStack.join(", ")],
    projects: () => projects.map((p) => `- ${p.name}`),
    contact: () => [personal.email, personal.linkedin, personal.github],
    about: () => [
      "Backend-focused full-stack developer based in Makati.",
      "Scroll down for the full story, or type 'contact' to reach me.",
    ],
    sudo: () => ["Nice try."],
  };
}

export default function InteractiveTerminal({
  initialLines = ["Type 'help' to see what this does."],
}: {
  initialLines?: string[];
}) {
  const [history, setHistory] = useState<Line[]>(
    initialLines.map((text) => ({ type: "output", text })),
  );
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const commands = buildCommands(() => router.push("/"));

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ block: "end" });
  }, [history]);

  function runCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (cmd === "") return;

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const next: Line[] = [...history, { type: "input", text: raw }];
    if (commands[cmd]) {
      commands[cmd]().forEach((line) => next.push({ type: "output", text: line }));
    } else {
      next.push({ type: "output", text: `command not found: ${cmd} (try 'help')` });
    }
    setHistory(next);
  }

  return (
    <div className="cursor-text" onClick={() => inputRef.current?.focus()}>
      <div className="max-h-40 space-y-1 overflow-y-auto pr-1">
        {history.map((line, i) => (
          <div key={i} className={line.type === "input" ? "text-white" : "text-neutral-400"}>
            {line.type === "input" && <span className="text-neutral-500">$ </span>}
            {line.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          runCommand(input);
          setInput("");
        }}
        className="mt-2 flex items-center gap-1"
      >
        <span className="text-neutral-500">$</span>
        <span className="whitespace-pre text-white">{input}</span>
        <span className="cursor-blink text-base leading-none font-bold text-white">_</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="sr-only"
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          aria-label="Terminal command input"
        />
      </form>
    </div>
  );
}
