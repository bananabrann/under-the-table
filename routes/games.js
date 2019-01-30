const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/games-controller");

router.get("/", gamesController.showAll)
router.get("/:id", gamesController.showOne);
router.put("/:id", gamesController.update);
router.delete("/:id", gamesController.destroy);

router.get("/new", gamesController.show);
router.post("/new", gamesController.create);

module.exports = router;
