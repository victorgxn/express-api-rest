import "dotenv/config"
import {connect} from "mongoose";

export async function dbConnect(): Promise<void> {
    await connect(<string>process.env.DB_URL);
}
