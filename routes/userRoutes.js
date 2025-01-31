const express = require("express");
const {
  getUser,
  changePassword,
  updateMyFreeScoreDetails,
  getAllUsers,
  getUserById,
} = require("../controllers/userController");

const router = express.Router();

router.get("/profile", getUser);
router.put("/change-password", changePassword);
router.put("/update-myfreescore", updateMyFreeScoreDetails);
router.get("/", getAllUsers);
router.get("/:id", getUserById);

module.exports = router;
