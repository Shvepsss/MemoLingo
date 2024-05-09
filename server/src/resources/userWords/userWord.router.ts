import { OK, NO_CONTENT } from "http-status-codes";
const router = require("express").Router({ mergeParams: true });
import schemas from "../../utils/validation/schemas";
import { validator } from "../../utils/validation/validator";
import { Request, Response } from "app/types";
import userWordService from "./userWord.service";
import { UserWordDocument } from "./userWord.model";

router.get("/", async (req: Request, res: Response) => {
  const userWords = await userWordService.getAll(req.userId);
  res.status(OK).send(userWords.map((w: UserWordDocument) => w.toResponse()));
});

router.get(
  "/:wordId",
  validator(schemas.wordId, "params"),
  async (req: Request, res: Response) => {
    const word = await userWordService.get(req.params.wordId, req.userId);
    res.status(OK).send(word.toResponse());
  }
);

router.post(
  "/:wordId",
  validator(schemas.wordId, "params"),
  validator(schemas.userWord, "body"),
  async (req: Request, res: Response) => {
    const { wordId } = req.params;
    const userId = req.userId;
    const { difficulty, optional } = req.body;
    const userWordData = {
      wordId,
      userId,
      difficulty,
      optional,
    };
    try {
      const userWord = await userWordService.save(userWordData);
      res.status(OK).send(userWord.toResponse());
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);

router.put(
  "/:wordId",
  validator(schemas.wordId, "params"),
  validator(schemas.userWord, "body"),
  async (req: Request, res: Response) => {
    const { wordId } = req.params;
    const userId = req.userId;
    const { difficulty, optional } = req.body;
    const userWordData = {
      wordId,
      userId,
      difficulty,
      optional,
    };
    try {
      const userWord = await userWordService.save(userWordData);
      res.status(OK).send(userWord.toResponse());
    } catch (error) {
      res.status(500).send("Internal Server Error");
    }
  }
);

router.delete(
  "/:wordId",
  validator(schemas.wordId, "params"),
  async (req: Request, res: Response) => {
    await userWordService.remove(req.params.wordId, req.userId);
    res.sendStatus(NO_CONTENT);
  }
);

export default router;
