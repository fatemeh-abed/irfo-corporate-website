import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — detects when an element enters the viewport and
 * returns a ref + visibility flag for triggering reveal animations.
 *
 * Uses the Intersection Observer API (no scroll event listeners).
 *
 * @param {Object} options - IntersectionObserver options (threshold, rootMargin, etc.)
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px', ...options }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
}

/**
 * useActiveSection — tracks which section is currently in view and
 * returns its id. Used by the Navbar to highlight the active nav item.
 *
 * Uses the Intersection Observer API (no scroll event listeners).
 *
 * @param {string[]} sectionIds - Array of section element ids to observe
 * @returns {string} The id of the currently active section
 */
export function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}
