import { Document, Schema, Model } from "mongoose";

const addMethods = <T extends Schema<any>>(schema: T) => {
  schema.method("toResponse", function() {
    const { _id, ...rest } = this.toJSON();
    if ("password" in rest) {
      delete rest.password;
    }

    if ("userId" in rest) {
      delete rest.userId;
    }
    delete rest.__v;
    return { id: _id, ...rest };
  });

  return schema;
};

export { addMethods };
