import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export const AnimatedPanelContainer = ({ 
  children, 
  isVisible, 
  className 
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      if (isVisible) {
        // Trigger entrance animations
        containerRef.current.style.setProperty('--animate-entrance', '1');
      } else {
        // Trigger exit animations
        containerRef.current.style.setProperty('--animate-entrance', '0');
      }
    }
  }, [isVisible]);

  return (
    <div 
      ref={containerRef}
      className={cn(
        "overflow-hidden transition-all duration-700 ease-spring",
        isVisible 
          ? "opacity-100 max-h-[2000px] transform-gpu" 
          : "opacity-0 max-h-0 transform-gpu",
        className
      )}
      style={{
        '--animate-entrance': isVisible ? '1' : '0',
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-6">
        <div 
          className="animate-panel-entrance"
          style={{ 
            '--entrance-delay': '0.1s',
            '--entrance-direction': '-30px'
          }}
        >
          {React.Children.toArray(children)[0]}
        </div>
        <div 
          className="animate-panel-entrance"
          style={{ 
            '--entrance-delay': '0.25s',
            '--entrance-direction': '0px'
          }}
        >
          {React.Children.toArray(children)[1]}
        </div>
        <div 
          className="animate-panel-entrance"
          style={{ 
            '--entrance-delay': '0.4s',
            '--entrance-direction': '30px'
          }}
        >
          {React.Children.toArray(children)[2]}
        </div>
      </div>
    </div>
  );
};