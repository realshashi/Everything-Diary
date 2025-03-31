"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const content_controller_1 = require("./content/content.controller");
const app = (0, express_1.default)();
app.post("/api/v1/signup", user_controller_1.signup);
app.post("/api/v1/signin", user_controller_1.loginOne);
app.get("/api/v1/content", content_controller_1.getAllContent);
app.post("/api/v1/content/id:id", content_controller_1.addContentOne);
app.delete("/api/v1/content/id:id", content_controller_1.deleteContentOne);
app.post("/api/v1/brain/share", content_controller_1.createShareableLink);
app.get(`/api/v1/brain/:sharedlink`, content_controller_1.getShareableLink);
app.get("/api/v1/search/username", content_controller_1.getUser);
app.post("/api/v1/signout", user_controller_1.signOut);
app.listen(5000);
