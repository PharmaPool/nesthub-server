const express = require("express");
const router = express.Router();
const multer = require("multer");
const listing_controller = require("../controllers/propertylisting");

const upload = multer({
  dest: "/temp",
  limits: { files: 5 },
}).array("images", 5);

router.post("/abuja", upload, listing_controller.abuja_listing);
router.post("/lagos", upload, listing_controller.lagos_listing);
router.post("/location", upload, listing_controller.location_listing);
router.get("/:location", listing_controller.get_listing);

module.exports = router;
