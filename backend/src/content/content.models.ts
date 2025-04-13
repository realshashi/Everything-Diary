import { Schema, model, Types, ObjectId, createConnection } from "mongoose";

export interface IContent {
  userId: ObjectId;
  type: string;
  link: string;
  title: string;
  tags: Object;
}

const contentSchema = new Schema<IContent>({
  userId: [{ type: Types.ObjectId, ref: "User", required: true, unique: true }],
  type: { type: String, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  tags: [{ type: Types.ObjectId, ref: "tag" }],
});

export const ContentModel = model<IContent>("Content", contentSchema);

run().catch((err) => console.log(err));

async function run() {
  await createConnection("mongodb://localhost:27017");
}
