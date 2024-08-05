import React from 'react';

import { selectRandomElements } from 'app/features/lesson/pages/Lesson/utils/selectRandomElements';
import { TwoColumnLayout } from 'app/shared/components/layout/TwoColumnLayout';

import { PairColumn } from '../components/PairColumn';
import { PairStatus } from '../constants';
import { MatchingPairsProps, SelectionTypes } from '../types';

export const MatchingPairs = ({ data, handleChoice }: MatchingPairsProps) => {
  const [mixedData, setMixedData] = React.useState(selectRandomElements({ array: data, count: 5 }));
  const [wordsState, setWordsState] = React.useState<Record<string, PairStatus>>({});
  const [activeWords, setActiveWords] = React.useState({
    [SelectionTypes.original]: '',
    [SelectionTypes.translation]: '',
  });

  const cleanSelection = React.useCallback(() => {
    setWordsState(_wordsState => {
      const previousWords = Object.entries(_wordsState).map(([key, value]) => {
        return [key, value === PairStatus.correct ? value : PairStatus.pending];
      });
      return Object.fromEntries(previousWords);
    });
  }, []);

  const handlePairSelection = React.useCallback(
    (item: { word: string; pair: string }, type: SelectionTypes) => {
      const { word, pair } = item;
      setActiveWords(_words => {
        const pairWordType =
          type === SelectionTypes.original ? SelectionTypes.translation : SelectionTypes.original;

        const selectedPair = _words[pairWordType];

        if (selectedPair) {
          const status = pair === selectedPair ? PairStatus.correct : PairStatus.incorrect;

          setWordsState(_wordsState => {
            const previousWords = Object.entries(_wordsState).map(([key, value]) => {
              return [key, value === PairStatus.correct ? value : PairStatus.pending];
            });
            return {
              ...Object.fromEntries(previousWords),
              [word]: status,
              [selectedPair]: status,
            };
          });
          handleChoice({ word, status: status === PairStatus.correct ? 'correct' : 'mistake' });

          return {
            ..._words,
            [type]: '',
            [pairWordType]: '',
          };
        }

        cleanSelection();

        return { ..._words, [type]: word };
      });
    },
    [cleanSelection, handleChoice],
  );
  const getColumnItems = React.useCallback(
    (words: string[], type: SelectionTypes) => {
      return words.map(word => {
        const pair =
          type === SelectionTypes.original
            ? data.find(item => item.original === word)?.translation
            : data.find(item => item.translation === word)?.original;

        return {
          word,
          pair: pair || '',
          status: wordsState[word],
          isSelected: activeWords[type] === word,
        };
      });
    },
    [activeWords, data, wordsState],
  );

  const originalItems = React.useMemo(
    () =>
      getColumnItems(
        data.map(item => item.original),
        SelectionTypes.original,
      ),
    [data, getColumnItems],
  );
  const translationItems = React.useMemo(
    () =>
      getColumnItems(
        mixedData.map(item => item.translation),
        SelectionTypes.translation,
      ),
    [getColumnItems, mixedData],
  );

  const onOriginalSelection = React.useCallback(
    (item: { word: string; pair: string }) => {
      handlePairSelection(item, SelectionTypes.original);
    },
    [handlePairSelection],
  );
  const onTranslationSelection = React.useCallback(
    (item: { word: string; pair: string }) => {
      handlePairSelection(item, SelectionTypes.translation);
    },
    [handlePairSelection],
  );

  React.useEffect(() => {
    setMixedData(selectRandomElements({ array: data, count: 5 }));
  }, [data]);

  return (
    <TwoColumnLayout
      column1={<PairColumn data={originalItems} onPairSelection={onOriginalSelection} />}
      column2={<PairColumn data={translationItems} onPairSelection={onTranslationSelection} />}
    />
  );
};
