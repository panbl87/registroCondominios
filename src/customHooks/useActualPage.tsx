import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useActualPage = (mainPath: string): string => {
  const [actualPage, setActualPage] = useState<string>('');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname === '/' ? mainPath : location.pathname;
    localStorage.setItem('path', path);
    setActualPage(path);
  }, [location]);

  return actualPage;
};

export default useActualPage;
