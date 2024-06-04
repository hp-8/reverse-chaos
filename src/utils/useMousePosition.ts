import { useState, useEffect } from "react";

export const useMousePosition = (initialPosition: { x: number, y: number } = { x: 0, y: 0 }) => {
  const [mousePosition, setMousePosition] = useState(initialPosition);

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return mousePosition;
};
