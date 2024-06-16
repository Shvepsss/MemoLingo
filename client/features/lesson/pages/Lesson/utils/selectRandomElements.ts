type RandomSelectProps = {
  array: any[];
  count: number;
};

export const selectRandomElements = ({ array, count }: RandomSelectProps) => {
  const arrayCopy = [...array].reverse();
  arrayCopy.sort(() => Math.random() - 0.5);

  return arrayCopy.slice(0, count);
};
