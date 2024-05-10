import logger from "./common/logging";

// uncaughtException is been catching by Winston
process.on("unhandledRejection", (reason) => {
  // process.emit("uncaughtException", reason);
});

import mongoose from "mongoose";
import { config } from "./common/config";

import { app } from "./app";

const { PORT, MONGO_CONNECTION_STRING } = config;

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  dbName: "Monolingo",
});

const db = mongoose.connection;

db.on("error", () => logger.error("MongoDB connection error:")).once(
  "open",
  () => {
    logger.info("Successfully connect to DB");
    app.listen(PORT, () =>
      logger.info(`App is running on http://localhost:${PORT}`)
    );
  }
);

// app.listen(PORT, () =>
//   logger.info(`App is running on http://localhost:${PORT}`)
// );
