import { Schema, model, models } from "mongoose";

const userSchema = new Schema ({
    name: {
        type: String,
        minLength: 3,
    },
    lastName: {
        type: String,
        minLength: 1,
    },
    phone: {
        type: String,
    },
    birthday: {
        type: Date,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default: "User",
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true,
    },
    updatedAt: {
        type: Date,
        default: () => Date.now(),
    }
});

const User = models.User || model("User", userSchema);
export default User;