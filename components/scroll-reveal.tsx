"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STAGGER_STEP_MS = 90;
const THRESHOLD = 0.15;
const ROOT_MARGIN = "0px 0px -8% 0px";

function applyStagger(container: HTMLElement) {
  const step = Number(container.dataset.revealStep ?? STAGGER_STEP_MS);
  Array.from(container.children).forEach((child, i) => {
    if (child instanceof HTMLElement) {
      child.style.transitionDelay = `${i * step}ms`;
    }
  });
}

export function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-reveal='in'])");

    if (prefersReduced) {
      targets.forEach((el) => el.setAttribute("data-reveal", "in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-reveal-stagger")) {
            applyStagger(el);
          }
          el.setAttribute("data-reveal", "in");
          observer.unobserve(el);
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
