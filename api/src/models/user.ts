import mongoose, { Document } from "mongoose";
import bcrypt from "bcryptjs";

// Define the user interface
interface IUser extends Document {
    Username: string;
    Email: string;
    Role: string;
    Password: string;
    ConfirmPassword: string;
    correctPassword(candidatePassword: string, userPassword: string): Promise<boolean>;
}

// Define the schema
const usersschema = new mongoose.Schema<IUser>({
    Username: {
        type: String,
        required: [true, "User must have a name"],
        trim: true,
        unique: true,
        minlength: [4, "User must have at least 4 characters"],
        maxlength: [8, "User can have up to 8 characters"]
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
    Password: {
        type: String,
        required: [true, "A user should keep a password"],
        minlength: 8,
    },
    ConfirmPassword: {
        type: String,
        required: [true, "A user should confirm their password"],
        minlength: 8,
        select: false, // Exclude this from being saved
        default: undefined, // Allow undefined assignment
    }
});

// Hash the password before saving
usersschema.pre('save', async function (next) {
    if (!this.isModified('Password')) return next();
    this.Password = await bcrypt.hash(this.Password, 12);
    this.ConfirmPassword = ''; // Remove ConfirmPassword safely
    next();
});

// Add the method to check if passwords match
usersschema.methods.correctPassword = async function (candidatePassword: string, userPassword: string): Promise<boolean> {
    return await bcrypt.compare(candidatePassword, userPassword);
};

// Create and export the model
const User = mongoose.model<IUser>('User', usersschema);
export default User;
