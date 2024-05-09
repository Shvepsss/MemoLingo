import Settings from "./setting.model";
import { NOT_FOUND_ERROR } from "../../errors/appErrors";
import { SettingsBase } from "./setting.model";

const get = async (userId: string) => {
  const setting = await Settings.findOne({ userId });
  if (!setting) {
    throw new NOT_FOUND_ERROR("Cannot find setting");
  }

  return setting;
};

const upsert = async (userId: string, settings: SettingsBase) =>
  Settings.findOneAndUpdate(
    { userId },
    { $set: settings },
    { upsert: true, new: true }
  );

const remove = async (userId: string) => Settings.deleteOne({ userId });

export { get, upsert, remove };
