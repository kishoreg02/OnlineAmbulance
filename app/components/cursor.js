// components/Cursor.js
import { useEffect, useRef } from 'react';

const Cursor = () => {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX: x, clientY: y } = event;

      // Move the custom cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      // Update the trail position
      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-3 h-3 bg-blue-900 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out"
      ></div>
      <div
        ref={trailRef}
        className="fixed w-2 h-2 bg-blue-500 rounded-full pointer-events-none z-40 transition-transform duration-[400ms] ease-out"
      ></div>
    </>
  );
};

export default Cursor;
