import { Car } from "../interfaces/car.interfaces"
import ItemModel from "../models/item"

export const getCars = async () => {
    const cars = await ItemModel.find();
    return cars;
}

export const getCar = async (id:string) => {
    const car = await ItemModel.findOne({_id:id});
    return car;
}

export const insertCar = async (item: Car) => {
    const responseInsert = await ItemModel.create(item);
    return responseInsert;
}

export const updateCar = async (id:string, data: Car) => {
    const responseUpdate = await ItemModel.findOneAndUpdate({_id:id
    }, data, {new: true});
    return responseUpdate;
}

export const deleteCar = async (id:string) => {
    const responseDelete = await ItemModel.deleteOne({_id:id});
    return responseDelete;
}
