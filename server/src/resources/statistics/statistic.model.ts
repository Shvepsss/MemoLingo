import { Schema } from "mongoose";
import { addMethods } from "../../utils/toResponse";
import mongoose from "mongoose";

export type StatisticBase = {
  userId: string;
  learnedWords: string;
  optional?: Record<string, any>;
};

export type StatisticDocument = StatisticBase & {
  toResponse: () => StatisticBase;
};

const StatisticSchema = new Schema<StatisticDocument>(
  {
    userId: {
      type: String,
      required: true,
    },
    learnedWords: {
      type: Number,
    },
    optional: {
      type: Object,
      required: false,
    },
  },
  { collection: "statistic" }
);

addMethods(StatisticSchema);

export default mongoose.model("Statistic", StatisticSchema);
