import { MutableRefObject, useEffect, useState } from "react";

function useOnScreen(ref: MutableRefObject<HTMLElement | null>, rootMargin = '0px') {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = ref?.current;

    if (currentElement) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        })
      },
      {
        rootMargin
      });
      if (currentElement) {
        observer.observe(currentElement);
      }
  
      return () => {
        observer.unobserve(currentElement);
      }
    }
  }, [ref, rootMargin]);

  return isVisible;
}

export default useOnScreen;