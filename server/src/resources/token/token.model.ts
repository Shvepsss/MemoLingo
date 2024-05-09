import { Schema as _Schema, model } from "mongoose";
const Schema = _Schema;

export type TokenBase = {
  userId: string;
  tokenId: string;
  expire: number;
};

const Token = new Schema<TokenBase>(
  {
    userId: {
      type: _Schema.Types.ObjectId,
      required: true,
    },
    tokenId: { type: String, required: true },
    expire: { type: Number, required: true },
  },
  { collection: "tokens" }
);

Token.index({ userId: 1 }, { unique: true });

export default model("tokens", Token);
