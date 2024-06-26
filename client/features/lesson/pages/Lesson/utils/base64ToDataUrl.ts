export const base64ToDataURL = (base64String: string, contentType: string) => {
  return `data:${contentType};base64,${base64String}`;
};
