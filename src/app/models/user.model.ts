import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 characters, got {VALUE}'],
        maxlength: 15,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: [18, 'Age must be at least 18, got {VALUE}']
    },
    email: {
        type: String,
        lowercase: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: ["USER", "ADMIN", "SUPERADMIN"],
        default: "USER"
    }
});


const User = model("User", userSchema);

export default User;
