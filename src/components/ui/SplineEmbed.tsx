import React from 'react';

interface SplineEmbedProps {
  className?: string;
  height?: string;
}

export const SplineEmbed: React.FC<SplineEmbedProps> = ({ 
  className = "", 
  height = "100vh" 
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height }}>
      <iframe 
        src="https://my.spline.design/particlenebula-QNOpNVeRYRfGpeCKOC3l8uMb/" 
        frameBorder="0" 
        width="100%" 
        height="100%"
        className="absolute inset-0"
        loading="lazy"
        title="Particle Nebula 3D Animation"
      />
    </div>
  );
};