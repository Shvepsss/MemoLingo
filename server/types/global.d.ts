declare global {
  namespace Express {
    interface Request {
      userId: string;
      tokenId: string;
    }
    interface Response {}
  }
}

export { Response } from "express";
