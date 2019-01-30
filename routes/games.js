const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/games-controller");

router.get("/", gamesController.showAll);

router.get("/new", gamesController.showNewPage);
router.post("/new", gamesController.create);

router.get("/:id", gamesController.showOne);
router.post("/:id", gamesController.addComment);
router.put("/:id", gamesController.update);
router.delete("/:id", gamesController.destroy);

module.exports = router;
