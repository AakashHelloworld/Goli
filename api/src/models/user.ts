import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";

// Define the user interface
interface IUser extends Document {
    ProfilePic: string;
    Username: string;
    Email: string;
    Role: string;
}

// Define the schema
const userSchema = new mongoose.Schema<IUser>({
    ProfilePic:{
        type: String, 
    },
    Username: {
        type: String,
        required: [true, "User must have a name"],
        trim: true,
        unique: true,
    },
    Email: {
        type: String,
        required: [true, "A user must have an email"],
        unique: true,
        lowercase: true,
    },
    Role: {
        type: String,
        default: "user"
    },
});

// Create and export the model
const User = mongoose.model<IUser>('User', userSchema);
export default User;
