"use client"

import { useState } from 'react';
import ClickSpark from "./ClickSpark";
import LoadingScreen from './LoadingScreen';

const ClientRootWrapper = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <>
      <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      <div style={{ visibility: isLoading ? 'hidden' : 'visible' }}>
        <ClickSpark
          sparkColor="#6366f1"
          sparkSize={10}
          sparkRadius={15}
          sparkCount={8}
          duration={400}
          extraScale={1.0}
        >
          {children}
        </ClickSpark>
      </div>
    </>
  );
};

export default ClientRootWrapper; 