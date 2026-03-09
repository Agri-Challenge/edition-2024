/**
 * The basePath must match next.config.ts exactly.
 * Used for plain <img> tags and metadata URLs that Next.js
 * does NOT automatically prefix with the basePath.
 */
export const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/agri-challenge-website" : "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
