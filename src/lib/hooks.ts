import { useEffect, useState } from "react";

export function useDarkmode() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
        setIsDark(true);
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        setIsDark(false);
      }
    };

    checkDarkMode();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', checkDarkMode);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', checkDarkMode);
    };
  }, []);
  return isDark;
}