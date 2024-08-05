import * as userWordService from "./userWord.db.repository";
import { UserWordDocumentBase } from "./userWord.model";

const getAll = async (userId: string) => userWordService.getAll(userId);

const get = async (wordId: string, userId: string) =>
  userWordService.get(wordId, userId);

const save = async (userWords: UserWordDocumentBase) =>
  userWordService.save(userWords);

const update = async (userWord: UserWordDocumentBase) =>
  userWordService.update(userWord);

const remove = async (wordId: string, userId: string) => {
  userWordService.remove(wordId, userId);
};

const checkLearnedWords = async (userId: string, wordIds: string[]) =>
  userWordService.checkLearnedWords(userId, wordIds);

export default { getAll, get, save, update, remove, checkLearnedWords };
