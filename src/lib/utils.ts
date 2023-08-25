import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ** Checks if an object is empty (returns boolean)
export const isObjEmpty = (obj: { [key: string]: unknown }) =>
  Object.keys(obj).length === 0;
