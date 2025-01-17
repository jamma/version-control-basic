import React, { useEffect, useRef } from 'react';
import p5 from 'p5';

interface P5SketchProps {
  sketch: (p: p5) => void;
}

const P5Sketch: React.FC<P5SketchProps> = ({ sketch }) => {
  const sketchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sketchRef.current) {
      // Initialize p5.js sketch
      new p5(sketch, sketchRef.current);
    }

    // Cleanup on unmount
    return () => {
      if (sketchRef.current) {
        sketchRef.current.innerHTML = ''; // Clear the sketch
      }
    };
  }, [sketch]);

  return <div ref={sketchRef}></div>;
};

export default P5Sketch;