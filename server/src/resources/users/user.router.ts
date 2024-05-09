import { OK, NO_CONTENT } from "http-status-codes";
const router = require("express").Router();
import { Request, Response } from "app/types";
import * as userService from "./user.service";
import shemas from "../../utils/validation/schemas";
import { validator, userIdValidator } from "../../utils/validation/validator";
import { getTokens } from "../token/token.service";

router.post("/", async (req: Request, res: Response) => {
  try {
    const userEntity = await userService.save(req.body);
    const resp = userEntity.toResponse();
    const tokens = await getTokens(userEntity._id);
    res
      .status(OK)
      .json({ ...tokens, userId: userEntity._id, name: userEntity.name });
  } catch (e) {
    // @ts-expect-error
    res.status(404).json({ message: e.message });
  }
});

router.get("/:id", userIdValidator, async (req: Request, res: Response) => {
  const userEntity = await userService.get(req.params.id);
  console.log(userEntity);
  res.status(OK).json(userEntity.toResponse());
});

router.put("/:id", userIdValidator, async (req: Request, res: Response) => {
  const userEntity = await userService.update(req.userId, req.body);
  res.status(OK).send(userEntity.toResponse());
});

router.delete(
  "/:id",
  userIdValidator,
  validator(shemas.id, "params"),
  async (req: Request, res: Response) => {
    await userService.remove(req.userId);
    res.sendStatus(NO_CONTENT);
  }
);

export default router;
