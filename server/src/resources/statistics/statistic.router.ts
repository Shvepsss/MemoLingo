import { OK } from "http-status-codes";
import { Router } from "express";
import * as statisticService from "./statistic.service";
import shemas from "../../utils/validation/schemas";
import { Request, Response } from "app/types";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const statistic = await statisticService.get(req.userId);
  res.status(OK).json(statistic.toResponse());
});

router.put("/", async (req: Request, res: Response) => {
  const statistic = await statisticService.upsert(req.userId, req.body);
  res.status(OK).json(statistic.toResponse());
});

export default router;
