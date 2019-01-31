const express = require("express");
const router = express.Router();
const editController = require("../controllers/edit-controller");

console.log("Stepped into edit router...")


// router.get("/", editController.show)
router.get("/:id", editController.show);
router.put("/:id", editController.update)

module.exports = router;