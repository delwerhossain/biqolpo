import { Quote } from "lucide-react";

export function PullQuote() {
  return (
    <section className="bg-primary-tint py-14 md:py-20">
      <div className="mx-auto max-w-[820px] px-5 md:px-10 text-center">
        <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-surface text-primary-dark border border-primary/30 mb-5">
          <Quote size={18} strokeWidth={2.2} />
        </span>
        <blockquote className="font-display font-light leading-[1.2] tracking-[-0.015em] text-[1.5rem] md:text-[2.2rem] text-text-deep">
          Not every product needs a{" "}
          <span className="scribble-v3 italic font-medium text-primary-dark">
            better
          </span>{" "}
          version. But yours{" "}
          <em className="italic text-primary-dark">might.</em>
        </blockquote>
        <div className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2">
          Editor's note · Biqolpo
        </div>
      </div>
    </section>
  );
}
