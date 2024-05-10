import { SettingsBase } from "./setting.model";
import * as settingRepo from "./setting.db.repository";

const get = async (userId: string) => settingRepo.get(userId);

const upsert = async (userId: string, statistic: SettingsBase) =>
  settingRepo.upsert(userId, statistic);

const remove = async (userId: string) => settingRepo.remove(userId);

export { get, upsert, remove };
