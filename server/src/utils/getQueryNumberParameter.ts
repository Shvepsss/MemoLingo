export default (param: any, defaultValue: number): number => {
  if (typeof param === "string") {
    return parseInt(param, 10);
  }

  return defaultValue;
};
