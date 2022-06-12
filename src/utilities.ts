export const isObject = (o: any): boolean => {
  return o === Object(o) && !Array.isArray(o) && typeof o !== "function";
};

export const mul = (a: number, b: number): number => {
  return a * b;
};
