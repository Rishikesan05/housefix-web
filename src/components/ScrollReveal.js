"use client";
import { useEffect, useCallback } from "react";

export default function ScrollReveal() {
  const handleReveal = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );

    const elements = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right"
    );
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Initial run
    const cleanup = handleReveal();

    // Re-observe after route changes (MutationObserver watches for new DOM nodes)
    const mutationObserver = new MutationObserver(() => {
      const unrevealed = document.querySelectorAll(
        ".reveal:not(.visible), .reveal-left:not(.visible), .reveal-right:not(.visible)"
      );
      if (unrevealed.length > 0) {
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("visible");
              }
            });
          },
          { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
        );
        unrevealed.forEach((el) => io.observe(el));
      }
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (cleanup) cleanup();
      mutationObserver.disconnect();
    };
  }, [handleReveal]);

  return null;
}
