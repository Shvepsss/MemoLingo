import { OK, NO_CONTENT } from "http-status-codes";
import { Router } from "express";
const router = Router({ mergeParams: true });
import { Request, Response } from "app/types";
import userWordService from "./userWord.service";
import { UserWordDocument } from "./userWord.model";

router.get("/", async (req: Request, res: Response) => {
  const userWords = await userWordService.getAll(req.userId);
  res.status(OK).json(userWords.map((w: UserWordDocument) => w.toResponse()));
});

router.get("/:wordId", async (req: Request, res: Response) => {
  const word = await userWordService.get(req.params.wordId, req.userId);
  res.status(OK).json(word.toResponse());
});

router.post("/check-words", async (req: Request, res: Response) => {
  const userId = req.userId;
  const { wordIds } = req.body;

  if (!Array.isArray(wordIds)) {
    return res.status(400).json({ message: "wordIds must be an array" });
  }

  try {
    const existingWordIds = await userWordService.checkLearnedWords(
      userId,
      wordIds
    );
    res.status(OK).json({ existingWordIds });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
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
