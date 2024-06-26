import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  getCars,
  insertCar,
  getCar,
  updateCar,
  deleteCar,
} from "../services/item.service";

export const getItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const responseCar = await getCar(id);
    const data = responseCar ? responseCar : "NOT FOUND WITH THIS ID";
    res.send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM");
  }
};

export const getItems = async (req: Request, res: Response) => {
  try {
    const responseCars = await getCars();
    res.send(responseCars);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS");
  }
};

export const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseCar = await insertCar(body);
    res.send(responseCar);
  } catch (error) {
    handleHttp(res, "ERROR_POST_ITEMS", error);
  }
};

export const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const responseCar = await updateCar(id, body);
    res.send(responseCar);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM");
  }
};

export const deleteItem = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    res.send({ message: `Item with id ${id} was deleted.`, id });
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM");
  }
};
