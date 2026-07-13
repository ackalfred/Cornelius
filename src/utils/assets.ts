/**
 * Resolves a public asset path using Vite's BASE_URL.
 * Works both locally and on GitHub Pages.
 * Usage: asset('logo.jpg') → '/Cornelius/logo.jpg' (production) or '/logo.jpg' (dev without base)
 */
export const asset = (path: string): string => {
  const base = import.meta.env.BASE_URL;
  // Remove leading slash from path if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};
