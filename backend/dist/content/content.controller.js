"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserContent = exports.createShareableLink = exports.addContentOne = exports.deleteContentOne = exports.getAllContent = void 0;
const axios_1 = __importDefault(require("axios"));
axios_1.default;
const content_models_1 = require("./content.models");
const react_router_dom_1 = require("react-router-dom");
const getAllContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responsecontent = yield content_models_1.ContentModel.findOne({
        userId: req.params.userId,
    }).populate("userId", "username");
    try {
        res.json(responsecontent);
    }
    catch (error) {
        throw error;
    }
});
exports.getAllContent = getAllContent;
const deleteContentOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteResult = yield content_models_1.ContentModel.deleteOne({
        userId: req.params.userId,
    });
    if (deleteResult.deletedCount === 0) {
        res.status(404);
        res.send("user not found");
    }
});
exports.deleteContentOne = deleteContentOne;
const addContentOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const addedResult = new content_models_1.ContentModel({
        userId: req.params.userId,
        type: req.params.type,
        link: req.params.link,
        title: req.params.title,
        tags: req.params.tags,
    });
    yield addedResult.save();
});
exports.addContentOne = addContentOne;
const createShareableLink = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const selectContentForSharing = yield content_models_1.ContentModel.findOne({
        userId: req.params.userId,
    });
    const shareableLink = `localhost:5000/api/v1/content/${selectContentForSharing}`;
    (0, react_router_dom_1.redirect)(shareableLink);
});
exports.createShareableLink = createShareableLink;
const getUserContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchUserContent = yield content_models_1.ContentModel.findOne({
        userId: req.params.userId,
    }).populate("userId", "username");
    try {
        res.json(searchUserContent);
    }
    catch (error) {
        throw error;
    }
});
exports.getUserContent = getUserContent;
