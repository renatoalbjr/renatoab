import { useEffect, useRef, useState } from "react";

export default function useElementOnScreen(options: IntersectionObserverInit) {
  const containerRef = useRef(null);
  const [isVisible, setVisible] = useState(false);

  const callbackFunction: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    const current = containerRef.current; //since cleanup runs after the component is unmounted

    if (current) observer.observe(current);

    //Cleanup function
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options, containerRef]);

  return [containerRef, isVisible];
}
