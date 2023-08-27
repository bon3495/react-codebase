import { useLayoutEffect } from 'react';

import { CURRENT_MODE, DARK_MODE, LIGHT_MODE } from '@/constants/global';
import { getSystemMode } from '@/lib/utils';
import useStore from '@/store';
import { ThemeMode } from '@/types/global-types';

const useTheme = () => {
  const [currentTheme, onSetCurrentTheme] = useStore((state) => [
    state.isDark,
    state.toggleTheme,
  ]);

  const onToggleTheme = (status?: ThemeMode) => {
    const mode = status || getSystemMode();
    onSetCurrentTheme(mode);
    const dataString = JSON.stringify({ state: { isDark: mode } });
    localStorage.setItem(CURRENT_MODE, dataString);
  };

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(currentTheme !== DARK_MODE ? DARK_MODE : LIGHT_MODE);
    root.classList.add(currentTheme);
  }, [currentTheme]);

  return {
    onToggleTheme,
    currentTheme,
  };
};

export default useTheme;
