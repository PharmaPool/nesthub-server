const User = require("../models/User");

// User Sign-Up
const registerUser = async (req, res) => {
  const {
    firstName,
    lastName,
    dateOfBirth,
    ssn,
    phone,
    email,
    username,
    password,
    street,
    city,
    state,
    zip,
  } = req.body;

  try {
    // Check if user with email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exists" });

    // Create new user
    const user = new User({
      firstName,
      lastName,
      dateOfBirth,
      ssn,
      phone,
      email,
      username,
      password, // Will be hashed in pre-save middleware
      address: {
        street,
        city,
        state,
        zip,
      },
    });

    await user.save();

    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// User Sign-In
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { registerUser, loginUser };
