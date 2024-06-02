import { Auth } from "../interfaces/auth.interface";
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

export const registerNewUser = async ({
  email,
  password,
  name,
  description,
}: User) => {
  //Primero validamos si el chango esta ya en la base de datos
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "USER_EXIST";
  const passHash = await encrypt(password);
  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
    description,
  });
  return registerNewUser;
};
export const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";

  const passwordHash = checkIs.password; //El modelo nos devuelve directamente la contraseña que se encuentra hash
  const isCorrect = await verified(password, passwordHash);
  if (!isCorrect) return "Los credenciales no son correctos";
  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};
