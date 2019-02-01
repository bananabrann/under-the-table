const express = require("express");
const router = express.Router();

console.log("Stepped into switchboard router...");

router.use("/", require("./homepage"));
router.use("/games", require("./games"));

module.exports = router;
