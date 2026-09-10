export default function GridBackdrop({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const dot = variant === "dark" ? "rgba(255,255,255,0.15)" : "rgba(10,10,10,0.12)";

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
      style={{
        backgroundImage: `radial-gradient(circle, ${dot} 1px, transparent 1px)`,
        backgroundSize: "28px 28px",
      }}
    />
  );
}
