"use client";


const GradientText = ({
  children,
  className = "",
  colors = ["#1d4ed8", "#3b82f6", "#22d3ee", "#1d4ed8"],
  animationSpeed = 8,
  showBorder = false,
}) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {showBorder && (
        <div 
          className="absolute inset-0 rounded-lg animate-gradient-x bg-gradient-to-r z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
            backgroundSize: '300% 100%',
            animationDuration: `${animationSpeed}s`
          }}
        />
      )}
      <div 
        className="relative z-10 bg-clip-text text-transparent animate-gradient-x"
        style={{
          backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
          backgroundSize: '300% 100%',
          animationDuration: `${animationSpeed}s`
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default GradientText;