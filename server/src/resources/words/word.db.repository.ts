import WordModel from "./word.model";
import { NOT_FOUND_ERROR } from "../../errors/appErrors";
const ENTITY_NAME = "word";

const getAll = async (conditions: { group: number; page: number }) => {
  const { group, page } = conditions;

  return WordModel.find({ group, page });
};

const get = async (id: string) => {
  const word = await WordModel.findOne({ _id: id });
  if (!word) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { id });
  }
  const kek = word.toResponse();

  return word;
};

export { getAll, get };
