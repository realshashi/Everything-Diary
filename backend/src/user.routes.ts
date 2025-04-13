import express from "express";
import { signup, loginOne, signOut } from "./user.controller";
import {
  deleteContentOne,
  addContentOne,
  getAllContent,
  createShareableLink,
  getUserContent,
} from "./content/content.controller";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());
app.post("/api/v1/signup", signup);
app.post("/api/v1/signin", loginOne);
app.get("/api/v1/content", getAllContent);
app.post("/api/v1/content/id:id", addContentOne);
app.delete("/api/v1/content/id:id", deleteContentOne);
app.get(`/api/v1/brain/:sharedlink`, createShareableLink);
app.post("/api/v1/signout", signOut);
app.get("/api/v1/search/:_id", getUserContent);

app.listen(3000);
