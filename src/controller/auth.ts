import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

export const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser();
};

export const loginCtrl = async ({ body }: Request, res: Response) => {};
