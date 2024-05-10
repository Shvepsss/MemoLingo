import { Request as ExpressRequest } from "express";
export type Request = ExpressRequest & {
  userId: string;
  tokenId: string;
};
export { Response } from "express";
