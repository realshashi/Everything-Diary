import { Request, Response } from "express";
import axios from "axios";
axios;
import { ContentModel } from "./content.models";
import { redirect } from "react-router-dom";

export const getAllContent = async (req: Request, res: Response) => {
  const responsecontent = await axios.get("localhost:5000/api/v1/content");
  return responsecontent.data;
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
export const getUser = async (req: Request, res: Response) => {
  const userSearch = await ContentModel.findOne({
    username: req.params.username,
  });
  if (userSearch?._id === null) {
    return res.status(404);
  } else {
    return res.json({
      _id: req.params._id,
      type: req.params.type,
      link: req.params.link,
      title: req.params.title,
      tags: req.params.tags,
    });
  }
  ///relations or something figure out
};
//search user with username
