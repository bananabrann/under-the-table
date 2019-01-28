const express = require("express");
const router = express.Router();
const gamesController = require('../controllers/games-controller')
const homepageController = require("../controllers/app")

router.get("/", homepageController.show)

router.get("/games/new", gamesController.create)
router.get("/games/:id", gamesController.show)

module.exports = router;