import { Schema, model, connect } from "mongoose";
import bcrypt from "bcrypt";

export interface IUser {
  _id: string;
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  _id: { type: String },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model<IUser>("User", userSchema);

run().catch((err) => console.log(err));

const saltRounds = 8;

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, saltRounds);
  }
  next();
});

async function run() {
  await connect("mongodb://localhost");
  const user = new UserModel({
    username: "john",
    password: "john@gmail.com",
  });
  await user.save();
  console.log(user.username);
}
