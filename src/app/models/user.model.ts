import { model, Schema } from "mongoose";
import { IUser } from "../interfaces/user.interface";
import validator from 'validator';


const userSchema = new Schema<IUser>({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
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
        min: [18, 'Age must be at least 18, got {VALUE}'],
    },
    email: {
        type: String,
        unique: [true, 'Email is already exist'],
        lowercase: true,
        required: true,
        trim: true,
        validate : [validator.isEmail, "{VALUE} is not a valid email"]
        // validate: {
        //     validator: function (value) {
        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        //     },
        //     message: props => `${props.value} is not a valid email`
        //     // message : function(props){
        //     //     return `${props.value} is not a validaa email`
        //     // }
        // }
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        uppercase: true,
        enum: {
            values: ["USER", "ADMIN", "SUPERADMIN"],
            message: "Role is not valid, get {VALUE}"
        },
        default: "USER"
    }
});


const User = model("User", userSchema);

export default User;
