import { Request, Response } from "express";
import { RequestExt } from "../interfaces/req-ext";
import { handleHttp } from "../utils/error.handle";

export const getOrders = async (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VE LAS PERSONS CON SESSION / JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};
