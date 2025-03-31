import express from "express";
import { signup, loginOne, signOut } from "./user.controller";
import {
  deleteContentOne,
  addContentOne,
  getAllContent,
  createShareableLink,
  getUser,
} from "./content/content.controller";
const app = express();

app.post("/api/v1/signup", signup);
app.post("/api/v1/signin", loginOne);
app.get("/api/v1/content", getAllContent);
app.post("/api/v1/content/id:id", addContentOne);
app.delete("/api/v1/content/id:id", deleteContentOne);
app.get(`/api/v1/brain/:sharedlink`, createShareableLink);
app.get("/api/v1/search/username", getUser);
app.post("/api/v1/signout", signOut);
app.listen(5000);
