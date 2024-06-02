import { Router } from "express";
import { getOrders } from "../controller/order";
import { checkJwt } from "../middleware/session";

//Esta ruta estara validada para usuarios con sesion activa mediante JWT
const router = Router();

router.get("/", checkJwt, getOrders);

export { router };
