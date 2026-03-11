'use client';

import { useEffect } from 'react';

export function ScrollAnimator() {
  useEffect(() => {
    document.body.classList.add('has-animations');

    const onScroll = () => {
      document.body.dataset.scrolled = window.scrollY > 12 ? 'true' : 'false';
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => observer.observe(el));

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      document.body.classList.remove('has-animations');
    };
  }, []);

  return null;
}
