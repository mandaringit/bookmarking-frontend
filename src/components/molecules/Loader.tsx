import { useEffect, useRef } from "react";

interface LoaderProps {
  loaderCallback: IntersectionObserverCallback;
}

const Loader = ({ loaderCallback }: LoaderProps) => {
  const dom = useRef<HTMLDivElement>(null);

  // const handleScroll: IntersectionObserverCallback = useCallback(([enrty]) => {
  //   if (enrty.isIntersecting) {
  //     console.log(dom);
  //   }
  // },[]);

  useEffect(() => {
    let observer: IntersectionObserver;
    const { current } = dom;
    if (current) {
      observer = new IntersectionObserver(loaderCallback, {
        root: null,
        threshold: 0.7,
      });
      observer.observe(current);
    }

    return () => observer && observer.disconnect();
  }, [loaderCallback]);

  return <div ref={dom} />;
};

export default Loader;
