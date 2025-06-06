import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to merge Tailwind CSS classes
 *
 * @export
 * @param {...ClassValue[]} inputs
 *
 * @return {*}
 */
export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
