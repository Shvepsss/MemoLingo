import { Router, Request, Response } from "express";
import { OK } from "http-status-codes";
import * as userService from "../users/user.service";

const router = Router();

router.post("/", async (req: Request, res: Response) => {
  try {
    const auth = await userService.authenticate(req.body);

    res.status(OK).json({
      message: "Authenticated",
      ...auth,
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      res
        .status(500)
        .json({ error: "Internal Server Error", errorMessage: error.message });
    }
  }
});

export default router;
