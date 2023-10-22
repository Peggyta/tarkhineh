import { Schema, model, models } from "mongoose";

const profileSchema = new Schema ({
    firstName: {
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
    userName: {
        type: String,
    }, 
    userId: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
},
    {timestamps: true}
);

const Profile = models.Profile || model("Profile", profileSchema);
export default Profile;