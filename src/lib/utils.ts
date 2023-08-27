import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { DARK_MODE, LIGHT_MODE } from '@/constants/global';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = (obj: { [key: string]: unknown }) =>
  Object.keys(obj).length === 0;

export const getSystemMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches
    ? DARK_MODE
    : LIGHT_MODE;
