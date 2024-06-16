import { clientWordType } from 'app/features/lesson/pages/Lesson/types';
import { selectRandomElements } from 'app/features/lesson/pages/Lesson/utils/selectRandomElements';

export const mixSentences = (word: clientWordType) => {
  const { example, meaning } = word;
  const exampleWords = example.split(' ').map((text, index) => ({ id: `example_${index}`, text }));
  const meaningWords = meaning.split(' ').map((text, index) => ({ id: `meaning_${index}`, text }));
  const randomMeaningWords = selectRandomElements({ array: meaningWords, count: 2 });
  const combinedWords = [...exampleWords, ...randomMeaningWords];
  combinedWords.sort(() => Math.random() - 0.5);
  return combinedWords;
};
