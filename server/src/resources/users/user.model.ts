import mongoose, { Document, UpdateQuery, Schema } from "mongoose";

import { hash } from "bcrypt";
import { addMethods } from "../../utils/toResponse";

export type UserDocumentBase = {
  name: string;
  email: string;
  password: string;
  age: number;
};

export type UserDocument = UserDocumentBase & {
  toResponse: () => UserDocument;
};

const UserSchema = new Schema<UserDocument>(
  {
    name: String,
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },
  },
  { collection: "users" }
);

addMethods(UserSchema);

UserSchema.pre("save", async function(this: Document<UserDocument>, next) {
  if (this.isModified("password")) {
    const user = (this as unknown) as UserDocument;
    user.password = await hash(user.password, 10);
  }
  next();
});

UserSchema.pre("updateOne", async function(
  this: UpdateQuery<UserDocument>,
  next
) {
  const update = this.getUpdate();
  if (update.$set.password) {
    update.$set.password = await hash(update.$set.password, 10);
  }
  next();
});

export default mongoose.model("users", UserSchema);
