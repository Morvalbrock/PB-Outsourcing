"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const STAGGER_STEP_MS = 90;
const THRESHOLD = 0.12;
const ROOT_MARGIN = "0px 0px -6% 0px";

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

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          if (el.hasAttribute("data-reveal-stagger")) {
            applyStagger(el);
          }
          el.removeAttribute("data-reveal-pending");
          observer.unobserve(el);
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
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);

  return null;
}
