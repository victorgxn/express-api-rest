import { Router, Request, Response } from "express";
import { logMiddleware } from "../middleware/log";
import {
  deleteItem,
  getItem,
  getItems,
  postItem,
  updateItem,
} from "../controller/item";


const router = Router();

//Consultar todos los items
router.get("/", getItems);
//Consultar el item por el {id}
router.get("/:id", logMiddleware, getItem);
//Crear un item
router.post("/", postItem);
//Editar el item por el {id}
router.put("/:id", updateItem);
//Borrar el item por el {id}
router.delete("/:id", deleteItem);

export { router };
