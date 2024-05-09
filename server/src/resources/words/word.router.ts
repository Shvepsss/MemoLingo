import { OK } from "http-status-codes";
import { Router } from "express";
import * as wordService from "./word.service";
import { BAD_REQUEST_ERROR } from "../../errors/appErrors";
import extractQueryParam from "../../utils/getQueryNumberParameter";
const router = Router();

router.route("/").get(async (req, res) => {
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

  console.log({ words, page, group });
  res.status(OK).send(words.map((word) => word.toResponse()));
});

router.route("/:id").get(async (req, res) => {
  const word = await wordService.get(req.params.id);
  res.status(OK).send(word.toResponse());
});

export default router;
