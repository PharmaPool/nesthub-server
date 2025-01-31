const express = require("express");
const {
  getUser,
  changePassword,
  updateMyFreeScoreDetails,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");

const router = express.Router();

router.get("/profile/:id", getUser);
router.put("/change-password/:id", changePassword);
router.put("/update-myfreescore/:id", updateMyFreeScoreDetails);
router.get("/", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
