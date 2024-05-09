import { Document, Schema } from "mongoose";
import { addMethods } from "../../utils/toResponse";
import mongoose from "mongoose";

export type UserWordDocumentBase = {
  wordId: string;
  userId: string;
  difficulty?: string;
  optional?: Record<string, any>;
};

export type UserWordDocument = UserWordDocumentBase & {
  toResponse: () => UserWordDocument;
};

const UserWordsSchema = new Schema<UserWordDocument>(
  {
    wordId: { type: Schema.Types.ObjectId, required: true },
    userId: { type: Schema.Types.ObjectId, required: true },
    difficulty: { type: String, required: false },
    optional: {
      type: Object,
      required: false,
    },
  },
  { collection: "userWords" }
);

addMethods(UserWordsSchema);

UserWordsSchema.index({ wordId: 1, userId: 1 }, { unique: true });

export default mongoose.model("UserWords", UserWordsSchema);
