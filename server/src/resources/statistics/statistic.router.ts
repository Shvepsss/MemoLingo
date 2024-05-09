import { OK } from "http-status-codes";
const router = require("express").Router({ mergeParams: true });
import * as statisticService from "./statistic.service";
import shemas from "../../utils/validation/schemas";
import { validator } from "../../utils/validation/validator";
import { Request, Response } from "app/types";

router.get("/", async (req: Request, res: Response) => {
  const statistic = await statisticService.get(req.userId);
  res.status(OK).send(statistic.toResponse());
});

router.put(
  "/",
  validator(shemas.statistics, "body"),
  async (req: Request, res: Response) => {
    const statistic = await statisticService.upsert(req.userId, req.body);
    res.status(OK).send(statistic.toResponse());
  }
);

export default router;
