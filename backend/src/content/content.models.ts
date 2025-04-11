import {
  Schema,
  model,
  connect,
  Types,
  ObjectId,
  createConnection,
} from "mongoose";

export interface IContent {
  _id: ObjectId;
  type: string;
  link: string;
  title: string;
  tags: Object;
}

const contentSchema = new Schema<IContent>({
  _id: { type: Types.ObjectId, ref: "userId", required: true, unique: true },
  type: { type: String, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  tags: { type: Object },
});

export const ContentModel = model<IContent>("Content", contentSchema);

run().catch((err) => console.log(err));

async function run() {
  await createConnection("mongodb://localhost:27017");
  const content = new ContentModel({
    _id: "1",
    type: "admintype",
    link: "adminlink.com",
    title: "admintitle",
    tags: ["admin", "firsttag"],
  });
  await content.save();
  console.log(content._id);
}
