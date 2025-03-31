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
exports.getSearchWords = exports.authHeader = void 0;
exports.register = register;
exports.login = login;
const user_models_1 = require("./user.models");
const bcrypt_1 = __importDefault(require("bcrypt"));
function register(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield user_models_1.UserModel.create(user);
        }
        catch (error) {
            throw error;
        }
    });
}
function login(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const foundUser = yield user_models_1.UserModel.findOne({
                name: user.username,
            });
            if (!foundUser) {
                throw new Error("incorrect username");
            }
            const isMatch = bcrypt_1.default.compareSync(user.password, foundUser.password);
            if (isMatch) {
                return foundUser;
            }
            else {
                throw new Error("incorrect password");
            }
        }
        catch (error) {
            throw error;
        }
    });
}
const authHeader = () => {
    const token = getTokenFromCookies();
    return {
        headers: {
            Authorization: "Bearer " + token,
        },
    };
};
exports.authHeader = authHeader;
const axios_1 = __importDefault(require("axios"));
let baseUrl = "http://localhost:8080/";
const ApiHeader = axios_1.default.create({
    baseURL: baseUrl,
});
const getSearchWords = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data } = yield ApiHeader.get("api/search/all", (0, exports.authHeader)());
        return data;
    }
    catch (error) {
        console.error(error);
        throw error;
    }
});
exports.getSearchWords = getSearchWords;
function getTokenFromCookies() {
    throw new Error("Function not implemented.");
}
