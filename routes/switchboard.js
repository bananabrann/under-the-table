const express = require("express");
const router = express.Router();
const gamesController = require('../controllers/games-controller')
const homepageController = require("../controllers/homepage-controller")

router.get("/", homepageController.show)

module.exports = router;