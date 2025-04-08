import bcrypt from "bcrypt";
import { IUser, userSchema } from "./user.models";
import { HydratedDocument } from "mongoose";

const saltRounds = 8;

userSchema.pre("save", async function (next) {
  const user = this as unknown as HydratedDocument<IUser>;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});
