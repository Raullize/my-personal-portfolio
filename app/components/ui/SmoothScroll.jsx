"use client";

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    // Função para aplicar rolagem suave a todos os links de ancoragem
    const handleSmoothScroll = () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      
      anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          
          // Se o link aponta para o topo da página
          if (targetId === '#') {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
            return;
          }
          
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    };

    // Aplicar rolagem suave quando o componente é montado
    handleSmoothScroll();
    
    // Limpar event listeners quando o componente é desmontado
    return () => {
      const anchorLinks = document.querySelectorAll('a[href^="#"]');
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleSmoothScroll);
      });
    };
  }, []);

  // Este componente não renderiza nada visualmente
  return null;
};

export default SmoothScroll; 