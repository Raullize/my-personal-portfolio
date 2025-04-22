"use client";

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const FadeIn = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.5, 
  className = '',
  distance = 50,
  once = true,
  threshold = 0.1,
  forceVisible = false
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, threshold });
  const [shouldRender, setShouldRender] = useState(forceVisible);
  
  // Força a visibilidade em telas pequenas ou quando explicitamente solicitado
  useEffect(() => {
    // Verifica se é mobile na primeira renderização
    const isMobile = window.innerWidth < 768;
    if (isMobile || forceVisible) {
      setShouldRender(true);
    } else {
      setShouldRender(isInView);
    }
  }, [isInView, forceVisible]);
  
  // Direções possíveis de entrada
  const getDirection = () => {
    switch(direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      case 'none':
        return {};
      default:
        return { y: distance };
    }
  };
  
  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0,
        ...getDirection()
      }}
      animate={shouldRender ? {
        opacity: 1, 
        y: 0, 
        x: 0
      } : {}}
      transition={{
        duration: duration,
        delay: delay,
        ease: 'easeOut'
      }}
      className={className}
      style={{ 
        display: 'block',
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 