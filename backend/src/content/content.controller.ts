import { Request, Response, NextFunction } from "express";
import axios from "axios";
axios;
import { ContentModel } from "./content.models";
import { redirect } from "react-router-dom";

export const getAllContent = async (req: Request, res: Response) => {
  const responsecontent = await ContentModel.findOne({
    _id: req.params._id,
  }).populate("userInfo", "username");
  try {
    res.json(responsecontent);
  } catch (error) {
    throw error;
  }
};

export const deleteContentOne = async (req: Request, res: Response) => {
  const deleteResult = await ContentModel.deleteOne({ _id: req.params._id });
  if (deleteResult.deletedCount === 0) {
    res.status(404);
    res.send("user not found");
  }
};

export const addContentOne = async (req: Request, res: Response) => {
  const addedResult = new ContentModel({
    _id: req.params._id,
    type: req.params.type,
    link: req.params.link,
    title: req.params.title,
    tags: req.params.tags,
  });
  await addedResult.save();
};
export const createShareableLink = async (req: Request, res: Response) => {
  const selectContentForSharing = await ContentModel.findOne({
    _id: req.params._id,
  });
  const shareableLink = `localhost:5000/api/v1/content/${selectContentForSharing}`;
  redirect(shareableLink);
};

export const getUserContent = async (req: Request, res: Response) => {
  const searchUserContent = await ContentModel.findOne({
    _id: req.params._id,
  }).populate("userInfo", "username");
  try {
    res.json(searchUserContent);
  } catch (error) {
    throw error;
  }
};
