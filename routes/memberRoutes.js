const express = require("express");
const {
  signin,
  signup,
  verifyUser,
  verifyExtra,
  getAllUsers,
  getUser,
} = require("../controllers/memberController");

const router = express.Router();

router.get("/", getAllUsers);
router.get("/:memberId", getUser);
router.post("/signup", signup);
router.post("/signin", signin);
router.put("/verify/:memberId", verifyUser);
router.put("/extra/:memberId", verifyExtra);

module.exports = router;
