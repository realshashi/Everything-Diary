import {
  Schema,
  model,
  connect,
  Types,
  ObjectId,
  createConnection,
} from "mongoose";

export interface IUser {
  _id: ObjectId;
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
  await createConnection("mongodb://localhost:27017/");
  const user = new UserModel({
    _id: "1",
    username: "john",
    password: "john@gmail.com",
  });
  await user.save();
  console.log(user.username);
}
