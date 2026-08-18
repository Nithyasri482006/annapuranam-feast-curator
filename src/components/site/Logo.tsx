import { cn } from "@/lib/utils";

/** Minimal kalash-inspired mark. */
export function KalashMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      aria-hidden="true"
      className={cn("h-7 w-7", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 3.5c1.6 1.6 2.4 2.9 2.4 4 0 1.2-1 2-2.4 2s-2.4-.8-2.4-2c0-1.1.8-2.4 2.4-4Z" />
      <path d="M10 11h12" />
      <path d="M11.4 11c-.4 1.3-1.9 1.9-3.4 2.6 2.2 1 3.2 3.1 3.2 5.5 0 3.6-2.4 5-2.4 7.4 0 1.4 1.3 2.5 3.2 2.5h8c1.9 0 3.2-1.1 3.2-2.5 0-2.4-2.4-3.8-2.4-7.4 0-2.4 1-4.5 3.2-5.5-1.5-.7-3-1.3-3.4-2.6" />
      <path d="M12.6 21.5h6.8" />
    </svg>
  );
}

export function Wordmark({
  className,
  tone = "default",
}: {
  className?: string;
  tone?: "default" | "inverse";
}) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <KalashMark className={tone === "inverse" ? "text-gold" : "text-primary"} />
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-lg font-semibold tracking-tight sm:text-xl",
            tone === "inverse" ? "text-primary-foreground" : "text-primary",
          )}
        >
          Annapaathiram
        </span>
        <span className="eyebrow block text-[0.58rem] text-gold">Catering</span>
      </span>
    </span>
  );
}
