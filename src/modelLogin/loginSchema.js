import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
const schema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
//use pre method this will execute first before saving the code 
// if user change the password if condition will exe.
//if password is not modified then save the bcrypt the password and save
// this represents the user || here schema
schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
const loginSchema = mongoose.modelNames().includes('loginDatabaseSchema') ? 
mongoose.model('loginDatabaseSchema') : mongoose.model('loginDatabaseSchema', schema);
export default loginSchema;
