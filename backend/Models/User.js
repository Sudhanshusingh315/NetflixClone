const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const userSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

// Checking password and creating a method
userSchema.methods.matchPassword = async function (enterdPassword) {
  console.log("this.password = ", this.password);
  const result = await bcrypt.compare(enterdPassword, this.password);
  console.log(result);
  return result;
};

// use this before creating a model
userSchema.pre("save", async function (next) {
  console.log("this is inside of pre middleware", this.password);
  const salt = 10;
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
