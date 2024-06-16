import { OK } from "http-status-codes";
import * as settingService from "./setting.service";
import { Request, Response } from "app/types";
const router = require("express").Router({ mergeParams: true });

router.get("/", async (req: Request, res: Response) => {
  try {
    const setting = await settingService.get(req.userId);
    res.status(OK).json(setting.toResponse());
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});

router.put("/", async (req: Request, res: Response) => {
  try {
    const setting = await settingService.upsert(req.userId, req.body);
    res.status(OK).json(setting.toResponse());
  } catch (error) {
    console.error(error);
    res.status(500).json("Internal Server Error");
  }
});

export default router;
