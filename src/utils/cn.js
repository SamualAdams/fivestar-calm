/**
 * Utility function to conditionally combine class names
 * Similar to clsx but simplified for our use case
 */
export function cn(...classes) {
  return classes
    .filter(Boolean)
    .join(' ')
    .trim()
}