"use client";

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const FadeIn = ({ 
  children, 
  direction = 'up', 
  delay = 0, 
  duration = 0.5, 
  className = '',
  distance = 50,
  once = true 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  
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
      animate={isInView ? {
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
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 