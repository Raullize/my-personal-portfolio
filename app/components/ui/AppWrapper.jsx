"use client"

import { useState } from 'react';
import LoadingScreen from './LoadingScreen';

const AppWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        {children}
      </div>
    </>
  );
};

export default AppWrapper; 