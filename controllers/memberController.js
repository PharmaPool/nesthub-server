const Member = require("../models/Member.js");
const bcrypt = require("bcrypt");

// Sign Up Controller
module.exports.signup = async (req, res) => {
  const { fullname, phone, email, password } = req.body;
  try {
    // Check if user already exists
    const existingMember = await Member.findOne({ email });
    if (existingMember) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new member
    const newMember = new Member({
      fullname,
      phone,
      email,
      password: hashedPassword,
    });
    await newMember.save();

    res
      .status(201)
      .json({ message: "User registered successfully", member: newMember });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Sign In Controller
module.exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find member by email
    const member = await Member.findOne({ email });
    if (!member) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the password matches
    const isPasswordMatch = await bcrypt.compare(password, member.password);
    if (!isPasswordMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.status(200).json({ message: "Sign in successful", member });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// Admin Verification Controller
module.exports.verifyUser = async (req, res) => {
  const { memberId } = req.params;
  try {
    // Find the member and update verification status and time
    const updatedMember = await Member.findByIdAndUpdate(
      memberId,
      { verified: true, verifytime: Date.now() },
      { new: true }
    );

    if (!updatedMember) {
      return res.status(404).json({ message: "User not found" });
    }

    res
      .status(200)
      .json({ message: "User verified successfully", member: updatedMember });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Admin Extra Verification Controller
exports.verifyExtra = async (req, res) => {
  const { memberId } = req.params;
  try {
    // Find the member and update extra verification status
    const updatedMember = await Member.findByIdAndUpdate(
      memberId,
      { extra: true, extratime: Date.now() },
      { new: true }
    );

    if (!updatedMember) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "Extra verification completed successfully",
      member: updatedMember,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get All Users Controller
exports.getAllUsers = async (req, res) => {
  try {
    const users = await Member.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get Single User Controller
exports.getUser = async (req, res) => {
  const { memberId } = req.params;
  try {
    const user = await Member.findById(memberId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
