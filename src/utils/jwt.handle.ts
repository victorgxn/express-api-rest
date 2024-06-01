import { sign, verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SCRET || "token.01010101";

const generateToken = (string: string) => {
  const jwt = sign(string, JWT_SECRET);
  return jwt;
};

const verifyToken = async () => {};

export { generateToken, verify };
