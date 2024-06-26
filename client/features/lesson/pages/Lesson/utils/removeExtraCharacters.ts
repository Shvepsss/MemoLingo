import { ClientWordType } from '../types';

export type removeExtraCharactersProps = {
  object: ClientWordType;
  properties: Array<keyof ClientWordType>;
};

export const removeExtraCharacters = ({ object, properties }: removeExtraCharactersProps) => {
  const cleanObject: Partial<ClientWordType> = { ...object };
  properties.forEach(prop => {
    if (object[prop]) {
      cleanObject[prop] = object[prop].replace(/<[^>]*>/g, '');
    }
  });
  return cleanObject as ClientWordType;
};
