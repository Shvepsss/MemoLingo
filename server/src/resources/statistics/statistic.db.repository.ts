import Statistics from "./statistic.model";
import { NOT_FOUND_ERROR } from "../../errors/appErrors";
import { StatisticBase } from "./statistic.model";

const get = async (userId: string) => {
  const statistic = await Statistics.findOne({ userId });
  if (!statistic) {
    throw new NOT_FOUND_ERROR("statistic", `userId: ${userId}`);
  }

  return statistic;
};

const upsert = async (userId: string, statistic: StatisticBase) =>
  Statistics.findOneAndUpdate(
    { userId: { $eq: userId } },
    { $set: statistic },
    { upsert: true, new: true }
  );

const remove = async (userId: string) => Statistics.deleteOne({ userId });

export { get, upsert, remove };
