import {
  Schema,
  model,
  connect,
  Types,
  ObjectId,
  createConnection,
} from "mongoose";

export interface IUser {
  username: string;
  password: string;
}

export const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export const UserModel = model<IUser>("User", userSchema);

run().catch((err) => console.log(err));

async function run() {
  await createConnection("mongodb://localhost:27017/");
}
