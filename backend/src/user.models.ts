import { Schema, model, connect, Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  username: string;
  password: string;
}

export const userSchema = new Schema<IUser>({
  _id: { type: Types.ObjectId, ref: "UserId" },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model<IUser>("User", userSchema);

run().catch((err) => console.log(err));

async function run() {
  await connect("mongodb://localhost");
  const user = new UserModel({
    username: "john",
    password: "john@gmail.com",
  });
  await user.save();
  console.log(user.username);
}
