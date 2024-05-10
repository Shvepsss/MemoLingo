import { OK, NO_CONTENT } from "http-status-codes";
import { Router } from "express";
import { Request, Response } from "app/types";
import userWordService from "./userWord.service";
import { UserWordDocument } from "./userWord.model";
const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const userWords = await userWordService.getAll(req.userId);
  res.status(OK).json(userWords.map((w: UserWordDocument) => w.toResponse()));
});

router.get("/:wordId", async (req: Request, res: Response) => {
  const word = await userWordService.get(req.params.wordId, req.userId);
  res.status(OK).json(word.toResponse());
});

router.post("/:wordId", async (req: Request, res: Response) => {
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
    res.status(OK).json(userWord.toResponse());
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});

router.put("/:wordId", async (req: Request, res: Response) => {
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
    res.status(OK).json(userWord.toResponse());
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
});

router.delete("/:wordId", async (req: Request, res: Response) => {
  await userWordService.remove(req.params.wordId, req.userId);
  res.sendStatus(NO_CONTENT);
});

export default router;
