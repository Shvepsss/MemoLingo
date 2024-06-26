export type ServerWordType = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
};
export type ClientWordType = {
  id: string;
  image: string;
  audio: string;
  original: string;
  translation: string;
  example: string;
  meaning: string;
  audioExample: string;
  audioMeaning: string;
  exampleTranslation: string;
  meaningTransaltion: string;
};

export type ImageRequestProps = {
  fileEndpoint: string;
};
