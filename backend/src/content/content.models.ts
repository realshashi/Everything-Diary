import { Schema, model, connect } from "mongoose";

export interface IContent {
  _id: string;
  type: string;
  link: string;
  title: string;
  tags: string;
}

const contentSchema = new Schema<IContent>({
  _id: { type: String, required: true, unique: true },
  type: { type: String, required: true },
  link: { type: String, required: true },
  title: { type: String, required: true },
  tags: { type: String },
});

export const ContentModel = model<IContent>("Content", contentSchema);

run().catch((err) => console.log(err));

async function run() {
  await connect("mongodb://localhost:27017");
  const content = new ContentModel({
    _id: "1admin",
    type: "admintype",
    link: "adminlink.com",
    title: "admintitle",
    tags: "#admin,#content",
  });
  await content.save();
  console.log(content._id);
}
