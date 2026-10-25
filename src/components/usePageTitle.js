import { useEffect } from 'react';

export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} | JJ's Advertising` : "JJ's Advertising";
  }, [title]);
}
