import mongoose, { Document, Schema, Model } from "mongoose";

interface UserType extends Document {
    email: string;
    password: string;
}

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, trim: true },
});


const User = mongoose.model<UserType>('User', UserSchema);
export default User;