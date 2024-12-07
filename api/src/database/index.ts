import mongoose from "mongoose";

const DB = "mongodb+srv://aakashbandhuaryal:R1FFqXRJ4zRTkThD@cluster0.wvurg.mongodb.net/";

export function Database() {
    mongoose.connect(DB as string)
        .then(() => {
            console.log("Successfully Database Connected!");
        })
        .catch((error) => {
            console.error("Database connection error:", error);
        });
}