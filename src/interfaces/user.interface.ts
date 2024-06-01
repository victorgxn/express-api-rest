import { Auth } from "./auth.interface";

//Extender sirve para coger todas las propiedadesd de la interface auth en este caso usuario tendria email,password,name,description.
export interface User extends Auth {
  name: string;
  description: string;
}
