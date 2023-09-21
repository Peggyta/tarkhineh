import { Schema, model, models } from "mongoose";

const branchSchema = new Schema({
    slug: String,
    title: String,
    address: String,
    phone: String,
    work: String,
    image: String,

});

const Branch = models.Branch || model('Branch', branchSchema);
export default Branch;