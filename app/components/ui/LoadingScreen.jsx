"use client"

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  
  const loadingMessages = [
    "Iniciando...",
    "Carregando recursos...",
    "Preparando elementos...",
    "Quase pronto...",
    "Finalizando..."
  ];

  useEffect(() => {
    // Simulate loading progress
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(prev => {
          const newProgress = prev + (100 - prev) * 0.08;
          const limitedProgress = Math.min(newProgress, 99.5);
          
          // Update message at specific progress points
          if (limitedProgress >= 20 && limitedProgress < 40 && messageIndex < 1) {
            setMessageIndex(1);
          } else if (limitedProgress >= 40 && limitedProgress < 60 && messageIndex < 2) {
            setMessageIndex(2);
          } else if (limitedProgress >= 60 && limitedProgress < 80 && messageIndex < 3) {
            setMessageIndex(3);
          } else if (limitedProgress >= 80 && messageIndex < 4) {
            setMessageIndex(4);
          }
          
          return limitedProgress;
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [progress, messageIndex]);

  useEffect(() => {
    // Check if all resources are loaded
    if (document.readyState === 'complete') {
      setProgress(100);
      setMessageIndex(4); // Ensure final message is shown
      
      setTimeout(() => {
        setIsComplete(true);
        if (onLoadingComplete) onLoadingComplete();
      }, 1000);
    } else {
      const handleLoad = () => {
        setProgress(100);
        setMessageIndex(4); // Ensure final message is shown
        
        setTimeout(() => {
          setIsComplete(true);
          if (onLoadingComplete) onLoadingComplete();
        }, 1000);
      };

      window.addEventListener('load', handleLoad);
      
      return () => {
        window.removeEventListener('load', handleLoad);
      };
    }
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
          }}
        >
          <div className="w-full max-w-md relative">
            {/* Logo or Initial Animation */}
            <motion.div 
              className="mb-12 md:mb-16 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-block relative">
                <span className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 bg-size-200 animate-gradient">
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
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ type: "spring", stiffness: 50 }}
                style={{ maxWidth: "100%" }}
              />
            </div>
            
            {/* Progress Text */}
            <motion.div 
              className="mt-4 text-gray-400 text-xs sm:text-sm flex justify-between items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="h-5">{loadingMessages[messageIndex]}</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </motion.div>

            {/* Extra message that appears when loading is nearly complete */}
            <motion.div
              className="mt-8 text-center"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: progress > 90 ? 1 : 0,
                y: progress > 90 ? 0 : 10 
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-gray-500 text-xs sm:text-sm italic">Preparando sua experiência...</p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen; 