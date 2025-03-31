import { Request, Response } from "express";
import { getErrorMessage } from "./utils";
import { login, register } from "./user.service";

export const loginOne = async (req: Request, res: Response) => {
  try {
    const foundUser = await login(req.body);
    res.status(200).send(foundUser);
  } catch (error) {
    res.status(500).send(getErrorMessage(error));
  }
};

export const signup = async (req: Request, res: Response) => {
  const registerUser = await register(req.body);
  if (registerUser == null) {
    console.log("signup failed");
  } else {
    console.log("signup successful");
  }
};

export const signOut = () => {};
