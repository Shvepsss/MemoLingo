import { Router } from "express";
import { OK } from "http-status-codes";
import * as tokenService from "./token.service";
import { Request, Response } from "app/types";
const router = require("express").Router();

router.get("/", async (req: Request, res: Response) => {
  const { userId, tokenId } = req;
  const tokens = await tokenService.refresh(userId, tokenId);
  res.status(OK).send(tokens);
});

export default router;
