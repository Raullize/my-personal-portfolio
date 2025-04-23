"use client"

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [hasCompleted, setHasCompleted] = useState(false);
  const timeRef = useRef(null);
  const requestRef = useRef(null);
  const completionHandled = useRef(false);

  useEffect(() => {
    if (!timeRef.current) {
      timeRef.current = Date.now();
      const minTime = 1500;
      
      const updateProgress = () => {
        const elapsedTime = Date.now() - timeRef.current;
        const newProgress = Math.min((elapsedTime / minTime) * 100, 100);
        
        setProgress(newProgress);

        if (newProgress < 100) {
          requestRef.current = requestAnimationFrame(updateProgress);
        } else if (!completionHandled.current) {
          completionHandled.current = true;
          setHasCompleted(true);
          setTimeout(() => {
            onLoadingComplete();
          }, 500);
        }
      };

      requestRef.current = requestAnimationFrame(updateProgress);
    }

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden"
      style={{
        opacity: hasCompleted ? 0 : 1,
        pointerEvents: hasCompleted ? 'none' : 'auto',
        transition: 'opacity 0.8s ease'
      }}
    >
      <div className="w-full max-w-md relative">
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
        
        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-gradient-to-r from-primary-500 to-accent-500"
            style={{ width: `${Math.min(progress, 100)}%`, transition: 'width 0.2s ease-out' }}
          />
        </div>
        
        <div className="mt-4 text-gray-400 text-xs sm:text-sm flex justify-between items-center">
          <span className="h-5">Carregando...</span>
          <span className="font-medium">{Math.round(progress)}%</span>
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen; 