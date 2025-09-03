"use client";


const GradientText = ({
  children,
  className = "",
  colors = ["#6366f1", "#a855f7", "#ec4899", "#6366f1"],
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