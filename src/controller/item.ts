import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { insertItem } from "../config/item.service";

export const getItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export const getItems = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertItem(body);
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEMS");
  }
};

export const updateItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

export const deleteItem = (req: Request, res: Response) => {
  try {
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};
