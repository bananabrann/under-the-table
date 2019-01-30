const express = require("express");
const router = express.Router();
const editController = require("../controllers/edit-controller");

router.get("/", editController.show)
router.get("/:id", editController.show);

module.exports = router;
