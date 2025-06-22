export function generateId(): string {
  return Math.random().toString(30).substring(2, 10);
}
