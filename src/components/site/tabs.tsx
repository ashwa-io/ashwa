"use client";

import { useId, useState, type KeyboardEvent, type ReactNode } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";

/**
 * Accessible tabs. Panels are rendered on the server and passed in as nodes,
 * so switching tabs ships no extra content code to the browser.
 */
export function Tabs({
  items,
  label,
}: {
  items: { label: string; panel: ReactNode }[];
  label: string;
}) {
  const [index, setIndex] = useState(0);
  const id = useId();

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const step = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!step) return;
    e.preventDefault();
    const next = (index + step + items.length) % items.length;
    setIndex(next);
    document.getElementById(`${id}-tab-${next}`)?.focus();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={label}
        onKeyDown={onKeyDown}
        className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none]"
      >
        {items.map((item, i) => (
          <button
            key={item.label}
            id={`${id}-tab-${i}`}
            role="tab"
            type="button"
            aria-selected={i === index}
            aria-controls={`${id}-panel`}
            tabIndex={i === index ? 0 : -1}
            onClick={() => setIndex(i)}
            className={cn(
              "relative min-h-11 shrink-0 rounded-full px-5 text-[0.95rem] font-medium transition-colors",
              i === index ? "text-background" : "text-foreground hover:bg-foreground/5",
            )}
          >
            {i === index ? (
              <motion.span
                layoutId={`${id}-pill`}
                className="absolute inset-0 rounded-full bg-foreground"
                transition={{ type: "spring", stiffness: 380, damping: 34 }}
              />
            ) : null}
            <span className="relative">{item.label}</span>
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${index}`} className="mt-8">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {items[index].panel}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
