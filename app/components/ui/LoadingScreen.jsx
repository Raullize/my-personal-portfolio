"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Simulate loading progress
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          const newProgress = prev + (100 - prev) * 0.08;
          return Math.min(newProgress, 99.5);
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [progress]);

  useEffect(() => {
    // Check if all resources are loaded
    if (document.readyState === 'complete') {
      setProgress(100);
      
      setTimeout(() => {
        setIsComplete(true);
        if (onLoadingComplete) onLoadingComplete();
      }, 1000);
    } else {
      window.addEventListener('load', () => {
        setProgress(100);
        
        setTimeout(() => {
          setIsComplete(true);
          if (onLoadingComplete) onLoadingComplete();
        }, 1000);
      });
    }

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          <div className="w-full max-w-md px-8 relative">
            {/* Logo or Initial Animation */}
            <motion.div 
              className="mb-16 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block relative">
                <span className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-size-200 animate-gradient">
                  RL
                </span>
                <motion.span 
                  className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                ></motion.span>
              </div>
            </motion.div>
            
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ type: "spring", stiffness: 50 }}
              />
            </div>
            
            {/* Progress Text */}
            <motion.div 
              className="mt-4 text-gray-400 text-sm flex justify-between items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>Carregando recursos</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 