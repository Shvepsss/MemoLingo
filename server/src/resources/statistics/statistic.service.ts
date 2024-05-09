import * as statisticRepo from "./statistic.db.repository";
import { StatisticBase } from "./statistic.model";

const get = async (userId: string) => statisticRepo.get(userId);

const upsert = async (userId: string, statistic: StatisticBase) =>
  statisticRepo.upsert(userId, { ...statistic, userId });

const remove = async (userId: string) => statisticRepo.remove(userId);

export { get, upsert, remove };
