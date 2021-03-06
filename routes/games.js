const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/games-controller");

console.log("Stepped into games router...");

router.use("/edit", require("./edit"));

router.get("/", gamesController.showAll);

router.get("/new", gamesController.showNewPage);
router.post("/new", gamesController.create);

router.get("/:id", gamesController.showOne);
router.post("/:id", gamesController.addComment);
router.delete("/:id", gamesController.destroy);

module.exports = router;
