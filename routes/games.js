const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/games-controller");

router.get("/games/:id", gamesController.show);
router.put("/games/:id", gamesController.update);
router.delete("/games/:id", gamesController.destroy);

router.get("/games/new", gamesController.show);
router.post("/games/new", gamesController.create);

module.exports = router;
