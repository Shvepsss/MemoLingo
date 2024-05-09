import { compare } from "bcrypt";
import * as userRepo from "./user.db.repository";
import mongoose from "mongoose";
import { getTokens } from "../token/token.service";
import { remove as __remove } from "../settings/setting.service";
import { remove as ___remove } from "../statistics/statistic.service";
import { AUTHENTICATION_ERROR } from "../../errors/appErrors";
import { UserDocumentBase } from "./user.model";

const authenticate = async (user: UserDocumentBase) => {
  const userEntity = await userRepo.getUserByEmail(user.email);

  const isValidated = await compare(user.password, userEntity.password);
  if (!isValidated) {
    throw new AUTHENTICATION_ERROR("Wrong Password");
  }

  const tokens = await getTokens(userEntity._id);

  return { ...tokens, userId: userEntity._id, name: userEntity.name };
};

const get = (id: string) => userRepo.get(id);

const save = (user: UserDocumentBase) => userRepo.save(user);

const update = (id: string, user: UserDocumentBase) =>
  userRepo.update(id, user);

const remove = async (id: string) => {
  await ___remove(id);
  await __remove(id);
  await userRepo.remove(id);
};

export { authenticate, get, save, update, remove };
