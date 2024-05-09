import Joi from "@hapi/joi";
import { Request, Response } from "app/types";
import { NextFunction } from "express";
import {
  BAD_REQUEST,
  UNPROCESSABLE_ENTITY,
  FORBIDDEN,
} from "http-status-codes";

export const errorResponse = (errors: any[]) => {
  return {
    status: "failed",
    errors: errors.map((err: Error) => {
      // const { path, message } = err;
      return err;
    }),
  };
};

export const validator = (schema: Joi.ObjectSchema<any>, property: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // req.bod
    console.log({ body: req.body });
    // @ts-expect-error
    const { error } = schema.validate(req[property]);
    if (error) {
      res
        .status(property === "body" ? UNPROCESSABLE_ENTITY : BAD_REQUEST)
        .json({ error: errorResponse(error.details) });
    } else {
      return next();
    }
  };
};

export const userIdValidator = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.userId !== req.params.id) {
    res.sendStatus(FORBIDDEN);
  } else {
    return next();
  }
};
