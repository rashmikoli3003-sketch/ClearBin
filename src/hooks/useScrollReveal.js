import { useEffect } from 'react';

/**
 * Custom hook to activate IntersectionObserver for elements with `.reveal-on-scroll` class
 */
export function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-visible)');
      elements.forEach((el) => observer.observe(el));
    };

    observeElements();
    const timer = setTimeout(observeElements, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);
}
