import { OK } from "http-status-codes";

import * as statisticService from "./statistic.service";
import { Request, Response } from "app/types";
import { Router } from "express";
const router = Router({ mergeParams: true });

router.get("/", async (req: Request, res: Response) => {
  const statistic = await statisticService.get(req.userId);
  res.status(OK).json(statistic.toResponse());
});

router.put("/", async (req: Request, res: Response) => {
  const statistic = await statisticService.upsert(req.userId, req.body);
  res.status(OK).json(statistic.toResponse());
});

export default router;
