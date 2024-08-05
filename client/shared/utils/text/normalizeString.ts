export const normalizeString = (str: string) => {
  const noPunctuation = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
  const normalized = noPunctuation.replace(/\s{2,}/g, ' ').trim();
  return normalized.toLowerCase();
};
