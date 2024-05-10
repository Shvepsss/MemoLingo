require("express-async-errors");
import express, { RequestHandler } from "express";
import createError from "http-errors";
import swaggerUI from "swagger-ui-express";
import path from "path";
import YAML from "yamljs";
import morgan from "morgan";
import cors from "cors";
// import helmet from "helmet";
require("express-async-errors");
import { NOT_FOUND } from "http-status-codes";

import winston from "./common/logging";
import wordRouter from "./resources/words/word.router";
import signinRouter from "./resources/authentication/signin.router";
import userRouter from "./resources/users/user.router";
import userTokenRouter from "./resources/token/token.router";
import userWordsRouter from "./resources/userWords/userWord.router";
//import aggregatedWordsRouter from "./resources/aggregatedWords/aggregatedWord.router";
import statisticRouter from "./resources/statistics/statistic.router";

import settingRouter from "./resources/settings/setting.router";
import errorHandler from "./errors/errorHandler";
import checkAuthentication from "./resources/authentication/checkAuthentication";
import { userIdValidator } from "./utils/validation/validator";

const app = express();
app.use(checkAuthentication as RequestHandler);
const swaggerDocument = YAML.load(path.join(__dirname, "../doc/api.yaml"));

app.get("/test", async (req, res) => {
  const queryParams = req.query;

  res.send(JSON.stringify(queryParams, null, 2));
});
// app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/files", express.static(path.join(__dirname, "../files")));

app.use("/doc", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use("/", (req, res, next) => {
  if (req.originalUrl === "/") {
    res.send("Service is running!");
    return;
  }
  next();
});

// app.use(
//   morgan(
//     ":method :status :url :userId size req :req[content-length] res :res[content-length] - :response-time ms",
//     {
//       stream: winston.stream,
//     }
//   )
// );

app.use("/words", wordRouter);

app.use("/sign-in", signinRouter);

app.use("/users", userRouter);

userRouter.use("/:id/tokens", userIdValidator, userTokenRouter);

//userRouter.use("/:id/words", userIdValidator, userWordsRouter);
//userRouter.use("/:id/aggregatedWords", userIdValidator, aggregatedWordsRouter);

userRouter.use("/:id/statistics", userIdValidator, statisticRouter);

userRouter.use("/:id/settings", userIdValidator, settingRouter);

app.use((req, res, next) => next(createError(NOT_FOUND)));

//app.use(errorHandler);

export { app };
