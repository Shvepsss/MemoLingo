export const mixArray = <T extends any[]>(array: T): T => {
  return array.sort(() => Math.random() - 0.5);
};
