import mongoose, { Document, Schema } from "mongoose";

interface UserType extends Document {
  username: string;
  password: string;
}

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true, trim: true },
  password: { type: String, required: true, trim: true },
});


const User = mongoose.models.User || mongoose.model<UserType>("User", UserSchema);

export default User;