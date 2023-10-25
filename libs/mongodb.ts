import mongoose from "mongoose";

let isConnected = false;

export const connect = async () => {
    mongoose.set("strictQuery", true);

    if (isConnected) {
        console.log("already connected");
    }

    if (!process.env.DATABASE_URL) {
        console.log("====================================");
        console.log("=================NO DB URL===============");
        console.log("====================================");
    } else
    {
        try {
            await mongoose.connect(process.env.DATABASE_URL)
        } catch (error) { }
    }
}