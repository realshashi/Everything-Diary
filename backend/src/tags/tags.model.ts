import { Schema, model, connect, Types } from "mongoose";
export interface ITags {
  _id: string;
  tagId: string;
  tagTitle: string;
}
const tagsSchema = new Schema<ITags>({
  _id: { type: Types.ObjectId, ref: "UserId", unique: true, required: true },
  tagId: { type: String, unique: true },
  tagTitle: { type: String, require: true, unique: true },
});

export const TagsModel = model<ITags>("Tags", tagsSchema);
async function run() {
  await connect("mongodb://localhost");
}
run();
