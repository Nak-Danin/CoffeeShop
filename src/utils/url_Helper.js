export function sanitizeForUrl(str) {
  return str.replace(/[ ?=+]+/g, "-");
}
