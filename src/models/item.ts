import {Schema, Types,model, Model} from "mongoose";
import { Car } from "../interfaces/car.interfaces";

const ItemSchema = new Schema<Car>(
    {
        color: {
            type:String
        },
        gas: {
            type:String,
            enum:["gasoline", "electric"]
        },
        year: {
            type:Number
        },
        descripcion: {
            type:String
        },
        price: {
            type:Number
        }
    },
    {
        timestamps:true, //Fecha de creación, fecha de actualización
        versionKey: false,
    }
)

const ItemModel = model('Item',ItemSchema);
export default ItemModel;