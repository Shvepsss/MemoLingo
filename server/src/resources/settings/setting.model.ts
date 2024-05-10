import { Schema } from "mongoose";
import { addMethods } from "../../utils/toResponse";
import mongoose from "mongoose";

export type SettingsBase = {
  userId: string;
  minsPerDay: number;
  optional?: Record<string, any>;
};

export type SettingsDocument = SettingsBase & {
  toResponse: () => SettingsBase;
};

const SettingsSchema = new Schema<SettingsDocument>(
  {
    userId: {
      type: String,
      required: true,
    },
    minsPerDays: {
      type: Number,
    },
    optional: {
      type: Object,
      required: false,
    },
  },
  { collection: "setting" }
);

addMethods(SettingsSchema);

export default mongoose.model("Settings", SettingsSchema);
