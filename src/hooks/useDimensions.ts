import { useState, useEffect, useRef } from "react";

export function useDimensions<T extends HTMLElement>() {
  const elementRef = useRef<T>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!elementRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      const { width, height } = elementRef.current!.getBoundingClientRect();
      setDimensions({ width, height });
    });

    resizeObserver.observe(elementRef.current);

    return () => resizeObserver.disconnect();
  }, []);

  return { ref: elementRef, dimensions };
}
