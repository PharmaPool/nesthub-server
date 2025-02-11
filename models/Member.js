const mongoose = require("mongoose");

const MemberSchema = new mongoose.Schema({
  verified: { type: Boolean, default: false },
  verifytime: { type: Date },
  extratime: { type: Date },
  extra: { type: Boolean, default: false },
  fullname: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const Member = mongoose.model("Member", MemberSchema);

module.exports = Member;
