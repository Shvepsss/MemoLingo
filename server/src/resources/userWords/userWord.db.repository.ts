import UserWord from "./userWord.model";
import { UserWordDocumentBase } from "./userWord.model";
import { NOT_FOUND_ERROR, ENTITY_EXISTS } from "../../errors/appErrors";
const ENTITY_NAME = "user word";
const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;

const getAll = async (userId: string) => UserWord.find({ userId });

const get = async (wordId: string, userId: string) => {
  const userWord = await UserWord.findOne({ wordId, userId });
  if (!userWord) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { wordId, userId });
  }
  return userWord;
};

const save = async (userWord: UserWordDocumentBase) => {
  try {
    return await UserWord.create(userWord);
  } catch (err) {
    if (
      err instanceof Error &&
      "code" in err &&
      err.code === MONGO_ENTITY_EXISTS_ERROR_CODE
    ) {
      throw new ENTITY_EXISTS(`such ${ENTITY_NAME} already exists`);
    }
    throw err;
  }
};

const update = async (userWord: UserWordDocumentBase) => {
  const { wordId, userId } = userWord;
  const updatedWord = await UserWord.findOneAndUpdate(
    { wordId, userId },
    { $set: userWord },
    { new: true }
  );
  if (!updatedWord) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { wordId, userId });
  }

  return updatedWord;
};

const remove = async (wordId: string, userId: string) =>
  UserWord.deleteOne({ wordId, userId });

export { getAll, get, save, update, remove };
