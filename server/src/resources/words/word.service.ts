import * as wordRepo from "./word.db.repository";

const getAll = async (conditions: { group: number; page: number }) =>
  wordRepo.getAll(conditions);

const get = async (wordId: string) => {
  const word = await wordRepo.get(wordId);
  return word;
};

export { getAll, get };
