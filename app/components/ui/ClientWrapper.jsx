"use client"

import ClickSpark from "./ClickSpark";

const ClientWrapper = ({ children }) => {
  return (
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
  );
};

export default ClientWrapper; 