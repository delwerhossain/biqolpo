"use client";

import { useState } from "react";
import { ArrowRight, Send, Check } from "lucide-react";

export function Submit() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [why, setWhy] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="submit" className="bg-cream py-14 md:py-20">
      <div className="mx-auto max-w-[1180px] px-5 md:px-10">
        <div className="v3-card bg-surface p-6 md:p-10 max-w-[860px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-6 md:gap-10 items-start">
            <div>
              <div className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-2 mb-2">
                Help the index grow
              </div>
              <h2 className="font-display font-light leading-[1.1] tracking-[-0.02em] text-[1.6rem] md:text-[2.1rem] text-text-deep">
                Know a{" "}
                <span className="scribble-v3 text-primary-dark italic font-medium">
                  better
                </span>{" "}
                swap?
              </h2>
              <p className="font-bn mt-3 text-[0.95rem] text-muted-2 leading-[1.6]">
                আপনার জানা ভালো বিকল্প আমাদের জানান। আমরা যাচাই করে index-এ
                যোগ করব।
              </p>

              <ul className="mt-5 space-y-2 text-[0.92rem] text-text-deep">
                <li className="flex items-center gap-2">
                  <Check size={15} strokeWidth={2.5} className="text-primary" />
                  Reviewed within a week
                </li>
                <li className="flex items-center gap-2">
                  <Check size={15} strokeWidth={2.5} className="text-primary" />
                  Credit on the listing (optional)
                </li>
                <li className="flex items-center gap-2">
                  <Check size={15} strokeWidth={2.5} className="text-primary" />
                  No affiliate links
                </li>
              </ul>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (from.trim() && to.trim()) setSent(true);
              }}
              className="space-y-3"
            >
              <div>
                <label className="block text-[0.72rem] uppercase tracking-[0.15em] text-muted-2 mb-1.5">
                  Replace
                </label>
                <input
                  type="text"
                  required
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                  placeholder="e.g. ChatGPT Plus"
                  className="v3-input !pl-4 !min-h-[48px]"
                />
              </div>
              <div>
                <label className="block text-[0.72rem] uppercase tracking-[0.15em] text-muted-2 mb-1.5">
                  With
                </label>
                <input
                  type="text"
                  required
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                  placeholder="e.g. DeepSeek"
                  className="v3-input !pl-4 !min-h-[48px]"
                />
              </div>
              <div>
                <label className="block text-[0.72rem] uppercase tracking-[0.15em] text-muted-2 mb-1.5">
                  Why is it better? (optional)
                </label>
                <textarea
                  value={why}
                  onChange={(e) => setWhy(e.target.value)}
                  placeholder="Cheaper, healthier, local, open-source..."
                  rows={3}
                  className="w-full bg-surface border border-border-soft rounded-[20px] p-3.5 text-[0.95rem] text-text-deep placeholder:text-muted-2 outline-none focus:border-primary focus:shadow-[0_0_0_4px_var(--primary-tint)] transition resize-none"
                />
              </div>
              <button type="submit" className="v3-btn w-full">
                {sent ? (
                  <>
                    <Check size={16} strokeWidth={2.5} /> Thanks. We'll review.
                  </>
                ) : (
                  <>
                    Submit alternative <Send size={15} strokeWidth={2.2} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
