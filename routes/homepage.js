const express = require("express");
const router = express.Router();

console.log("Stepped into homepage router...");

const homepageController = require("../controllers/homepage-controller");

router.get("/", homepageController.index);

module.exports = router;
