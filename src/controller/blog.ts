import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";

export const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_BLOG");
  }
};

export const postItem = ({ body }: Request, res: Response) => {
  try {
    res.send(body);
  } catch (error) {
    handleHttp(res, "ERROR_POST_BLOG");
  }
};

export const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_BLOG");
  }
};

export const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_BLOG");
  }
};
