import jwt from "jsonwebtoken";
import { sign } from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import { AUTHENTICATION_ERROR } from "../../errors/appErrors";
import * as tokenRepo from "./token.db.repository";
import { config } from "../../common/config";

const refresh = async (userId: string, tokenId: string) => {
  const token = await tokenRepo.get(userId, tokenId);
  if (Date.now() > token.expire) {
    throw new AUTHENTICATION_ERROR("Token is expired");
  }

  return getTokens(userId);
};

const getTokens = async (userId: string) => {
  const tokenId = uuidv4();
  const token = jwt.sign(
    { id: userId, tokenId: tokenId },
    config.JWT_SECRET_KEY!,
    {
      expiresIn: config.JWT_EXPIRE_TIME,
    }
  );

  const refreshToken = sign(
    { id: userId, tokenId },
    config.JWT_REFRESH_SECRET_KEY!,
    {
      expiresIn: config.JWT_REFRESH_EXPIRE_TIME,
    }
  );

  await tokenRepo.upsert({
    userId,
    tokenId,
    expire: Date.now() + config.JWT_REFRESH_EXPIRE_TIME * 1000,
  });

  return { token, refreshToken };
};

const upsert = (token: { userId: string; tokenId?: string; expire?: number }) =>
  tokenRepo.upsert(token);

export { refresh, getTokens, upsert };
