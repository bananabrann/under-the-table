const express = require("express");
const router = express.Router();

// router.use("/", require("../controllers/frontpage").index);

router.get("/", (req, res) => {
    res.render("homepage");
});


// router.get("/", require("../controllers/frontpage").show);

module.exports = router;
