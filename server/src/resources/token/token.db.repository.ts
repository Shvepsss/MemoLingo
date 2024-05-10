import Token from "./token.model";
import { AUTHENTICATION_ERROR } from "../../errors/appErrors";

const get = async (userId: string, tokenId: string) => {
  const token = await Token.findOne({ userId, tokenId });
  if (!token) {
    throw new AUTHENTICATION_ERROR("Token is not found!");
  }
  return token;
};

const upsert = async (token: {
  userId: string;
  tokenId?: string;
  expire?: number;
}) =>
  Token.findOneAndUpdate(
    { userId: token.userId },
    { $set: token },
    { upsert: true, new: true }
  );

export { get, upsert };
