"use client";

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    function smoothScrollTo(targetY, duration) {
      const startY = window.scrollY;
      const difference = targetY - startY;
      let startTime = null;

      const easeInOutQuad = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easedProgress = easeInOutQuad(progress);

        window.scrollTo(0, startY + difference * easedProgress);

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }

      requestAnimationFrame(animation);
    }
    
    const handleClick = function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      
      if (targetId === '#') {
        smoothScrollTo(0, 1000);
        return;
      }
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const distance = Math.abs(window.scrollY - targetPosition);
        const duration = Math.min(1000 + distance * 0.5, 2000);
        
        smoothScrollTo(targetPosition, duration);
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });
    
    return () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return null;
};

export default SmoothScroll; 