"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const STAGGER_STEP_MS = 90;
const THRESHOLD = 0.12;
const ROOT_MARGIN = "0px 0px -6% 0px";
const DEFER_MS = 120;

function applyStagger(container: HTMLElement) {
  const step = Number(container.dataset.revealStep ?? STAGGER_STEP_MS);
  Array.from(container.children).forEach((child, i) => {
    if (child instanceof HTMLElement) {
      child.style.transitionDelay = `${i * step}ms`;
    }
  });
}

function isBelowFold(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top >= window.innerHeight * 0.92;
}

export function ScrollReveal() {
  const pathname = usePathname();
  const [hydrated, setHydrated] = useState(false);

  // First render after mount: flip the flag. Because this runs AFTER the initial
  // commit, the next render is guaranteed to be post-hydration — the DOM-mutating
  // effect below only runs on that second render cycle.
  useEffect(() => {
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let observer: IntersectionObserver | null = null;

    // Extra defer so streaming-hydrated client components finish reconciling
    // before we touch their DOM. 120ms is imperceptible for below-fold elements.
    const timer = window.setTimeout(() => {
      const targets = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]")
      );

      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            if (el.hasAttribute("data-reveal-stagger")) {
              applyStagger(el);
            }
            el.removeAttribute("data-reveal-pending");
            observer?.unobserve(el);
          }
        },
        { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
      );

      targets.forEach((el) => {
        if (isBelowFold(el)) {
          el.setAttribute("data-reveal-pending", "");
          if (el.hasAttribute("data-reveal-stagger")) {
            applyStagger(el);
          }
          observer!.observe(el);
        }
      });
    }, DEFER_MS);

    return () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
  }, [hydrated, pathname]);

  return null;
}
