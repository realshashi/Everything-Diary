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
exports.getUser = exports.createShareableLink = exports.getShareableLink = exports.addContentOne = exports.deleteContentOne = exports.getAllContent = void 0;
const axios_1 = __importDefault(require("axios"));
axios_1.default;
const content_models_1 = require("./content.models");
const getAllContent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const responsecontent = yield axios_1.default.get("localhost:5000/api/v1/content");
    return responsecontent.data;
});
exports.getAllContent = getAllContent;
const deleteContentOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const deleteResult = yield content_models_1.ContentModel.deleteOne({ _id: req.params.id });
    if (deleteResult.deletedCount === 0) {
        res.status(404);
        res.send("user not found");
    }
});
exports.deleteContentOne = deleteContentOne;
const addContentOne = (req, res) => { };
exports.addContentOne = addContentOne;
const getShareableLink = (req, res) => { };
exports.getShareableLink = getShareableLink;
const createShareableLink = (req, res) => { };
exports.createShareableLink = createShareableLink;
const getUser = (req, res) => { };
exports.getUser = getUser;
//search user with username
