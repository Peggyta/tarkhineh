import { Schema, model, models } from "mongoose";

const userSchema = new Schema ({
    email: {
        type: String,
        // required: true,
    },
    password: {
        type: String,
        // required: true,
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