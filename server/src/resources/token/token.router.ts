import { Router } from "express";
const router = Router({ mergeParams: true });
import { OK } from "http-status-codes";
import * as tokenService from "./token.service";
import { Request, Response } from "app/types";

router.get("/", async (req: Request, res: Response) => {
  const { userId, tokenId } = req;
  const tokens = await tokenService.refresh(userId, tokenId);
  res.status(OK).json(tokens);
});

export default router;
