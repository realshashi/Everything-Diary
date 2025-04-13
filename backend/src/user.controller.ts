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
  try {
    await register(req.body);
  } catch (error) {
    console.log("signup failed");
    console.log(error);
  }
};

export const signOut = (req: Request, res: Response) => {
  //delete jwt or some
};
