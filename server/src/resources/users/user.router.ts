import { OK, NO_CONTENT } from "http-status-codes";
import { Router } from "express";
const router = Router({ mergeParams: true });
import { Request, Response } from "app/types";
import * as userService from "./user.service";
import { userIdValidator } from "../../utils/validation/validator";
import { getTokens } from "../token/token.service";

router.post("/", async (req: Request, res: Response) => {
  try {
    const userEntity = await userService.save(req.body);
    const tokens = await getTokens(userEntity._id);
    res
      .status(OK)
      .json({ ...tokens, userId: userEntity._id, name: userEntity.name });
  } catch (e) {
    if (e instanceof Error) res.status(404).json({ message: e.message });
  }
});

router.get("/:id", userIdValidator, async (req: Request, res: Response) => {
  const userEntity = await userService.get(req.params.id);
  res.status(OK).json(userEntity.toResponse());
});

router.put("/:id", userIdValidator, async (req: Request, res: Response) => {
  const userEntity = await userService.update(req.userId, req.body);
  res.status(OK).json(userEntity.toResponse());
});

router.delete("/:id", userIdValidator, async (req: Request, res: Response) => {
  await userService.remove(req.userId);
  res.sendStatus(NO_CONTENT);
});

export default router;
