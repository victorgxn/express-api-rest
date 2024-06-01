import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";

const registerNewUser = async ({
  email,
  password,
  name,
  description,
}: User) => {
  //Primero validamos si el chango esta ya en la base de datos
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "USER_EXIST";
  const registerNewUser = await UserModel.create({
    email,
    password,
    name,
    description,
  });
  return registerNewUser;
};
const loginUser = async (authUser: Auth) => {};
