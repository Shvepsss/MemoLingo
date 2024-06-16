import { OK } from "http-status-codes";
const router = require("express").Router({ mergeParams: true });
import { Request, Response } from "app/types";
import * as wordService from "./word.service";
import { BAD_REQUEST_ERROR } from "../../errors/appErrors";
import extractQueryParam from "../../utils/getQueryNumberParameter";

router.route("/").get(async (req: Request, res: Response) => {
  const page = extractQueryParam(req.query.page, 0);
  const group = extractQueryParam(req.query.group, 0);

  if (isNaN(page) || isNaN(group)) {
    throw new BAD_REQUEST_ERROR(
      "Wrong query parameters: the group, page numbers should be valid integers"
    );
  }

  const words = await wordService.getAll({
    page,
    group,
  });

  res.status(OK).json(words.map((word) => word.toResponse()));
});

router.route("/:id").get(async (req: Request, res: Response) => {
  const word = await wordService.get(req.params.id);
  res.status(OK).json(word.toResponse());
});

export default router;
