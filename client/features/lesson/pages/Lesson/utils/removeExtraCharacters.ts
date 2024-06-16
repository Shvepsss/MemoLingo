import { clientWordType } from '../types';

export type removeExtraCharactersProps = {
  object: clientWordType;
  properties: Array<keyof clientWordType>;
};

export const removeExtraCharacters = ({ object, properties }: removeExtraCharactersProps) => {
  const cleanObject: Partial<clientWordType> = { ...object };
  properties.forEach(prop => {
    if (object[prop]) {
      cleanObject[prop] = object[prop].replace(/<[^>]*>/g, '');
    }
  });
  return cleanObject as clientWordType;
};
