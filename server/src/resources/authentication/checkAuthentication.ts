import jwt, { JwtPayload } from "jsonwebtoken";
import { NextFunction } from "express";
import { Request, Response } from "app/types";
import { config } from "../../common/config";
import { AUTHORIZATION_ERROR } from "../../errors/appErrors";

const ALLOWED_PATHS = ["/signin", "/signup"];
const DOC_PATH_REGEX = /^\/doc\/?$/;
const DOC_PATH_RESOURCES_REGEX = /^\/doc\/.+$/;
const WORDS_PATH_REGEX = /^\/words.*$/;
const USERS_PATH = "/users";
const LOGING_PATH = "/sign-in";

function isOpenPath(path: string): boolean {
  return (
    ALLOWED_PATHS.includes(path) ||
    DOC_PATH_REGEX.test(path) ||
    DOC_PATH_RESOURCES_REGEX.test(path) ||
    WORDS_PATH_REGEX.test(path)
  );
}

const checkAuthentication = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (isOpenPath(req.path)) {
    return next();
  }

  if (req.path === USERS_PATH || (LOGING_PATH && req.method === "POST")) {
    return next();
  }

  const rawToken = req.headers.authorization;
  if (!rawToken) {
    throw new AUTHORIZATION_ERROR("No Token");
  }

  try {
    const token = rawToken.slice(7, rawToken.length);

    const secret = req.path.includes("tokens")
      ? config.JWT_REFRESH_SECRET_KEY
      : config.JWT_SECRET_KEY;

    const { id, tokenId } = jwt.verify(
      token,
      secret || "Missing key"
    ) as JwtPayload;
    req.userId = id;
    req.tokenId = tokenId;
  } catch (error) {
    throw new AUTHORIZATION_ERROR("Auth error");
  }

  next();
};

export default checkAuthentication;
