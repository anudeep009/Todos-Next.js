import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges multiple class names into a single string with Tailwind merging.
 * @param inputs Class values to merge.
 * @returns A single string with merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Debounces a function, ensuring it is only called once within a specified delay.
 * @param func The function to debounce.
 * @param delay The delay in milliseconds.
 * @returns A debounced version of the input function.
 */
export function debounce<T extends (...args: any[]) => void>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
}

/**
 * A utility to format dates to a readable string.
 * @param date A date object or string.
 * @returns A formatted date string.
 */
export function formatDate(date: string | Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return new Date(date).toLocaleDateString(undefined, options);
}
