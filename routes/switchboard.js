const express = require("express");
const router = express.Router();

router.use("/", require("./homepage"));
router.use("/games", require("./games"));

module.exports = router;
