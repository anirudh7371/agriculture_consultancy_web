import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to elements with
 * .fade-up, .fade-in, .scale-in classes.
 * Adds 'visible' class when they enter the viewport.
 */
const useScrollReveal = () => {
  useEffect(() => {
    if (
      typeof document === 'undefined'
      || typeof IntersectionObserver === 'undefined'
      || typeof MutationObserver === 'undefined'
    ) {
      return undefined;
    }

    const selectors = '.fade-up, .fade-in, .scale-in';

    const observe = (root) => {
      const elements = root.querySelectorAll(selectors);
      elements.forEach((el) => observer.observe(el));
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observe(document);

    // Watch for dynamically added content
    const mutationObs = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            if (node.matches && node.matches(selectors)) observer.observe(node);
            observe(node);
          }
        });
      });
    });

    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObs.disconnect();
    };
  }, []);
};

export default useScrollReveal;
