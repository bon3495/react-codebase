import { type StateCreator } from 'zustand';

import { ThemeMode } from '@/types/global-types';

export interface DarkModeState {
  isDark: ThemeMode;
  toggleTheme: (mode: ThemeMode) => void;
}

export interface Authentication {
  token: string;
  getToken: (token: string) => void;
}

export interface StoreTypes extends DarkModeState, Authentication {}

export type MiddleStateCreator<T> = StateCreator<
  StoreTypes,
  [['zustand/immer', never], ['zustand/devtools', never]],
  [],
  T
>;
