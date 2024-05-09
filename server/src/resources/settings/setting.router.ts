const router = require("express").Router({ mergeParams: true });
import { OK } from "http-status-codes";
import * as settingService from "./setting.service";
import schemas from "../../utils/validation/schemas";
import { validator } from "../../utils/validation/validator";
import { Request, Response } from "app/types";

router.get("/", async (req: Request, res: Response) => {
  try {
    const setting = await settingService.get(req.userId);
    res.status(OK).send(setting.toResponse());
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

router.put(
  "/",
  validator(schemas.settings, "body"),
  async (req: Request, res: Response) => {
    try {
      const setting = await settingService.upsert(req.userId, req.body);
      res.status(OK).send(setting.toResponse());
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

export default router;
