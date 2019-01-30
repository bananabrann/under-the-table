const express = require("express");
const router = express.Router();

const gamesController = require("../controllers/games-controller");

router.get("/", gamesController.showAll)
// console.log("before router tagged")
router.get("/new", gamesController.showNewPage);
// console.log("after router tagged")
router.post("/new", gamesController.create);
router.post("/:id", gamesController.addComment)
router.get("/:id", gamesController.showOne);
router.put("/:id", gamesController.update);
router.delete("/:id", gamesController.destroy);


module.exports = router;
