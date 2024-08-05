import RNFS from 'react-native-fs';

export const saveBase64AsFile = async (name: string, base64: string): Promise<string> => {
  const path = `${RNFS.DocumentDirectoryPath}/${name}.mp3`;
  await RNFS.writeFile(path, base64, 'base64');
  return path;
};
