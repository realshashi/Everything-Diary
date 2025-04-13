import { UserModel, IUser } from "./user.models";
import bcrypt from "bcrypt";

export async function register(user: IUser): Promise<void> {
  try {
    UserModel.create(user);
  } catch (error) {
    throw error;
  }
}

export async function login(user: IUser) {
  try {
    const foundUser = await UserModel.findOne({
      name: user.username,
    });
    if (!foundUser) {
      throw new Error("incorrect username");
    }
    const isMatch = bcrypt.compareSync(user.password, foundUser.password);

    if (isMatch) {
      return foundUser;
    } else {
      throw new Error("incorrect password");
    }
  } catch (error) {
    throw error;
  }
}

export const authHeader = () => {
  const token = getTokenFromCookies();
  return {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
};

import axios from "axios";
let baseUrl = "http://localhost:3000/";
const ApiHeader = axios.create({
  baseURL: baseUrl,
});
export const getSearchWords = async () => {
  try {
    const { data } = await ApiHeader.get("api/search/all", authHeader());
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
function getTokenFromCookies() {
  throw new Error("Function not implemented.");
}
