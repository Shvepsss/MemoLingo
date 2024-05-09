import UserSchema from "./user.model";
import { NOT_FOUND_ERROR, ENTITY_EXISTS } from "../../errors/appErrors";
const ENTITY_NAME = "user";
const MONGO_ENTITY_EXISTS_ERROR_CODE = 11000;
import { UserDocumentBase } from "./user.model";

const getUserByEmail = async (email: string) => {
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new Error("Invalid username or password");
  }

  return user;
};

const get = async (id: string) => {
  const user = await UserSchema.findOne({ _id: id });
  if (!user) {
    throw new NOT_FOUND_ERROR(ENTITY_NAME, { id });
  }

  return user;
};

const save = async (user: UserDocumentBase) => {
  try {
    return await UserSchema.create(user);
  } catch (err) {
    if (
      err instanceof Error &&
      "code" in err &&
      err.code === MONGO_ENTITY_EXISTS_ERROR_CODE
    ) {
      throw new ENTITY_EXISTS(`${ENTITY_NAME} with this e-mail exists`);
    }

    throw err;
  }
};

const update = async (id: string, user: UserDocumentBase) =>
  UserSchema.findOneAndUpdate({ _id: id }, { $set: user }, { new: true });

const remove = async (id: string) => UserSchema.deleteOne({ _id: id });

export { get, getUserByEmail, save, update, remove };
