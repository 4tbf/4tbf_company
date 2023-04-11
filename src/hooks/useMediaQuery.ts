import { useEffect, useState } from 'react';

export const isClient = () => {
  return typeof window !== 'undefined' && !!window && !!window.document;
};
export const useMediaQuery = (query: any) => {
  const [matches, setMatches] = useState<any>(false);
  useEffect(() => {
    const media: any = isClient() && window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);
  return matches;
};
