const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games-controller");
const homepageController = require("../controllers/homepage-controller");

router.get("/", homepageController.show);

router.get("/games/new", gamesController.show);
router.post("/games/new", gamesController.create);

router.get("/games/:id", gamesController.show);
router.put("/games/:id", gamesController.update);
router.delete("/games/:id", gamesController.destroy);

module.exports = router;
