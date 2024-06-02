import { Request, Response } from "express";
import { registerNewUser, loginUser } from "../services/auth.service";

export const registerCtrl = async ({ body }: Request, res: Response) => {
  const responseUser = await registerNewUser(body);
  res.send(responseUser);
};

export const loginCtrl = async ({ body }: Request, res: Response) => {
  const { email, password } = body;
  const responseUser = await loginUser({ email, password });
  if (responseUser === "Los credenciales no son correctos") {
    res.status(403);
    res.send(responseUser);
  } else {
    res.send(responseUser);
  }
};
