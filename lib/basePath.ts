export const BASE_PATH = "/agri-challenge-website";
export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}