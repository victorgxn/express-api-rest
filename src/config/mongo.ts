import "dotenv/config"
import {connect} from "mongoose";

export async function dbConnect(): Promise<void> {
    const DB_URL = <string>process.env.DB_URL;
    await connect(DB_URL);
}
