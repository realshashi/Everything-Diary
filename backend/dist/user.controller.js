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
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = exports.signup = exports.loginOne = void 0;
const utils_1 = require("./utils");
const user_service_1 = require("./user.service");
const loginOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const foundUser = yield (0, user_service_1.login)(req.body);
        res.status(200).send(foundUser);
    }
    catch (error) {
        res.status(500).send((0, utils_1.getErrorMessage)(error));
    }
});
exports.loginOne = loginOne;
const signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const registerUser = yield (0, user_service_1.register)(req.body);
    if (registerUser == null) {
        console.log("signup failed");
    }
    else {
        console.log("signup successful");
    }
});
exports.signup = signup;
const signOut = () => { };
exports.signOut = signOut;
