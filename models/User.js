const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  ssn: { type: String, required: true, unique: true }, // Consider encrypting this for security
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  address: {
    street: { type: String, required: true }, // Combined street name and number
    city: { type: String, required: true },
    state: { type: String, required: true },
    zip: { type: String, required: true },
  },
  myfreescoredetails: {
    email: { type: String, default: "" },
    password: { type: String, default: "" },
  },
});

// Hash password before saving
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare passwords
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
