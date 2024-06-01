import {Schema, Types,model, Model} from "mongoose";
import { Car } from "../interfaces/car.interfaces";

const ItemSchema = new Schema<Car>(
    {
        name: {
            type:String,
            required:true,
        },
        color: {
            type:String,
            required:true,
        },
        gas: {
            type:String,
            required:true,
            enum:["gasoline", "electric"]
        },
        year: {
            type:Number,
            required:true,
        },
        description: {
            type:String,
            required:true,
        },
        price: {
            type:Number,
            required:true,
        }
    },
    {
        timestamps:true, //Fecha de creación, fecha de actualización
        versionKey: false,
    }
)

const ItemModel = model('Item',ItemSchema);
export default ItemModel;